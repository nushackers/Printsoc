import SSH from 'react-native-ssh';
import { getSunfireCredentials } from './Auth';

const SUNFIRE_HOST = 'sunfire.comp.nus.edu.sg';

export async function executeCommand(cmd, username = undefined, password = undefined) {
  // Get credentials if not supplied
  if (!username || !password) {
    const creds = await getSunfireCredentials();
    if (!creds) return null;
    username = creds.username;
    password = creds.password;
  }

  // Execute command
  const config = {
    user: username,
    password,
    host: SUNFIRE_HOST
  };
  return await SSH.execute(config, cmd);
}

export async function verifyCredentials(username, password) {
  try {
    await executeCommand('pwd', username, password);
    return true;
  } catch (e) {
    console.log('Encountered error while verifying credentials', e);
    return false;
  }
}
