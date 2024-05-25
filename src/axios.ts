import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8001/api', // Se till att din backend körs på denna URL och port
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default apiClient;
