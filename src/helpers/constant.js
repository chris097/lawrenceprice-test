import * as dotenv from 'dotenv';

dotenv.config();

export const BASE_URL = process.env.REACT_APP_API_URL;

export const TEST_AUTH_USER = 'TEST_APP_AUTH_USER';

export const NUMBER_OF_DATA_PER_PAGE = 10;