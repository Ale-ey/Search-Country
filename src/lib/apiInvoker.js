import axiosInstance from "./axiosInstance";

export async function apiInvoker(url, method = "", data = {}) {
  try {
    const response = await axiosInstance({
      url,
      method,
      data,
    });
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
