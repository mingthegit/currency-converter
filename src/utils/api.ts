import {
  FormSchema,
  ExchangeRateResponseObject,
} from "./interfaces";

const API_BASE = "https://api.exchangeratesapi.io";

export const fetchExchangeRate = async ({
  base,
  target,
}: Partial<FormSchema>): Promise<number | undefined> => {
  try {
    const request = await fetch(`${API_BASE}/latest?base=${base}&symbols=${target}`);
    const response: ExchangeRateResponseObject = await request.json();
    if (target) {
      return response.rates[target];
    } else {
      return;
    }
  } catch (err) {
    throw err;
  }
};

export default {
  fetchExchangeRate,
};
