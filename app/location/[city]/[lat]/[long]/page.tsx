import { MyComponent } from "@/MyComponent";
import { getClient } from "@/apollo-client";
import fetchWeatherQuery from "@/fetchWeatherQueries";
import { ApolloProvider, gql, useQuery } from "@apollo/client";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const { loading, error, data } = useQuery(fetchWeatherQuery, {
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT-3",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;
  if (data) return <p>Yay it worked...</p>;

  // const client = getClient();

  // const { data } = await client.query({
  //   query: fetchWeatherQuery,
  // variables: {
  //   current_weather: "true",
  //   longitude: long,
  //   latitude: lat,
  //   timezone: "GMT-3",
  // },
  // });

  // const results: Root = data.myQuery;

  // console.log(results);

  return (
    <ApolloProvider client={getClient()}>
      <MyComponent />
    </ApolloProvider>
  );
}

export default WeatherPage;
