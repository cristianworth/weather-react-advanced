import { useQuery } from "@apollo/client";
import fetchWeatherQuery from "./graphql/queries/fetchWeatherQueries";

export function MyComponent() {
  const { loading, error, data } = useQuery(fetchWeatherQuery, {
    variables: {
      current_weather: "true",
      longitude: "-54.24",
      latitude: "-27.7733",
      timezone: "GMT",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;
  if (data) return <p>Yay it worked...</p>;

  return <p>{data}</p>;
}
