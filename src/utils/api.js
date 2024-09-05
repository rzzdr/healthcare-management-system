import axios from 'axios';
import { auth } from '../components/Sign-In/firebaseConfig';

const api = axios.create({
    baseURL: 'https://sih-internal-ps.yellowbush-cadc3844.centralindia.azurecontainerapps.io',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(async (config) => {
    const token = await auth?.currentUser?.getIdToken();
    console.log(token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;

}
);

export  default api;