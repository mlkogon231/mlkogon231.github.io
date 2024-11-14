const request = require('supertest');
const app = require('../src/app');

describe('Application Tests', () => {
    test('GET / should return 200 with security headers', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.headers['x-frame-options']).toBeDefined();
        expect(response.headers['content-security-policy']).toBeDefined();
    });

    test('Should have basic security headers', async () => {
        const response = await request(app).get('/');
        expect(response.headers['x-frame-options']).toBe('DENY');
        expect(response.headers['x-content-type-options']).toBe('nosniff');
    });

    test('Should implement rate limiting', async () => {
        // Make multiple requests
        const requests = Array(105).fill().map(() => request(app).get('/'));
        const responses = await Promise.all(requests);
        
        // One of the later requests should be rate limited
        const hasRateLimitResponse = responses.some(r => r.status === 429);
        expect(hasRateLimitResponse).toBe(true);
    });
});