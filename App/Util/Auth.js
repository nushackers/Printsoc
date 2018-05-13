import SSH from 'react-native-ssh';

const SUNFIRE_HOST = 'sunfire.comp.nus.edu.sg';

let username = undefined;
let password = undefined;

export function getSunfireCredentials() {
  // TODO: Return actual, stored credentials
  if (!username || !password) return null;
  return { username, password };
}

export function setSunfireCredentials(user, pass) {
  // TODO: Store credentials securely
  username = user;
  password = pass;
}

export async function verifySunfireCredentials(username, password) {
  let config = {
    user: username,
    password,
    host: SUNFIRE_HOST
  };

  console.log('Verifying', username);

  try {
    await SSH.execute(config, 'pwd');
    return true;
  } catch (e) {
    console.log('Encountered error while verifying credentials', e);
    return false;
  }
}
