import http from './httpService';
import {apiUrl} from '../config.json';

const apiEndPoint = apiUrl+"/movies";

function movieUrl(id) {
  return `${apiEndPoint}/${id}`;
}
export function getMovies() {
  return http.get(apiEndPoint);
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export function saveMovie(movie) {
  debugger;
  if (movie._id) {
    const body = {
      ...movie
    };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiEndPoint, movie);
}

export function deleteMovie(movieid) {
  return http.delete(movieUrl(movieid));
}