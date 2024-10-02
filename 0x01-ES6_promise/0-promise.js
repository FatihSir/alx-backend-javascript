async function getResponseFromAPI(){
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1000)
    })
    return await promise;
}

getResponseFromAPI()
    .then (res => console.log(res))
