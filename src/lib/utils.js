import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 *
 * @param url
 * @param options
 * @return {Promise<any>}
 */
export const makeApiCall = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

/**
 * Handles input change and updates the state object with a new value.
 *
 * @param {function} setState - The state update function.
 * @returns {function} A function that can be used as an event handler for input changes.
 */
export function handleChangeInput(setState) {
  /**
   * @param {Event} event - The input change event.
   */
  return (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
}
