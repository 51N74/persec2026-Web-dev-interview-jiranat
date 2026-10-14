
export function autocomplete(
  search: string,
  items: string[],
  maxResult: number
): string[] {
  const query = search.toLowerCase();

  const getPriority = (word: string): number => {
    const w = word.toLowerCase();
    const index = w.indexOf(query);

    if (index === 0) return 1;
    if (w.endsWith(query)) return 3;
    return 2;
  };

  return items
    .filter((word) => word.toLowerCase().includes(query))
    .sort((a, b) => getPriority(a) - getPriority(b))
    .slice(0, maxResult);
}
