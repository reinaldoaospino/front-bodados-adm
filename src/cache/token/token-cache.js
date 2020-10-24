import { setCache, getCache } from '../cache-manager'

var key = 'TUBkgrJOFAFuLWqL6TJ37TN3qa7MiAzqUUU';

export const setTokenCache = (value) => {
    var expireTime = new Date()
    var daysToAdd = expireTime.getDate() + 6;
    expireTime.setDate(daysToAdd)
    setCache(key, value, expireTime)
}

export const GetTokenCache = () => {
    return getCache(key)
}