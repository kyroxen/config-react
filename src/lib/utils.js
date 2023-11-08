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

export function handleChangeInputSimple(setState) {
  /**
   * @param {Event} event - The input change event.
   */
  return (event) => {
    const { value } = event.target;
    setState(value);
  };
}

export function handleChangeCheckbox(setState) {
  return (event) => {
    const { name, checked } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: checked,
    }));
  };
}

export function timeElapsed(dateString) {
  const currentDate = new Date();
  const providedDate = new Date(dateString);

  const timeDifference = currentDate - providedDate;

  // Calculate time units
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  } else if (months > 0) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else if (days > 0) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else {
    return "Just now";
  }
}
