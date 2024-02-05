import { endOfDay, startOfDay } from 'date-fns';
import { applyPagination } from 'src/utils/apply-pagination';
import { deepCopy } from 'src/utils/deep-copy';
import { listData, itemData } from './data';

class DealsApi {
  getList(request = {}) {
    const { filters, page, rowsPerPage } = request;

    let data = deepCopy(listData);
    let count = data.length;

    if (typeof filters !== 'undefined') {
      data = data.filter((item) => {
        if (typeof filters.query !== 'undefined' && filters.query !== '') {
          const matched = item.number.toLowerCase().includes(filters.query.toLowerCase());

          if (!matched) {
            return false;
          }
        }

        if (typeof filters.startDate !== 'undefined') {
          if (typeof item.issueDate === 'undefined') {
            return false;
          }

          const matched = endOfDay(item.issueDate) >= startOfDay(filters.startDate);

          if (!matched) {
            return false;
          }
        }

        if (typeof filters.endDate !== 'undefined') {
          if (typeof item.issueDate === 'undefined') {
            return false;
          }

          const matched = startOfDay(item.issueDate) <= endOfDay(filters.endDate);

          if (!matched) {
            return false;
          }
        }

        if (typeof filters.customers !== 'undefined' && filters.customers.length > 0) {
          const matched = filters.customers.includes(item.customer.name);

          if (!matched) {
            return false;
          }
        }

        if (typeof filters.status !== 'undefined') {
          if (item.status !== filters.status) {
            return false;
          }
        }

        return true;
      });
      count = data.length;
    }

    if (typeof page !== 'undefined' && typeof rowsPerPage !== 'undefined') {
      data = applyPagination(data, page, rowsPerPage);
    }

    return Promise.resolve({
      data,
      count,
    });
  }

  getItem(request) {
    return Promise.resolve(deepCopy(itemData));
  }
}

export const dealsApi = new DealsApi();
