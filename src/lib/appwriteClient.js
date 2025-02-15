import { Client } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://[YOUR_APPWRITE_ENDPOINT]') // Your Appwrite Endpoint
  .setProject('[YOUR_PROJECT_ID]'); // Your project ID

export default client;