// Переделать в ДЗ не fetch!!!!! а new Promise()
let getRequest = (url) => new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                rej('Error');
            } else {
                res(xhr.responseText);
            }
        }
    };
    xhr.send();
}
)

export default getRequest