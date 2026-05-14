import { useContext } from "react";
import {
  DictionaryContext,
  type DictionaryContextValue
} from "../context/DictionaryContext";

export const useDictionary = (): DictionaryContextValue => {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
};
