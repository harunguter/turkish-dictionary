import {
  useState,
  useCallback,
  useMemo,
  type ReactNode
} from "react";
import {
  DictionaryContext,
  type DictionaryContextValue
} from "./DictionaryContext";
import { dictionaryService } from "@/services/dictionary.service";
import type { MeanEntry, SearchResults, WriteEntry } from "@/types";

interface DictionaryProviderProps {
  children: ReactNode;
}

export const DictionaryProvider = ({ children }: DictionaryProviderProps) => {
  const [word, setWord] = useState<string>("");
  const [results, setResults] = useState<SearchResults | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const search = useCallback<DictionaryContextValue["search"]>(
    async (query) => {
      if (!query || query.length < 2) return;

      setLoading(true);
      setError("");
      setResults(null);

      const [mean, write] = await Promise.all([
        dictionaryService.searchMeaning(query),
        dictionaryService.searchWriting(query)
      ]);

      if (Array.isArray(mean)) {
        setResults({
          mean: mean as MeanEntry[],
          write: Array.isArray(write) ? (write as WriteEntry[]) : []
        });
      } else if (mean && typeof mean === "object" && "error" in mean) {
        setError(mean.error);
      } else {
        setError("Beklenmeyen bir hata oluştu.");
      }

      setLoading(false);
    },
    []
  );

  const appendLetter = useCallback<DictionaryContextValue["appendLetter"]>(
    (letter) => {
      setWord((prev) => prev + letter);
    },
    []
  );

  const clear = useCallback<DictionaryContextValue["clear"]>(() => {
    setWord("");
    setResults(null);
    setError("");
  }, []);

  const value = useMemo<DictionaryContextValue>(
    () => ({
      word,
      setWord,
      results,
      error,
      loading,
      search,
      appendLetter,
      clear
    }),
    [word, results, error, loading, search, appendLetter, clear]
  );

  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  );
};
