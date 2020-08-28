import data from "./data.json";

const API_WAIT_TIME_MS = 750;

function wait() {
  return new Promise((resolve) => setTimeout(resolve, API_WAIT_TIME_MS));
}

function throwError(msg) {
  throw new Error(msg);
}

/**
 * Endpoints
 */

export async function getOverview() {
  await wait();

  return data.overview;
}

export async function getDetails(id) {
  await wait();

  const details = data.details;

  const detail = details.find((detail) => detail.id === id);

  if (!detail) {
    throwError(`Cannot find detail with id: ${id}`);
  }

  return detail;
}
