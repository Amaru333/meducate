export const BACKEND_URL = "http://localhost:3004";

export const API_ENDPOINT = BACKEND_URL + "/api";

export const USER_ENDPOINT = API_ENDPOINT + "/user";
export const REGISTER_ENDPOINT = USER_ENDPOINT + "/register";
export const LOGIN_ENDPOINT = USER_ENDPOINT + "/login";
export const AUTO_LOGIN_ENDPOINT = USER_ENDPOINT + "/auto-login";

export const COURSE_ENDPOINT = API_ENDPOINT + "/course";
export const USER_COURSE_ENDPOINT = COURSE_ENDPOINT + "/user-courses";
export const TRENDING_COURSE_ENDPOINT = COURSE_ENDPOINT + "/trending";

export const LECTURE_ENDPOINT = API_ENDPOINT + "/lecture";
