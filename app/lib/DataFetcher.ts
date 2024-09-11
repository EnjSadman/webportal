import { API_CALL } from "../utils/types";

export async function dataFetcher(params: API_CALL) {
  if (process.env.API_KEY_NASA !== undefined) {
    const result = await fetch(`${params.destination}?${process.env.API_KEY_NASA}`);

  }
}