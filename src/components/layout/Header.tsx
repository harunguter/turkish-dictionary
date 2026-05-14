import { BookOpen } from "lucide-react";
import env from "@/config/env";
import { ThemeSwitcher } from "@/features/theme";

const Header = () => (
  <header
    className="
      sticky top-0 z-30 w-full
      backdrop-blur-lg
      bg-white/75 dark:bg-slate-950/75
      border-b border-slate-200/70 dark:border-slate-800/70
      animate-fade-in
    "
  >
    <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
      <a
        href="/"
        aria-label={env.appName}
        className="
          flex items-center gap-3 min-w-0 group
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 rounded-lg
        "
      >
        <span
          className="
            inline-flex items-center justify-center h-10 w-10 rounded-xl flex-shrink-0
            bg-gradient-to-br from-brand-500 to-brand-700
            shadow-sm shadow-brand-600/25
            group-hover:shadow-md group-hover:shadow-brand-600/30
            transition-shadow
          "
        >
          <BookOpen size={18} className="text-white" />
        </span>

        <span className="flex flex-col min-w-0 text-left">
          <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-50 leading-tight truncate">
            {env.appName}
          </span>
          <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-tight truncate hidden xs:inline sm:inline">
            {env.appTagline}
          </span>
        </span>
      </a>

      <ThemeSwitcher />
    </div>
  </header>
);

export default Header;
