import { publicClient } from "../client/public.client";

const movieApi = {
    getAllMovie: () => {
        return publicClient.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP03');
    },
    getMovieById: (idMovie) => {
        return publicClient.get('QuanLyPhim/LayThongTinPhim',{
            params:{
                MaPhim:idMovie
            }
        });
    }
}

export default movieApi;