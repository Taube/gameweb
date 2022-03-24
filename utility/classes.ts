/**
 * classes function
 * Usage: const classNames = classes(styles.base, style.kind, style.color)
 */

export function classes(
  ...classList: (string | undefined)[]
): string | undefined {
  let sb = "";

  for (let i = 0, len = classList.length; i < len; i++) {
    const className = classList[i];
    if (className) {
      if (sb) {
        sb += " ";
      }
      sb += className;
    }
  }

  return sb ? sb : undefined;
}
