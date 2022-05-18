import axios from 'axios';

export default axios.create({
    baseURL: `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}`,
});