import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-217c5-default-rtdb.firebaseio.com/'
});

export default instance;