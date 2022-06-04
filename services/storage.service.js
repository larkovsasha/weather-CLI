import {homedir} from 'os'
import { join } from 'path'
import { promises } from 'fs'

const filaPath = join(homedir(), 'weather-data.json')

export const saveKeyValue = async (key, value) => {
    let data = {}
    if (await isExist(filaPath)){
        const file = await promises.readFile(filaPath)
        data = JSON.parse(file)
    }
    data[key] = value
    await promises.writeFile(filaPath, JSON.stringify(data))
}

export const getKeyValue = async (key) => {
    if (await isExist(filaPath)){
        const file = await promises.readFile(filaPath)
        const data = JSON.parse(file)
        return data[key]
    }
}

const isExist = async (path) => {
    try {
        await promises.stat(path)
        return true
    }catch (e){
        return false
    }
}
