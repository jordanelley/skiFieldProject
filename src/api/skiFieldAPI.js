import axios from 'axios';

export const addSkiFieldReview = (name,review) => {
    return axios({
        method: 'POST',
        url: 'http://localhost:5000/reviews',
        data: {name, review}
    })
}
export const getAllSkiFieldReviews = () => {
    return axios({
        method: 'GET',
        url: 'http://localhost:5000/reviews',
    }).then(response => response.data);
}
