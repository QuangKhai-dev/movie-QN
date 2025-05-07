import { publicClient } from "../client/public.client";

const userApi = {
    login: (data) => {
        return publicClient.post('QuanLyNguoiDung/DangNhap', data);
    },
    register: (data) => {
        return publicClient.post('QuanLyNguoiDung/DangKy', data);
    }
}

export default userApi;