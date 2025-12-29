import {test, expect} from '@playwright/test';
import { baseUrl } from '../ui/utils/helpers';

test('DELETE To Verify Login', async ({request}) => {

    const response = await request.delete(`${baseUrl}/api/verifyLogin`);

    const responseBody = await response.json();

    expect(responseBody['responseCode']).toBe(405);
    expect(responseBody['message']).toBe('This request method is not supported.');

});


test('DELETE METHOD To Delete User Account', async ({ request }) => {
  const response = await request.delete(`${baseUrl}/api/deleteAccount`,
    {
      params: {
        email: 'tester_257@mail.com',
        password: 'tester2025#',
      },
    }
  );

  const responseBody = await response.json();

  expect(responseBody.responseCode).toBe(400);
  expect(responseBody.message).toBe('Bad request, email parameter is missing in DELETE request.');
});



