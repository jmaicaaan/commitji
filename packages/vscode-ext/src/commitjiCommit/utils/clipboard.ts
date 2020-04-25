import { env } from "vscode";

export const clipboard = {
  copy: (text: string) => {
    return env.clipboard.writeText(text);
  },
  read: () => {
    return env.clipboard.readText();
  }
};
