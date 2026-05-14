import { useEffect, useState, type ComponentType } from "react";
import { Sparkles, Quote, type LucideProps } from "lucide-react";
import { Card } from "@/components/ui";
import { dictionaryService } from "@/services/dictionary.service";
import type { DailyContent as DailyContentType } from "@/types";

interface ContentCardProps {
  icon: ComponentType<LucideProps>;
  label: string;
  title?: string;
  description?: string;
  loading: boolean;
}

const ContentCard = ({
  icon: Icon,
  label,
  title,
  description,
  loading
}: ContentCardProps) => (
  <Card loading={loading} className="h-full">
    <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 mb-3">
      <Icon size={16} />
      <span className="text-xs font-semibold uppercase tracking-wider">
        {label}
      </span>
    </div>
    {!loading && (
      <>
        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
          {title || "—"}
        </h4>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </p>
      </>
    )}
  </Card>
);

const DailyContent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [content, setContent] = useState<DailyContentType | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const data = await dictionaryService.getDailyContent();
      if (cancelled) return;
      if (data && typeof data === "object") {
        setContent(data);
      }
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section>
      <div className="flex items-center gap-2 mb-3 px-1">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Bugünün Seçkileri
        </h3>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContentCard
          loading={loading}
          icon={Sparkles}
          label="Bir Kelime"
          title={content?.kelime?.[0]?.madde}
          description={content?.kelime?.[0]?.anlam}
        />
        <ContentCard
          loading={loading}
          icon={Quote}
          label="Bir Deyim / Atasözü"
          title={content?.atasoz?.[0]?.madde}
          description={content?.atasoz?.[0]?.anlam}
        />
      </div>
    </section>
  );
};

export default DailyContent;
