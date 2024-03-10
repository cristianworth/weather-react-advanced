import { MyComponent } from "@/MyComponent";
import { getClient } from "@/apollo-client";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import {
  ApolloProvider,
  gql,
  useQuery,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = new ApolloClient({
    uri: "https://bielefeld.stepzen.net/api/open-meteo/__graphql",
    headers: {
      Authorization:
        "apikey bielefeld::stepzen.io+1000::11c59fe1d7ece26fde59c254679b93a67754d8e2dcad487ae0fa23762550a9f4",
    },
    cache: new InMemoryCache(),
  });
  // console.log("the client is working", client);

  const getData = async () => {
    // Connector: HTTP Error: Bad Request'
    const { data } = await client.query({
      query: fetchWeatherQuery,
      variables: {
        current_weather: "true",
        longitude: long,
        latitude: lat,
        timezone: "America/Sao_Paulo",
      },
    });

    const results: Root = data.myQuery;
    console.log("results", results);
  };

  const getData2 = () => {
    // Error: Cannot read properties of undefined (reading 'client')
    console.clear();
    const { loading, error, data } = useQuery(fetchWeatherQuery, {
      variables: {
        longitude: "-54.24",
        latitude: "-27.7733",
        timezone: "GMT",
      },
    });

    if (loading) console.log("loading", loading);
    if (error) console.log("error", error);
    if (data) console.log("data", data);
  };

  // return (
  //   <ApolloProvider client={client}>
  //     <MyComponent />
  //   </ApolloProvider>
  // );
  getData();
  return <div>Hello</div>;
}

export default WeatherPage;
