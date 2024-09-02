import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: process.env.RIVAL_ENDPOINT + "/openapi.json",
  output: "./client",
  services: {
    asClass: true,
  },
});
