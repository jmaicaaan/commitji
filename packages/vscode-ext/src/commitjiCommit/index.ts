import { getSettings, getWorkflow } from './utils';
import { alerter } from './utils/alerter';

export const commitjiCommit = async () => {
  const settings = getSettings();
  const runWorkflow = getWorkflow(settings.workflow);
  
  try {
    await runWorkflow(settings);  
  } catch (error) {
    alerter.error(error.message);
  }
};
