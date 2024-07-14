// export const BACKEND_URL = "http://localhost:3004";
export const BACKEND_URL = "https://meducate-backend.onrender.com";

export const API_ENDPOINT = BACKEND_URL + "/api";

export const USER_ENDPOINT = API_ENDPOINT + "/user";
export const REGISTER_ENDPOINT = USER_ENDPOINT + "/register";
export const LOGIN_ENDPOINT = USER_ENDPOINT + "/login";
export const AUTO_LOGIN_ENDPOINT = USER_ENDPOINT + "/auto-login";

export const COURSE_ENDPOINT = API_ENDPOINT + "/course";
export const USER_COURSE_ENDPOINT = COURSE_ENDPOINT + "/user-courses";
export const TRENDING_COURSE_ENDPOINT = COURSE_ENDPOINT + "/trending";
export const RECOMMENDED_COURSE_ENDPOINT = COURSE_ENDPOINT + "/recommended";
export const RECENTLY_WATCHED_COURSE_ENDPOINT = COURSE_ENDPOINT + "/recently-watched";

export const LECTURE_ENDPOINT = API_ENDPOINT + "/lecture";
export const COURSE_LECTURES_ENDPOINT = LECTURE_ENDPOINT + "/course";

export const ACTIVITY_ENDPOINT = API_ENDPOINT + "/activity";
export const VIEWING_ACTIVITY_ENDPOINT = ACTIVITY_ENDPOINT + "/viewing";
export const COMPLETED_LECTURES_ACTIVITY_ENDPOINT = ACTIVITY_ENDPOINT + "/completed-lectures";
export const WEEKLY_WATCHTIME_ENDPOINT = ACTIVITY_ENDPOINT + "/weekly-watchtime";

export const ADD_CERTIFICATE_ENDPOINT = COURSE_ENDPOINT + "/generate-certificate";
export const GET_CERTIFICATES_ENDPOINT = COURSE_ENDPOINT + "/certificates";
export const GET_CERTIFICATE_ENDPOINT = COURSE_ENDPOINT + "/certificate";
