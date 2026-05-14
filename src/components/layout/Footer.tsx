import { ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="mt-12 pb-8 text-center text-sm text-slate-500 dark:text-slate-400">
    <p>
      Kaynak:{" "}
      <a
        href="https://sozluk.gov.tr"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-1 font-medium text-brand-700 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 underline-offset-2 hover:underline"
      >
        sozluk.gov.tr
        <ExternalLink size={12} />
      </a>
    </p>
    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
      &copy; {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
