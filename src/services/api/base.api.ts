if (!process.env.API_BASE_URL) throw new Error("Not found API_BASE_URL");

const baseApi = process.env.API_BASE_URL;

export { baseApi };
