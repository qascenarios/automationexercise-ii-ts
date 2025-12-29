import {test, expect} from '@playwright/test';

test('GET To All Products List', async ({request}) => {

    const response = await request.get('https://automationexercise.com/api/productsList');

    const responseBody = await response.json();

    expect(responseBody['responseCode']).toBe(200);
    expect(responseBody).toHaveProperty('products');
    expect(responseBody['products'].length).toBeGreaterThan(0);
    expect(Array.isArray(responseBody['products'])).toBe(true);
    expect(responseBody['products'][0]).toHaveProperty('id');
    expect(responseBody['products'][0]).toHaveProperty('name');
    expect(responseBody['products'][0]).toHaveProperty('price');
    expect(responseBody['products'][0]).toHaveProperty('brand');
    expect(responseBody['products'][0]).toHaveProperty('category');

});

test('Get All Brands List', async ({request}) => {

    const response = await request.get(' https://automationexercise.com/api/brandsList');
    
    const responseBody = await response.json();

    expect(responseBody['responseCode']).toBe(200);
    expect(responseBody).toHaveProperty('brands');
    expect(Array.isArray(responseBody['brands'])).toBe(true);
    expect(responseBody['brands'].length).toBeGreaterThan(0);

});

test('GET user account detail by email', async ({request}) => {

    const response = await request.get('https://automationexercise.com/api/getUserDetailByEmail', 
    {   
      params: {
        email: 'tester_245@mail.com'
    }});

    const responseBody = await response.json();
    expect(responseBody['responseCode']).toBe(200);
    expect(responseBody).toHaveProperty('user');
    expect(responseBody['user']['first_name']).toBe('Sulaimon');
    expect(responseBody['user']['last_name']).toBe('Ekundayo');

});