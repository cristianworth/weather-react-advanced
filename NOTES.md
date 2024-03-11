# Personal notes
## Snippet
rfce = default export component
## VS code Extensions used
ES7 = react and redux snippets
Tailwind CSS = snippets for tailwind 
## Maping dynamic data
location/[city]/[lat]/[long] = the `[]` would get any parameter before the `/`
## Stepzen
Create account and a folder called stepzen, and use the following cmds
https://dashboard.stepzen.com/getting-started?account=bielefeld
```
cd stepzen
npm install -g stepzen
stepzen login -a bielefeld
admin key: bielefeld::stepzen.io+1000::11c59fe1d7ece26fde59c254679b93a67754d8e2dcad487ae0fa23762550a9f4
```

How to import data from a URL and start stepzen
```
Get-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned -Scope Process
stepzen init --endpoint=api/open-meteo
stepzen import curl "https://api.open-meteo.com/v1/forecast?latitude=-27.7733&longitude=-54.24&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,uv_index,uv_index_clear_sky&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&timezone=America%2FSao_Paulo"
stepzen start
```


https://dashboard.stepzen.com/explorer?endpoint=api%2Fopen-meteo



https://open-meteo.com/en/docs/#latitude=-27.7733&longitude=-54.24&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,uv_index,uv_index_clear_sky&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&timezone=America%2FSao_Paulo