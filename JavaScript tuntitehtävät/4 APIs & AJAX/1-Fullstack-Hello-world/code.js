'use strict';

async function asynchronousFunction() {
    console.log('asynchronous download begins');
    const output = document.getElementById('output');
    try {
        const response = await fetch('http://127.0.0.1:5000/')
        const jsonData = await response.json();
        console.log(jsonData.count);

        const count = jsonData.count;
        for (let i = 0; i < count; i++) {
            const p = document.createElement('p');
            p.textContent = "Hello world!";
            output.appendChild(p);
        }
    } catch(error) {
        console.log(error.message);
    } finally {
        console.log('asynchronous load complete');
    }
}

asynchronousFunction();