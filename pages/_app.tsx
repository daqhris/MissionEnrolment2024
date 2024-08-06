import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WagmiConfig, createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Configure chains & providers
const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

// Configure Apollo Client
const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_ENDPOINT', // Replace with your actual GraphQL endpoint
  cache: new InMemoryCache(),
});

// Create a QueryClient instance
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ApolloProvider>
    </WagmiConfig>
  );
}

export default MyApp;
