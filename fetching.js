const API_ENDPOINT = "https://witzapi.de/api/joke";

export async function fetchJoke() {
  const response = await fetch(API_ENDPOINT);

  const body = await response.json();

  console.log(body);

  return body[0].text;
}

console.log(fetchJoke());
