import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as ReactWrapBalancer } from 'react-wrap-balancer';
import RouteProvider from '../routes/Index';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
          <RouteProvider>
            <ReactWrapBalancer>{children}</ReactWrapBalancer>
          </RouteProvider>
      </QueryClientProvider>
    </>
  );
}
