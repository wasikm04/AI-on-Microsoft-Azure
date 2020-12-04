
import { AUTH_KEY, CONTENT_TYPE, ENDPOINT_ANALYZE, ENDPOINT_READ, OCR_ENDPOINT_READ } from "./config.js"

const delay = ms => new Promise(res => setTimeout(res, ms));

export async function sendRequest(body) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': AUTH_KEY,
            'Content-Type': CONTENT_TYPE
        },
        body: body
    };
    const asyncVar = await fetch(ENDPOINT_ANALYZE, requestOptions);
    for (var pair of asyncVar.headers.entries()) {
        if (pair[0] === 'apim-request-id') {
            return await sendReadRequest(pair[1]).then((data) => {
                return data;
            })
        }
    }
}

async function sendReadRequest(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': AUTH_KEY,
        },
    };
    var response = null;
    var condition = 'running';

    while (condition === 'running') {
        await delay(2000);
        await fetch(ENDPOINT_READ + id, requestOptions)
            .then(response => response.json())
            .then(data => {
                condition = data.status;
                response = data;
            });
    }
    return await response.analyzeResult.readResults[0].lines;
}

export async function sendOCRRequest(body) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': AUTH_KEY,
            'Content-Type': CONTENT_TYPE
        },
        body: body
    };
    const asyncVar = await fetch(OCR_ENDPOINT_READ, requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.regions != null && data.regions.length) {
                return data.regions[0].lines;
            } else {
                return [{ 'words': [{ 'text': 'Nie udało się rozpoznać znaków' }] }];
            }
        });
    return asyncVar;
}