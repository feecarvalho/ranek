export const queryParamsSerialize = (object) => {
    let queryString = ""
    for (let key in object) {
        queryString += `&${key}=${object[key]}`
    }

    return queryString;
}
