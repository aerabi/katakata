String.prototype.capitalize = (word: string): string => {
  const [first, ...rest] = word.split('');
  return first.toUpperCase() + rest.join('');
}
