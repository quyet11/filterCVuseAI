// appwrite.js
import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
    .setProject("66f2535e001dd2c2100c"); // Replace with your actual Project ID

const account = new Account(client);

export { account, client };

