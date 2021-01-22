import dayjs from "dayjs";

import {
  FormSchema,
  DateRange,
  GraphPoint,
  ExchangeRateResponseObject,
  HistoryResponseObject,
} from "./interfaces";

const API_BASE = "https://api.exchangeratesapi.io";

export const fetchExchangeRate = async ({
  base,
  target,
}: FormSchema): Promise<number | undefined> => {
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

export const fetchHistoryData = async (
  formValues: FormSchema,
  dateRange: DateRange
): Promise<GraphPoint[]> => {
  try {
    const { base, target } = formValues;

    const startDate = dayjs().subtract(1, "month").format("YYYY-MM-DD");
    const endDate = dayjs().format("YYYY-MM-DD");

    const request = await fetch(
      `${API_BASE}/history?start_at=${startDate}&end_at=${endDate}&base=${base}&symbols=${target}`
    );
    const response: HistoryResponseObject = await request.json();

    let series: GraphPoint[] = [];
    for (let date in response.rates) {
      series.push({
        date,
        rate: response.rates[date][target],
      });
    }

    return series;
  } catch (err) {
    throw err;
  }
};

export default {
  fetchExchangeRate,
  fetchHistoryData,
};
