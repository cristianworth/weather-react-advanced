// Single component
import { gql, useQuery } from "@apollo/client";

export function MyComponent() {
  const { loading, error, data } = useQuery(
    gql`
      query myQuery(
        $current: String
        $daily: String
        $hourly: String
        $latitude: String
        $longitude: String
        $timezone: String
      ) {
        myQuery(
          daily: $daily
          hourly: $hourly
          latitude: $latitude
          longitude: $longitude
          timezone: $timezone
          current: $current
        ) {
          current {
            apparent_temperature
            interval
            is_day
            precipitation
            rain
            relative_humidity_2m
            showers
            snowfall
            temperature_2m
            time
            weather_code
            wind_direction_10m
            wind_gusts_10m
            wind_speed_10m
          }
          current_units {
            apparent_temperature
            interval
            is_day
            precipitation
            rain
            relative_humidity_2m
            showers
            snowfall
            temperature_2m
            time
            weather_code
            wind_direction_10m
            wind_gusts_10m
            wind_speed_10m
          }
          daily {
            apparent_temperature_max
            apparent_temperature_min
            sunrise
            sunset
            temperature_2m_max
            temperature_2m_min
            time
            uv_index_clear_sky_max
            uv_index_max
            weather_code
          }
          daily_units {
            apparent_temperature_max
            apparent_temperature_min
            sunrise
            sunset
            temperature_2m_max
            temperature_2m_min
            time
            uv_index_clear_sky_max
            uv_index_max
            weather_code
          }
          elevation
          generationtime_ms
          hourly {
            apparent_temperature
            dew_point_2m
            precipitation
            precipitation_probability
            rain
            relative_humidity_2m
            showers
            snow_depth
            snowfall
            temperature_2m
            time
            uv_index
            uv_index_clear_sky
            weather_code
            wind_direction_10m
            wind_gusts_10m
            wind_speed_10m
          }
          hourly_units {
            apparent_temperature
            dew_point_2m
            precipitation
            precipitation_probability
            rain
            relative_humidity_2m
            showers
            snow_depth
            snowfall
            temperature_2m
            time
            uv_index
            uv_index_clear_sky
            weather_code
            wind_direction_10m
            wind_gusts_10m
            wind_speed_10m
          }
          latitude
          longitude
          timezone
          timezone_abbreviation
          utc_offset_seconds
        }
      }
    `,
    {
      variables: {},
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return <p>{data}</p>;
}
