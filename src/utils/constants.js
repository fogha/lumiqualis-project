export const base_nasa_url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;
export const base_tmdb_url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=NASA&include_adult=false&1`;
export const image_base_url = "https://image.tmdb.org/t/p/original/"