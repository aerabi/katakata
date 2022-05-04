# Capitalize

Capitalize is making the first letter of a string uppercase.

## TypeScript

One nice feature about JS is that one can add methods to objects:

```typescript
String.prototype.capitalize = (word: string): string => {
  const [first, ...rest] = word.split('');
  return first.toUpperCase() + rest.join('');
}
```
