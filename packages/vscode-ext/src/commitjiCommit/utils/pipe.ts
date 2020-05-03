export const pipe = (...fns: Function[]) => (initialValue?: any) =>
  fns.reduce((x, f) => f(x), initialValue);
