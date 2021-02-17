import axios from 'axios';


export default axios.create({
    baseURL: 'http://api-bocados.azurewebsites.net',
    headers:{
        'Content-Type': 'application/json',
    }
});