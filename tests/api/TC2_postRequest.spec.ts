import {test, expect} from '@playwright/test';
import { testUser } from '../ui/utils/testDate/auth';

test('POST To All Products List', async ({request}) => {

    const response = await request.post('https://automationexercise.com/api/productsList');

    const responseBody = await response.json();

    expect(responseBody['responseCode']).toBe(405);
    expect(responseBody['message']).toBe('This request method is not supported.');

});

test('POST To Search Product', async ({request}) => {

    const response = await request.post('https://automationexercise.com/api/searchProduct', {
      form: {
        search_product: 'top',
      },
    });

    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('products');
    expect(Array.isArray(responseBody['products'])).toBe(true);
    expect(responseBody['products'].length).toBeGreaterThan(0);

});

test('POST To Search Product without search_product parameter', async ({request}) => {

    const response = await request.post(' https://automationexercise.com/api/searchProduct');
    
    const responseBody = await response.json();
    expect(responseBody['responseCode']).toBe(400);
    expect(responseBody['message']).toBe('Bad request, search_product parameter is missing in POST request.');
});

test('POST To Verify Login with valid details', async ({request}) => {

    const response = await request.post('https://automationexercise.com/api/verifyLogin', {
      form: {
        email: 'tester_245@mail.com',
        password: 'tester2025#',
      },
    });
    
    const responseBody = await response.json();

    expect(responseBody['responseCode']).toBe(200);
    expect(responseBody['message']).toBe('User exists!');

});

test('POST To Verify Login without email parameter', async ({request}) => {

    const response = await request.post('https://automationexercise.com/api/verifyLogin', {
      form: {
        password: 'tester2025#',
      },
    });
    
    const responseBody = await response.json();

    expect(responseBody['responseCode']).toBe(400);
    expect(responseBody['message']).toBe('Bad request, email or password parameter is missing in POST request.');

});

test('POST To Verify Login with invalid details', async ({request}) => {

    const response = await request.post('https://automationexercise.com/api/verifyLogin', {
      form: {
        email: 'tester_y@mail.com',
        password: 'tester#',
      },
    });
    
    const responseBody = await response.json();

    expect(responseBody['responseCode']).toBe(404);
    expect(responseBody['message']).toBe('User not found!');

});

test('POST To Create/Register User Account', async ({request}) => {

    const response = await request.post(' https://automationexercise.com/api/createAccount', {
      form: {
        name: 'Tester',
        email: testUser.email,
        password: 'tester2025#',
        title: 'Mr',
        birth_date: '15',
        birth_month: 'June',
        birth_year: '1990',
        firstname: 'Tester',
        lastname: 'Y',
        company: 'Testers ESO Inc',
        address1: '123 Testing Lane',
        address2: 'Apt 4',
        country: 'Canada',
        state: 'Test State',
        city: 'Test City',
        zipcode: 'T3S 4T5',
        mobile_number: '+1234567890',
      },
    });
    
    const responseBody = await response.json();

    expect(responseBody['responseCode']).toBe(201);
    expect(responseBody['message']).toBe('User created!');

});
