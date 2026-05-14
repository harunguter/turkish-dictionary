const modules = import.meta.glob<string>(
  "../../../assets/images/*.gif",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);

const signAlphabet: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => {
    const letter = path.split("/").pop()?.replace(".gif", "") ?? "";
    return [letter, url];
  })
);

export const normalizeLetter = (letter: string): string => {
  const lower = letter.toLowerCase();
  if (lower === "â") return "a";
  if (lower === "î") return "i";
  if (lower === "û") return "ü";
  return lower;
};

export default signAlphabet;
