interface RegisterData {
    name: string;
    email: string | null;
    password: string;
    firstName: string;
    lastName: string;
    address1: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
}

interface LoginData {
    email: string;
    password: string;
}

interface TestUser {
    email: string;
    password: string;
}

export const registerData: RegisterData = {
        name: 'John Doe',
        email: null, // to be filled with a generated email',
        password: 'SecurePass123',
        firstName: 'John',
        lastName: 'Doe',
        address1: '123 Main St',
        country: 'United States',
        state: 'California',
        city: 'Los Angeles',
        zipcode: '90001',
        mobileNumber: '1234567890'
    };

export const loginData: LoginData = {
    email: 'tester_245@mail.com',
    password: 'tester2025#'
};

export const testUser = {
  email: `testereso${Date.now()}@mail.com`,
  password: 'tester2025#'
};
