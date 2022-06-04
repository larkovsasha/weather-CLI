export const getArgs = (args) => {
    const res = {}
    const [executer, file, ...rest] = args
    rest.forEach((arg, index, array) => {
        if (arg[0] === '-'){
            const key = arg.substring(1)
            // default value
            let value = true
            if (index + 1 !== rest.length && array[index + 1][0] !== '-'){
                // if next arg is not key or arg flag
                value = array[index + 1]
            }
            res[key] = value
        }
    })
    return res
}