export function findById<T extends { id: string }>(
  items: T[],
  id: string,
): T | undefined {
  return items.find((item) => item.id === id);
}

export function filterByField<T, K extends keyof T>(
  items: T[],
  field: K,
  value: T[K],
): T[] {
  return items.filter((item) => item[field] === value);
}
