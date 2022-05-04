def sumLastElements[T : Numeric](n: Int, list: List[T]): T = {
  list.takeRight(n).sum
}
