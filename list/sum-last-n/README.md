# Sum Last N Elements

To sum the last n elements of a list, use the following:

## Scala

```scala
def sumLastElements[T : Numeric](n: Int, list: List[T]): T = {
  list.takeRight(n).sum
}
```

## TypeScript

```typescript
function sumLastN(n: number, list: number[]): number {
    return list.slice(list.length - n).reduce((a, b) => a + b, 0);
}
```

## Go

```go
func SumLastN(n int, list []int) int {
    return sum(list[len(list)-n:])
}
```

## Rust

```rust
fn sum_last_n<T: std::ops::Add<Output = T> + std::fmt::Display>(n: usize, list: Vec<T>) -> T {
    list.iter().rev().take(n).sum()
```

## Java

```java
public class SumLastN {
    public static <T extends Number> T sumLastN(int n, List<T> list) {
        return list.subList(list.size() - n, list.size()).stream().reduce(0, (a, b) -> a + b);
    }
}
```

## C++

```cpp
template <typename T>
T sumLastN(int n, std::vector<T> list) {
    return std::accumulate(list.rbegin(), list.rbegin() + n, 0, std::plus<T>());
}
```

## Haskell

```haskell
sumLastN :: Int -> [a] -> a
sumLastN n xs = sum (take n (reverse xs))
```

## Python

```python
def sum_last_n(n, l):
    return sum(l[-n:])
```
