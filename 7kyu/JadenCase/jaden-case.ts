function capitalize(word: string): string {
  const [first, ...rest] = word.split('');
  return first.toUpperCase() + rest.join('');
}

String.prototype.toJadenCase = function () {
  return this.split(' ').map(capitalize).join(' ');
};
