// import axios from "axios";

// const instance = axios.create({
//   baseURL:
//     "http://localhost:5001/e-challenge-ec51a/us-central1/api" /* The API (cloud function) URL */,
// });

// export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-challenge-ec51a/us-central1/api",
});

instance.interceptors.response.use(
  (response) => {
    console.log("Axios Response:", response);
    return response;
  },
  (error) => {
    console.error("Axios Error:", error);
    return Promise.reject(error);
  }
);

export default instance;
