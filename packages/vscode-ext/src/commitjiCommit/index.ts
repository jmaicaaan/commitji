import { getSettings, getWorkflow } from './utils';
import { alerter } from './utils/alerter';

export const commitjiCommit = async () => {
  const settings = getSettings();
  const runWorkflowFn = getWorkflow(settings.workflow);

  try {
    await runWorkflowFn(settings);
  } catch (error) {
    alerter.error((error as { message: string }).message);
  }
};
