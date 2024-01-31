export function toTitleCase(str: string, separator = /[\s-_]+/): string {
  return str
    .split(separator)
    .map(
      (word) =>
        word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
    )
    .join(" ");
}
