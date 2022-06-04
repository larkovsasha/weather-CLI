import {printError, printSuccess} from "../services/log.service.js";
import {saveKeyValue} from "../services/storage.service.js";

export const saveToken = async (token) => {
    if (!token.length){
        printError('No argument passed')
        return
    }
    try{
        await saveKeyValue('token', token)
        printSuccess('Token saved')
    }catch (e){
        printError(e.message)
    }
}

export const saveCity = async (city) => {
    if (!city.length){
        printError('No argument passed')
        return
    }
    try{
        await saveKeyValue('city', city)
        printSuccess('City saved')
    }catch (e){
        printError(e.message)
    }
}