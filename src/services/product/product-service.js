import bocadosApi from '../../apis/bocadosApis';
import { GetToken } from '../token/token-service';


export const CreateProduct = async (productData) => {
    var tokenTask = GetToken();

    const data = JSON.stringify({
        "ProductName": productData.productName,
        "Price": productData.price,
        "FeaturedProduct": productData.featuredProduct,
        "Category": productData.category,
        "Imagen": productData.imgFile
    })

    var token = await tokenTask;

    const response = await bocadosApi.post('/api/product', data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return response.status;
}

export const GetProducts = async()=>{
    var token = await GetToken();

    const response = await bocadosApi.get('/api/product',{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return response.data;
}