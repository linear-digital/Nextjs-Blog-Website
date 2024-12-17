/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const URL = "https://blogsite-backend-one.vercel.app/api/v1";

const api = axios.create({
  baseURL: "https://blogsite-backend-one.vercel.app/api/v1",
});

export const fetcher = async ({
  url,
  method = "GET",
  headers,
  body,
}: {
  url: string;
  headers?: any;
  body?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE";
}): Promise<any> => {
  try {
    const response = await fetch(URL + url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
      cache: "no-cache",
      next: { tags: [url] },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default api;
