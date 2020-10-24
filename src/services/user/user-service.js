import bocadosApi from '../../apis/bocadosApis';
import { GetToken } from '../token/token-service';



export const AutenticateUser = async (userData) => {
    var tokenTask = GetToken();

    const data = JSON.stringify({
        "UserName": userData.user,
        "Password": userData.password
    })

    var token = await tokenTask;
    const response = await bocadosApi.post("/api/user/authenticate", data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return response.data.isCorrect;
}