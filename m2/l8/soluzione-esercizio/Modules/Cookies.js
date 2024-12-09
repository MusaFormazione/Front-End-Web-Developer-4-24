export function setCookie(key, value){

    const date = new Date();
    date.setMonth(date.getMonth() + 1);

    let cookie = `${key}=${value}`;
    let expires = `expires=${date.toUTCString()}`;

    document.cookie = `${cookie}; ${expires}; path=/`;
}

export function getCookie(key){
    const cookies = document.cookie.split('; ')

    const foundCookie = cookies.find(c =>  c.startsWith(key))    

    return foundCookie ? foundCookie.split('=')[1] : null
}