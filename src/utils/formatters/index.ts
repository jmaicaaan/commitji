type FormatterOptions<T> = {
  parser: (data: T) => string;
  defaultValue?: string;
};

// infer parser
export const formatter = <T>(
  { parser, defaultValue = '' }: FormatterOptions<T>,
  data: T
): string => {
  return parser(data) || defaultValue;
};
