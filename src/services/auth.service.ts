import request from "./axiosWrapper";

function login(userName: string, password: string) {
  return request({
    url: "/authenticate",
    method: "POST",
    data: {
      username: userName,
      password: password
    }
  });
}

function register(userName: string, password: string, email: string) {
  return request({
    url: "/register",
    method: "POST",
    data: {
      username: userName,
      password: password,
      email: email
    }
  });
}

function validateToken(jwt: string) {
  return request({
    url: "/validate",
    method: "GET",
    headers: {
      Authorization: "Bearer " + jwt
    }
  });
}

const authService = {
  login,
  validateToken,
  register,
};

export default authService;