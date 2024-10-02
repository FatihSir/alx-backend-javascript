export default function handleResponseFromAPI(promise) {
  return new promise
    .then(() => ({
      status: 200,
      body: 'success'
      }))
    .catch(() => new Erorr)
    .finally(() => console.log(`Got a response from the API`));
}
