import { Hand } from "lucide-react";
import { Card } from "@/components/ui";
import signAlphabet, { normalizeLetter } from "../data/signAlphabets";

interface SignLanguageProps {
  word: string;
}

const SignLanguage = ({ word }: SignLanguageProps) => {
  if (!word) return null;

  const letters = word.split("");

  return (
    <Card>
      <div className="flex items-center gap-2 mb-1">
        <Hand size={18} className="text-brand-600 dark:text-brand-400" />
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
          Türk İşaret Dili
        </h3>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        Parmak alfabesiyle gösterilişi
      </p>

      <div className="flex flex-wrap items-end gap-3">
        {letters.map((rawLetter, key) => {
          const letter = normalizeLetter(rawLetter);
          const imageUrl = signAlphabet[letter];

          if (!imageUrl) {
            return (
              <div
                key={key}
                className="flex flex-col items-center justify-end gap-1 px-2"
              >
                <div className="h-10 flex items-end text-slate-400 dark:text-slate-500">—</div>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {rawLetter}
                </span>
              </div>
            );
          }

          return (
            <div
              key={key}
              className="flex flex-col items-center gap-1 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700"
            >
              <img
                src={imageUrl}
                alt={`İşaret dili: ${letter}`}
                className="h-10 w-auto dark:invert dark:opacity-90"
                loading="lazy"
              />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-200 uppercase">
                {rawLetter}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default SignLanguage;
