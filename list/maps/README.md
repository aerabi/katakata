# List Map

Map is a list operator that maps a function over a list.

## Scala

```scala
def maps(x: List[Int]): Int[] = x map (_*2)
```

## TypeScript

```typescript
export function maps(x: number[]): number[] {
  return x.map(e => e * 2);
}
```

## Go

```go
func Maps(x []int) []int {
  doubled := make([]int, len(x))
  for i, e := range x {
    doubled[i] = 2 * e;
  }
  return doubled;
}
```

## Java

```java
public class Maps {
  public static int[] maps(int[] x) {
    int[] doubled = new int[x.length];
    for (int i = 0; i < x.length; i++) {
      doubled[i] = 2 * x[i];
    }
    return doubled;
  }
}
```

```java
import java.util.Arrays;
public class Maps {
  public static int[] maps(int[] x) {
    return Arrays.stream(x).map(e -> e*2).toArray();
  }
}
```
