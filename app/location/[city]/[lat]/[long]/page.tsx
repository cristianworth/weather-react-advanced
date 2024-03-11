import { getClient } from "@/apollo-client";
import CalloutCard from "@/app/components/CalloutCard";
import StatCard from "@/app/components/StatCard";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      latitude: lat,
      longitude: long,
      current:
        "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m",
      hourly:
        "temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,uv_index,uv_index_clear_sky",
      daily:
        "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max",
      timezone: "America/Sao_Paulo",
    },
  });

  const results: Root = data.myQuery;
  console.log("results", results);

  return (
    <div>
      {/* InformationPanel */}
      <div>
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated at:{" "}
              {new Date(results.daily.time[0]).toLocaleString()}
            </p>
          </div>
          <div>
            <CalloutCard message="GPT sumarry will go here!" />
          </div>
          <br></br>
          <div>
            <StatCard
              title="Maximum Temperature"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}º`}
              color="yellow"
            />
            <StatCard
              title="Minimum Temperature"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}º`}
              color="green"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
