const BASE_URL = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/solaris-api';

async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`); 
    const data = await response.json();

    return data.key;
}

async function getPlanets() {
    const key = await getKey();
    const response = await fetch(`${BASE_URL}/bodies`, {
        headers: {
            'x-zocom': key
        }
    });
    const data = await response.json();

    return data.bodies;
}

export { getPlanets };
