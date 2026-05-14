import { createHttpClient } from "@/lib/http";
import env from "@/config/env";
import type {
  DailyContent,
  MeanResponse,
  WriteResponse
} from "@/types";

const http = createHttpClient(env.api.baseUrl);
const { endpoints } = env.api;

export const dictionaryService = {
  getDailyContent: () => http.get<DailyContent>(endpoints.content),
  searchMeaning: (word: string) => http.get<MeanResponse>(endpoints.search(word)),
  searchWriting: (word: string) => http.get<WriteResponse>(endpoints.write(word))
};
