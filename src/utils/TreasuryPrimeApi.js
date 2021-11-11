import axios from "axios";

export default axios.create({
  auth: {
    // I'm using .env file so that I don't need to check the API credentials into Git, but
    // environment variables are embedded into the build meaning anyone can view them by
    // inspecting the app's files.

    // In production app, I would create a server for the client to call, and seed the
    // environment variables on the secure server.
    username: process.env.REACT_APP_TREASURY_PRIME_API_USERNAME,
    password: process.env.REACT_APP_TREASURY_PRIME_API_PASSWORD,
  },
  baseURL: "https://api.sandbox.treasuryprime.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
