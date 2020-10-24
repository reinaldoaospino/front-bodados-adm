import bodacosApi from '../../apis/bocadosApis';
import { GetTokenCache, setTokenCache } from '../../cache/token/token-cache';

const data = JSON.stringify({
    "User": "F38B52D3F75690AC7A42AAC45478A4E7BC9620F3FB4BU1E1309405FD57B065CC",
    "Password": "3975F64BC14A3E1040E60355B6A8D8EC0B1FC50A2BB8D6C3884CEF42BAF0B204"
})


export const GetToken = async () => {
    var tokenCache = GetTokenCache();

    if (tokenCache)
        return tokenCache;

    const response = await bodacosApi.post("/api/authentication/token", data)
    setTokenCache(response.data.token);
    return response.data.token;
};

