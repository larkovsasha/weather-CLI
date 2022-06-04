#!/usr/bin/env node
import {getArgs} from "./helpers/args.js";
import {printError, printHelp, printSuccess, printWeather} from "./services/log.service.js";
import {getIcon, getWeather} from "./services/api.service.js";
import {saveCity, saveToken} from "./helpers/saveData.js";
import {getKeyValue} from "./services/storage.service.js";

const getForcast = async (city) => {
    try {
        const weather = await getWeather(city)
        printWeather(weather, getIcon(weather))
    }catch (e){
        switch (e.response?.status){
            case 404:
                printError('Wrong city')
                break
            case 401:
                printError('Wrong token')
                break
            default:
                printError(e.message)
                break
        }
    }
}

const initCLI = async () => {
    const args = getArgs(process.argv)
    if (args.h){
        printHelp()
        return
    }
    if (args.t){
        await saveToken(args.t)
    }
    if(args.s){
        await saveCity(args.s)
    }
    await getForcast(await getKeyValue('city'))
}

initCLI()
