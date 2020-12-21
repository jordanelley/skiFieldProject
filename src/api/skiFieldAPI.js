import axios from 'axios';

export const addSkiFieldReview = (name,review) => {
    console.log(name,review)
    return axios({
        method: 'POST',
        url: 'http://localhost:5000/reviews',
        data: {name, review}
    })
}
