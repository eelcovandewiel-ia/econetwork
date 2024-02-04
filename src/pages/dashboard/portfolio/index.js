import { useCallback, useEffect, useRef, useState } from 'react';
import FilterFunnel01Icon from '@untitled-ui/icons-react/build/esm/FilterFunnel01';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { portfolioApi } from 'src/api/portfolio';
import { Seo } from 'src/components/seo';
import { useMounted } from 'src/hooks/use-mounted';
import { usePageView } from 'src/hooks/use-page-view';
import { Layout as DashboardLayout } from 'src/layouts/dashboard';
import { PortfolioListContainer } from 'src/sections/dashboard/portfolio/portfolio-list-container';
import { PortfolioListSidebar } from 'src/sections/dashboard/portfolio/portfolio-list-sidebar';
import { PortfolioListSummary } from 'src/sections/dashboard/portfolio/portfolio-list-summary';
import { PortfolioListTable } from 'src/sections/dashboard/portfolio/portfolio-list-table';

const usePortfolioSearch = () => {
  const [state, setState] = useState({
    filters: {
      customers: [],
      endDate: undefined,
      query: '',
      startDate: undefined,
    },
    page: 0,
    rowsPerPage: 20,
  });

  const handleFiltersChange = useCallback((filters) => {
    setState((prevState) => ({
      ...prevState,
      filters,
      page: 0,
    }));
  }, []);

  const handlePageChange = useCallback((event, page) => {
    setState((prevState) => ({
      ...prevState,
      page,
    }));
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setState((prevState) => ({
      ...prevState,
      rowsPerPage: parseInt(event.target.value, 10),
    }));
  }, []);

  return {
    handleFiltersChange,
    handlePageChange,
    handleRowsPerPageChange,
    state,
  };
};

const usePortfolioStore = (searchState) => {
  const isMounted = useMounted();
  const [state, setState] = useState({
    items: [],
    itemsCount: 0,
  });

  const handlePortfolioGet = useCallback(async () => {
    try {
      const response = await portfolioApi.getList(searchState);

      if (isMounted()) {
        setState({
          items: response.data,
          itemsCount: response.count,
        });
      }
    } catch (err) {
      console.error(err);
    }
  }, [searchState, isMounted]);

  useEffect(
    () => {
      handlePortfolioGet();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchState]
  );

  return {
    ...state,
  };
};

const Page = () => {
  const rootRef = useRef(null);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const portfolioSearch = usePortfolioSearch();
  const portfolioStore = usePortfolioStore(portfolioSearch.state);
  const [group, setGroup] = useState(true);
  const [openSidebar, setOpenSidebar] = useState(lgUp);

  usePageView();

  const handleGroupChange = useCallback((event) => {
    setGroup(event.target.checked);
  }, []);

  const handleFiltersToggle = useCallback(() => {
    setOpenSidebar((prevState) => !prevState);
  }, []);

  const handleFiltersClose = useCallback(() => {
    setOpenSidebar(false);
  }, []);

  return (
    <>
      <Seo title="Dashboard: Portfolio" />
      <Divider />
      <Box
        component="main"
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          ref={rootRef}
          sx={{
            bottom: 0,
            display: 'flex',
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        >
          <PortfolioListSidebar
            container={rootRef.current}
            filters={portfolioSearch.state.filters}
            group={group}
            onFiltersChange={portfolioSearch.handleFiltersChange}
            onClose={handleFiltersClose}
            onGroupChange={handleGroupChange}
            open={openSidebar}
          />
          <PortfolioListContainer open={openSidebar}>
            <Stack spacing={4}>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <div>
                  <Typography variant="h4">Portfolio</Typography>
                </div>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon>
                        <FilterFunnel01Icon />
                      </SvgIcon>
                    }
                    onClick={handleFiltersToggle}
                  >
                    Filters
                  </Button>
                 
                </Stack>
              </Stack>
              <PortfolioListSummary />
              <PortfolioListTable
                count={portfolioStore.itemsCount}
                group={group}
                items={portfolioStore.items}
                onPageChange={portfolioSearch.handlePageChange}
                onRowsPerPageChange={portfolioSearch.handleRowsPerPageChange}
                page={portfolioSearch.state.page}
                rowsPerPage={portfolioSearch.state.rowsPerPage}
              />
            </Stack>
          </PortfolioListContainer>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
