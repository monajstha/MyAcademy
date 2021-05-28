import axios from 'axios';

export const getAllPosts = () => {
  return axios({
    method: 'get',
    url: '/posts',
  }).then((response) => response.data);
};
export const createPost = (data) => {
  return axios({
    method: 'POST',
    url: '/student',
    data: data,
  }).then((response) => response.data);
};

export const login = (username, password) => {
  return axios({
    method: 'GET',
    url: `/student?username=${username}&password=${password}`,
  }).then((response) => response.data);
};

export const adminLogin = (username, password) => {
  return axios({
    method: 'GET',
    url: `/admin?username=${username}&password=${password}`,
  }).then((response) => response.data);
};

export const addresultPost = (data) => {
  console.log(data);
  return axios({
    method: 'POST',
    url: '/result',
    data: data,
  }).then((response) => response.data);
};

export const addFeePost = (data) => {
  return axios({
    method: 'POST',
    url: '/fee',
    data: data,
  }).then((response) => response.data);
};
export const getFee = (username) => {
  return axios({
    method: 'GET',
    url: `/getFeeDetails?username=${username}`,
    // data: data,
  }).then((response) => response.data);
};

export const getStudentsList = () => {
  return axios({
    method: 'GET',
    url: `/studentList`,
  }).then((response) => response.data);
};

export const getAllUsername = (username) => {
  return axios({
    method: 'GET',
    url: `/signUP?username=${username}`,
  }).then((response) => response.data);
};

export const getResult = (username) => {
  // console.log(username);
  return axios({
    method: 'GET',
    url: `/result?username=${username}`,
  });
};

export const getStudentDetails = (username) => {
  return axios({
    method: 'GET',
    url: `/studentDetails?username=${username}`,
  }).then((response) => response.data);
};
