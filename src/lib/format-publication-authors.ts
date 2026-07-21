export function formatPublicationAuthors(authors: string) {
  const normalized = authors.replace(/\.\.\./g, "…");

  if (/et al\./i.test(normalized) || normalized.includes("…")) {
    return normalized;
  }

  const names = normalized.split(",").map((name) => name.trim());

  if (names.length <= 6) {
    return normalized;
  }

  const ownNameIndex = names.findIndex((name) =>
    /yuanfeng ji/i.test(name),
  );
  const visibleIndices = new Set([0, 1, names.length - 1]);

  if (ownNameIndex >= 0) {
    visibleIndices.add(ownNameIndex);
  } else {
    visibleIndices.add(2);
  }

  const orderedIndices = [...visibleIndices].sort((a, b) => a - b);
  const compactNames: string[] = [];

  orderedIndices.forEach((index, position) => {
    const previousIndex = orderedIndices[position - 1];
    if (position > 0 && index - previousIndex > 1) {
      compactNames.push("…");
    }
    compactNames.push(names[index]);
  });

  return compactNames.join(", ");
}
