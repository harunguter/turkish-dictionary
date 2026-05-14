interface AppConfig {
  appName: string;
  appTagline: string;
  turkishLetters: readonly string[];
  api: {
    baseUrl: string;
    endpoints: {
      content: string;
      search: (word: string) => string;
      write: (word: string) => string;
      audio: (code: string) => string;
    };
  };
}

const env: AppConfig = {
  appName: "Güncel Türkçe Sözlük",
  appTagline: "Türk Dil Kurumu kaynaklı sözlük",
  turkishLetters: ["ç", "ğ", "ı", "ö", "ş", "ü", "â", "î", "û"] as const,
  api: {
    baseUrl: "https://sozluk.gov.tr/",
    endpoints: {
      content: "icerik",
      search: (word) => `/gts?ara=${encodeURIComponent(word)}`,
      write: (word) => `yazim?ara=${encodeURIComponent(word)}`,
      audio: (code) => `ses/${code}.wav`
    }
  }
};

export default env;
