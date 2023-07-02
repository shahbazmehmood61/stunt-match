import { sleep } from "@/utils/sleep";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch the data
export const fetchStuntMen = createAsyncThunk("stunt/fetchStuntMen", async () => {
  await sleep(2000);
  const response = await fetch("/data.json");
  const data = await response.json();
  return data.data;
});
