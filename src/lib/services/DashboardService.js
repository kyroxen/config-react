import { makeApiCall } from "@/lib/utils.js";

export async function searchAPI(state) {
  try {
    const url = `http://localhost:8888/api/config?application=${state.application}&profile=${state.profile}&label=${state.label}&active=${state.active}`;
    const options = { cache: "no-store" };
    return await makeApiCall(url, options);
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
}

export async function updateConfig(state) {
  try {
    const url = `http://localhost:8888/api/config`;
    const options = {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json", // Set the appropriate content type
      },
      body: JSON.stringify(state),
    };
    return await makeApiCall(url, options);
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
}
