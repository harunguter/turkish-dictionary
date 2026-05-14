import { Volume2, XCircle } from "lucide-react";
import { Alert, Badge, Card, Spinner } from "@/components/ui";
import { useDictionary } from "../hooks/useDictionary";
import SignLanguage from "./SignLanguage";
import env from "@/config/env";

const playAudio = (id: string): void => {
  const audio = document.getElementById(id) as HTMLAudioElement | null;
  if (audio) void audio.play();
};

const SearchResult = () => {
  const { results, error, loading } = useDictionary();

  if (loading) {
    return (
      <Card className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-3 text-slate-500 dark:text-slate-400">
          <Spinner size={32} />
          <p className="text-sm">Aranıyor...</p>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <div className="animate-slide-up">
        <Alert variant="error" icon={XCircle} title="Sonuç bulunamadı">
          {error}
        </Alert>
      </div>
    );
  }

  if (!results) return null;

  return (
    <div className="space-y-4 animate-slide-up">
      {results.mean.map((entry, idx) => {
        const audioId = `${entry.madde}-reading-${idx}`;
        const writeEntry = results.write[idx];

        return (
          <Card key={idx} variant="elevated">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
                  {entry.madde}
                </h2>
                {entry.telaffuz && (
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    /{entry.telaffuz}/
                  </p>
                )}
                {entry.lisan && (
                  <Badge variant="outline" className="mt-2">
                    {entry.lisan}
                  </Badge>
                )}
              </div>

              {writeEntry?.seskod && (
                <>
                  <audio
                    src={`${env.api.baseUrl}${env.api.endpoints.audio(
                      writeEntry.seskod
                    )}`}
                    id={audioId}
                    preload="none"
                  />
                  <button
                    type="button"
                    onClick={() => playAudio(audioId)}
                    className="
                      inline-flex items-center gap-1.5 h-9 px-3 text-sm font-medium
                      bg-brand-50 dark:bg-brand-950/40
                      text-brand-700 dark:text-brand-300
                      border border-brand-200 dark:border-brand-900/60 rounded-lg
                      hover:bg-brand-100 dark:hover:bg-brand-900/50
                      active:bg-brand-200
                      transition-all duration-150
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1
                      dark:focus-visible:ring-offset-slate-900
                    "
                  >
                    <Volume2 size={14} />
                    Dinle
                  </button>
                </>
              )}
            </div>

            <div className="space-y-3">
              {entry.anlamlarListe?.map((meaning, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800"
                >
                  <div className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand-600 text-white text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    {meaning.ozelliklerListe?.[0]?.tam_adi && (
                      <span className="inline-block mr-2 text-xs font-medium text-brand-700 dark:text-brand-400 italic">
                        {meaning.ozelliklerListe[0].tam_adi}
                      </span>
                    )}
                    <span className="text-slate-700 dark:text-slate-200 leading-relaxed">
                      {meaning.anlam}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        );
      })}

      {results.mean[0]?.madde && (
        <SignLanguage word={results.mean[0].madde} />
      )}
    </div>
  );
};

export default SearchResult;
