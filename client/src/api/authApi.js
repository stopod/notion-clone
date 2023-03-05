import axiosClient from "./axiosClient";

const authApi = {
  register: (param) => axiosClient.post("/auth/register", param),
  login: (param) => axiosClient.post("/auth/login", param),
  verifyToken: () => axiosClient.post("/auth/verify-token"),
};

export default authApi;
