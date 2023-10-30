import { config } from 'dotenv';

// load env variables
config();

// just change this to development or production
// the rest of constant will adapt
const ENVIRONMENT = 'development';
const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
const { ADMIN_WA_NO } = process.env;

const SERVER = {
  HOST: ENVIRONMENT === 'development' ? process.env.DEV_SERVER_HOST : process.env.PROD_SERVER_HOST,
  PORT: ENVIRONMENT === 'development' ? process.env.DEV_SERVER_PORT : process.env.PROD_SERVER_PORT,
  COOKIE_PASSWORD: process.env.COOKIE_PASSWORD,
};

const DB = {
  URL: ENVIRONMENT === 'development' ? process.env.DEV_DB_URL : process.env.PROD_DB_URL,
  USERNAME: ENVIRONMENT === 'development' ? process.env.DEV_DB_USERNAME : process.env.PROD_DB_USERNAME,
  PASSWORD: ENVIRONMENT === 'development' ? process.env.DEV_DB_PASSWORD : process.env.PROD_DB_PASSWORD,
  NAME: ENVIRONMENT === 'development' ? process.env.DEV_DB_NAME : process.env.PROD_DB_NAME,
  PORT: ENVIRONMENT === 'development' ? process.env.DEV_DB_PORT : process.env.PROD_DB_PORT,
};

const TWO_FAC_AUTH = {
  NOTHING: 0,
  FACE: 1,
  TOTP_WA: 2,
  TOTP_GMAIL: 3,
};

const HTML_CONTENT = {
  ACCOUNT_ACTIVATION: 1,
  TOTP_LOGIN: 2,
};

const MESSAGE_CONTENT = {
  TOTP_LOGIN: 1,
};

const USER_AUTH_STATE = {
  LOGOUT: 0,
  IN_OTP: 1,
  LOGIN: 2,
};

export {
  ENVIRONMENT,
  CHARACTERS,
  SERVER,
  DB,
  TWO_FAC_AUTH,
  HTML_CONTENT,
  MESSAGE_CONTENT,
  ADMIN_WA_NO,
  USER_AUTH_STATE,
};
