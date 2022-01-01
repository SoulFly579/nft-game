export const localStorageRead = (key)=>{
    return localStorage.getItem(key);
} 

export const localStorageWrite = (key,value)=>{
    return localStorage.setItem(key,value);
}

export const localStorageDelete = (key)=>{
    return localStorage.removeItem(key)
}

export const localStorageDeleteAll = ()=>{
    return  localStorage.clear()
}