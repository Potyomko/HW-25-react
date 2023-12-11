import axios from "axios";

const URL = "https://api.themoviedb.org/3/";
const KEY = "098c0a06f6f788991ea9bd1b1a28f1b9";

async function FetchHomeApi() {
        const response = await axios.get(`${URL}trending/all/week?api_key=${KEY}&language=en-US`);
        return await response.data;
}
async function FetchMovieInfo({ params }) {
    console.log(params);
        const response = await axios.get(`${URL}/movie/${params.movieId}?api_key=${KEY}&language=en-US`);
        return response.data;
}
async function FetchCastApi({ params }) {
    console.log(params);
    const response = await axios.get(`${URL}movie/${params.movieId}/credits?api_key=${KEY}&language=en-US`)
    return response.data;
}
async function FetchReviewsApi({params}) {
        const response = await axios.get(`${URL}movie/${params.movieId}/reviews?api_key=${KEY}&language=en-US`)
        return response.data;
}
const api = {
    FetchHomeApi,
    FetchCastApi,
    FetchReviewsApi,
    FetchMovieInfo
}
export default api;