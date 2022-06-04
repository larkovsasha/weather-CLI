import {getKeyValue} from "./storage.service.js";
import axios from "axios";

export const getIcon = (res) => {
    switch (res.weather[0].icon.slice(0, -1)) {
        case '01':
            return '☀️';
        case '02':
            return '🌤️';
        case '03':
            return '☁️';
        case '04':
            return '☁️';
        case '09':
            return '🌧️';
        case '10':
            return '🌦️';
        case '11':
            return '🌩️';
        case '13':
            return '❄️';
        case '50':
            return '🌫️';
    }
};


export const getWeather = async (city) => {
    const token = await getKeyValue('token')
    if (!token){
        throw new Error('API key not set, set it up -t [API_KEY] ')
    }
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params:{
            q:city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })
    return data
}