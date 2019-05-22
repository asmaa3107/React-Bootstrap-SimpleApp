import http from "./httpService";
import {
  apiUrl
} from "../config.json";
import httpService from "../services/httpService";
import jwtDecode from 'jwt-decode';

const apiEndPoint = apiUrl + "/auth";
const tokenKey = "token";
httpService.setJWT(getJWT());

export async function login(email, password) {
  const {
    data: jwt
  } = await http.post(apiEndPoint, {
    email,
    password
  });
  localStorage.setItem(tokenKey, jwt);

}
//for registeration
export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}
export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {

  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);

  } catch (ex) {
    return null;
  }
}

export function getJWT() {
  return localStorage.getItem(tokenKey);
}


export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,getJWT
}