type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type Combinations<U extends string, T extends string = U> = T extends any
  ? T | `${T} ${Combinations<Exclude<U, T>>}`
  : never;

export type Permutations<U extends string> =
  | Combinations<U>
  | UnionToIntersection<U>;
