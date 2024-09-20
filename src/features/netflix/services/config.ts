export const API_URL =
  process.env.NODE_END === "development"
    ? process.env.API_URL_DEV
    : process.env.API_URL_PRO;

export const API_URL_CLIENT =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_URL_DEV
    : process.env.NEXT_PUBLIC_API_URL_PRO;
