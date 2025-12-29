import {test, expect} from '@playwright/test';
import { baseUrl } from '../ui/utils/helpers';

test('PUT To All Brands List', async ({request}) => {

    const response = await request.put(`${baseUrl}/api/brandsList`);
    const responseBody = await response.json();

    expect(responseBody['responseCode']).toBe(405);
    expect(responseBody['message']).toBe('This request method is not supported.');

});

test('PUT METHOD To Update User Account', async ({request}) => {

    const response = await request.put(`${baseUrl}/api/updateAccount`, {
      form: {
        name: 'investor',
        email: 'tester_245@mail.com',
        password: 'tester2025#',
        title: 'Mr',
        birth_date: '1990-01-01',
        first_name: 'Sulaimon',
        last_name: 'Ekundayo',
        company: 'The Investor Group',
        address1: '123 Updated St',
        address2: 'Apt 4',
        country: 'United States',
        state: 'Updated State',
        city: '',
        zipcode: '12345',
        mobile_number: '1234567890'
      },
    });

    const responseBody = await response.json();

    expect(responseBody['responseCode']).toBe(200);
    expect(responseBody['message']).toBe('User updated!');

});

