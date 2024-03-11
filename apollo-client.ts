import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = () => {
    const client = new ApolloClient({
        uri: 'https://bielefeld.stepzen.net/api/open-meteo/__graphql',
        headers: {'Authorization':'apikey bielefeld::stepzen.io+1000::11c59fe1d7ece26fde59c254679b93a67754d8e2dcad487ae0fa23762550a9f4'},
        cache: new InMemoryCache(),
    });
      
    return client;
}