import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';
import Loading from './components/loading/Loading';
import './index.css';
const App = lazy(() => import('./App'));

const queryClient = new QueryClient();

ReactDOM.render(
  <Suspense fallback={
    <div className="flex justify-center my-52">
      <Loading size={70} />
    </div>
  }>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: 'top', horizontal: 'right',}}
      preventDuplicate={true}
    >
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </SnackbarProvider>
  </Suspense>,
  document.getElementById('root')
);

