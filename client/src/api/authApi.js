import axiosClient from "./axiosClient";

const authApi = {
  register: (param) => axiosClient.post("/register", param),
};

export default authApi;
