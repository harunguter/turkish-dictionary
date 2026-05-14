export interface MeaningProperty {
  tam_adi?: string;
  [key: string]: unknown;
}

export interface Meaning {
  anlam: string;
  ozelliklerListe?: MeaningProperty[];
  [key: string]: unknown;
}

export interface MeanEntry {
  madde: string;
  telaffuz?: string;
  lisan?: string;
  anlamlarListe?: Meaning[];
  [key: string]: unknown;
}

export interface WriteEntry {
  seskod?: string;
  [key: string]: unknown;
}

export interface ErrorResponse {
  error: string;
}

export type MeanResponse = MeanEntry[] | ErrorResponse;

export type WriteResponse = WriteEntry[] | ErrorResponse;

export interface DailyContentItem {
  madde: string;
  anlam: string;
  [key: string]: unknown;
}

export interface DailyContent {
  kelime?: DailyContentItem[];
  atasoz?: DailyContentItem[];
  [key: string]: unknown;
}

export interface SearchResults {
  mean: MeanEntry[];
  write: WriteEntry[];
}
