import axiosClient from "./axiosClient";

const authApi = {
  register: (param) => axiosClient.post("/auth/register", param),
};

export default authApi;
