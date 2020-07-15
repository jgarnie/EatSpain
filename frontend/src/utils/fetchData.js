export default async function fetchData(
  url,
  method = null,
  requestBody = null
) {
  let params = null;
  if (method && requestBody) {
    params = {
      method: method,
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    };
  }

  try {
    const response = await fetch(url, params);
    if (!response.status) throw Error(response.statusText);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("There was an error when trying to fetch the data", e);
  }
}
