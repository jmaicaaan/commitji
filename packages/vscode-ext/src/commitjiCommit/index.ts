import { getSettings, getWorkflow } from './utils';

export const commitjiCommit = async () => {
  const settings = getSettings();
  const runWorkflow = getWorkflow(settings.workflow);

  await runWorkflow(settings);
};
