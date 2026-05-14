export type ClassValue = string | number | false | null | undefined;

export const cn = (...classes: ClassValue[]): string =>
  classes.filter(Boolean).join(" ");
