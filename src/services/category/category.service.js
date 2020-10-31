import bocadosApi from '../../apis/bocadosApis';
import { GetToken } from '../token/token-service';
const endPoint = '/api/category';

export const CreateCategory = async (categoryData) => {
    var tokenTask = GetToken();

    const data = JSON.stringify({
        "CategoryName": categoryData.categoryName
    })

    var token = await tokenTask;

    const response = await bocadosApi.post(endPoint, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    
    return response;
}

export const GetPCategory = async () => {
    var token = await GetToken();

    const response = await bocadosApi.get(endPoint, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return response.data;
}

export const UpdatePCategory = async (categoryData) => {
    var tokenTask = GetToken();

    const data = JSON.stringify({
        "CategoryName": categoryData.categoryName
    })

    var token = await tokenTask;

    const response = await bocadosApi.put(endPoint, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return response.status;
}

export const DeleteCategory = async (id) => {
    var tokenTask = GetToken();

    var token = await tokenTask;

    const response = await bocadosApi.delete(`${endPoint}/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return response.status;
}
