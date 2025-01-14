/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    $crisp: any[];  // Using `any` here
    CRISP_WEBSITE_ID: string;
  }
}
