import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID GjqXzS8z5llwUSA7-V5Ao7rrELUeU37H9NMeRUf5tcM'
    }
});

