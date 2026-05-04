const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('API Flow - Create, Get, Update User', async ({ request }) => {

    const apiKey = process.env.API_KEY;

    const headers = {
        'x-api-key': apiKey,
        'Content-Type': 'application/json'
    };

    let userId;

    await test.step('Create User', async () => {
        const createRes = await request.post('https://reqres.in/api/users', {
            headers,
            data: {
                name: 'Nagaraj',
                job: 'QA'
            }
        });

        console.log('CREATE STATUS:', createRes.status());
        expect(createRes.status()).toBe(201);

        const body = await createRes.json();
        userId = body.id;

        console.log('USER ID:', userId);
    });

    await test.step('Get User', async () => {
        const getRes = await request.get(`https://reqres.in/api/users/${userId}`, {
            headers
        });

        console.log('GET STATUS:', getRes.status());
        expect([200, 404]).toContain(getRes.status());
    });

    await test.step('Update User', async () => {
        const updateRes = await request.put(`https://reqres.in/api/users/${userId}`, {
            headers,
            data: {
                name: 'Updated Nagaraj'
            }
        });

        console.log('UPDATE STATUS:', updateRes.status());
        expect([200, 201]).toContain(updateRes.status());
    });
});