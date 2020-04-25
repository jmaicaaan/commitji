type FormatterOptions = {
  defaultValue?: string;
};

type FormatterParser<T> = (data: T) => string;

export const formatter = <T>(parser: FormatterParser<T>, { defaultValue = '' }: FormatterOptions = {}) => (
  data: T
) => {
  return parser(data) || defaultValue;
};
