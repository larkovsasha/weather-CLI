import {getKeyValue} from "./storage.service.js";
import axios from "axios";

export const getIcon = (res) => {
    switch (res.weather[0].icon.slice(0, -1)) {
        case '01':
            return 'âī¸';
        case '02':
            return 'đ¤ī¸';
        case '03':
            return 'âī¸';
        case '04':
            return 'âī¸';
        case '09':
            return 'đ§ī¸';
        case '10':
            return 'đĻī¸';
        case '11':
            return 'đŠī¸';
        case '13':
            return 'âī¸';
        case '50':
            return 'đĢī¸';
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