import SpotifyWrapper from 'spotify-wrapper';

const TOKEN_API = 'BQCgnuKJBVf5PZcyPWBkaMVIZ4-ImOa5jg33lcCL4I0qj-AiAYayCfLRSSZYmt6GhQD4HEb1FCcX0e5c9voSVUSy2Vzv37porEZ-3jRF5VNCZDtm5V2XZJylF4YwOAYRzHToxE60mcCpuOCaPcGRwA';

const spotify = new SpotifyWrapper({
  token: TOKEN_API,
});

export default spotify;
