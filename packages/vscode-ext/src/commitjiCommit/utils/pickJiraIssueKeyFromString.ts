export const pickJiraIssueKeyFromString = (pickPattern: string) => (
  value: string = ''
) => {
  const matchedString = value.match(pickPattern) || [];

  if (matchedString && !matchedString.length) {
    return;
  }
  return [...matchedString].shift();
};
