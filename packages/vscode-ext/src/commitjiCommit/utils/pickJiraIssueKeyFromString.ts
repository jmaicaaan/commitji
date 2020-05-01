export const pickJiraIssueKeyFromString = (pickPattern: string = '[A-Z]{2,5}-[0-9]{1,5}') => (
  value: string = ''
) => {
  const matchedString = value.match(pickPattern) || [];

  if (matchedString && !matchedString.length) {
    return;
  }
  return [...matchedString].shift();
};
