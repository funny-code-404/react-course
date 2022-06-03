import axios from 'axios'


const reviwsConfig = {
    baseURL: 'https://quiet-spire-94328.herokuapp.com',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
}

const API = axios.create(reviwsConfig)


export const getReviews = async (config = {}) => {
    const reviews = await API.get('/reviews', config)
    return reviews.data.reviews
}

export const sendReview = async (review) => {
    const response = await API.post('/reviews', review)
    return response
}

export const deleteReview = async (id) => {
    const response = await API.delete('/reviews', {data: {id}})
    return response
}


