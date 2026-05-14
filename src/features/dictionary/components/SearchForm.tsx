import type { FormEvent } from "react";
import { Search, X } from "lucide-react";
import { Card, IconButton } from "@/components/ui";
import { useDictionary } from "../hooks/useDictionary";
import env from "@/config/env";

const SearchForm = () => {
  const { word, setWord, search, loading, appendLetter, clear } =
    useDictionary();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void search(word);
  };

  const canSearch = word.trim().length >= 2;

  return (
    <Card
      variant="elevated"
      className="bg-gradient-to-br from-white to-brand-50/30 dark:from-slate-900 dark:to-brand-950/20"
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Search size={18} className="text-slate-400 dark:text-slate-500" />
        </div>

        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Bir kelime arayın..."
          autoComplete="off"
          autoFocus
          className="
            w-full h-14 pl-12 pr-28 text-base
            bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100
            placeholder:text-slate-400 dark:placeholder:text-slate-500
            border border-slate-200 dark:border-slate-700 rounded-xl
            shadow-sm transition-all duration-150
            hover:border-slate-300 dark:hover:border-slate-600
            outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:focus:ring-brand-500/30
          "
        />

        <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-2">
          {word.length > 0 && (
            <IconButton
              type="button"
              variant="ghost"
              size="sm"
              onClick={clear}
              aria-label="Temizle"
            >
              <X size={16} />
            </IconButton>
          )}
          <button
            type="submit"
            disabled={!canSearch || loading}
            aria-label="Ara"
            className="
              inline-flex items-center justify-center
              h-10 px-4 rounded-lg font-medium text-sm
              bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white
              shadow-sm transition-all duration-150
              disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
              dark:focus-visible:ring-offset-slate-900
            "
          >
            <Search size={16} className="md:hidden" />
            <span className="hidden md:inline">Ara</span>
          </button>
        </div>
      </form>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <span className="text-xs text-slate-500 dark:text-slate-400 self-center mr-1">
          Türkçe karakterler:
        </span>
        {env.turkishLetters.map((letter) => (
          <button
            type="button"
            key={letter}
            onClick={() => appendLetter(letter)}
            className="
              min-w-[2rem] h-8 px-2.5 text-sm font-medium
              bg-white dark:bg-slate-800
              text-slate-700 dark:text-slate-200
              border border-slate-200 dark:border-slate-700 rounded-lg
              hover:bg-brand-50 dark:hover:bg-brand-950/40
              hover:border-brand-300 dark:hover:border-brand-700
              hover:text-brand-700 dark:hover:text-brand-300
              active:scale-95 transition-all duration-100
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1
              dark:focus-visible:ring-offset-slate-900
            "
          >
            {letter}
          </button>
        ))}
      </div>
    </Card>
  );
};

export default SearchForm;
