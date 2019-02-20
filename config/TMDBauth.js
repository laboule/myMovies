const API_key_v4 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmYyMjE1ZmVjNzMyYzk3MTk4YzliMGFiOTE3NTU4OCIsInN1YiI6IjVjNjU4ZDZmMGUwYTI2N2RlNjljMzVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EEBmcOHLa7AdseNdliH9-G1bm5UK2VZnNIOkyXNOLMM";
const api_key_v3 = "92f2215fec732c97198c9b0ab9175588";

//const url = "https://api.themoviedb.org/3/search/movie?api_key="+api_key_v3;

export async function getMoviesFromAPI(text,page=1)
{
const url = `https://api.themoviedb.org/3/search/movie
?api_key=${api_key_v3}
&query=${text}
&page=${page}`;
const response = await fetch(url);
const json = await response.json();
return json;
}

export async function findMovie(id)
{
const url = `https://api.themoviedb.org/3/movie/
${parseInt(id,10)}?api_key=${api_key_v3}&language=fr_FR`
const response = await fetch(url);
const json = await response.json();
return json;

}

export function getImageFromPath(path)
{
return "http://image.tmdb.org/t/p/w185/"+path;
}

export const poster_path = "http://image.tmdb.org/t/p/w185/";