import { createContext, type Dispatch, type SetStateAction } from "react";
import type { SearchResults } from "@/types";

export interface DictionaryContextValue {
  word: string;
  setWord: Dispatch<SetStateAction<string>>;
  results: SearchResults | null;
  error: string;
  loading: boolean;
  search: (query: string) => Promise<void>;
  appendLetter: (letter: string) => void;
  clear: () => void;
}

export const DictionaryContext = createContext<DictionaryContextValue | null>(
  null
);
