export default function makeHTTPRequest(url, params) {
  return fetch(url, params)
    .then(response => {
      return Promise.all([response.ok, response.json()]);
    })
    .then(([isSuccess, responseBody]) => {
      if (!isSuccess) {
        throw responseBody;
      }

      return responseBody;
    });
}
