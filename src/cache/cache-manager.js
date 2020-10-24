import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCache = (key, value, experies) => {
    cookies.set(key, value, { expires: experies })
};

export const getCache = (key) => {
    return cookies.get(key)
};