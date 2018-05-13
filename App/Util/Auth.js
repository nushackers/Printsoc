import SSH from 'react-native-ssh';
import { setItem, getItem, deleteItem } from 'react-native-sensitive-info';

const SUNFIRE_HOST = 'sunfire.comp.nus.edu.sg';

const KEYCHAIN_KEY_USERNAME = 'KEYCHAIN_KEY_USERNAME';
const KEYCHAIN_KEY_PASSWORD = 'KEYCHAIN_KEY_PASSWORD';

export async function getSunfireCredentials() {
  const username = await getItem(KEYCHAIN_KEY_USERNAME, {});
  const password = await getItem(KEYCHAIN_KEY_PASSWORD, {});
  if (!username || !password) return null;
  return { username, password };
}

export async function setSunfireCredentials(username, password) {
  await setItem(KEYCHAIN_KEY_USERNAME, username, {});
  await setItem(KEYCHAIN_KEY_PASSWORD, password, {});
}

export async function removeCredentials() {
  await deleteItem(KEYCHAIN_KEY_USERNAME, {});
  await deleteItem(KEYCHAIN_KEY_PASSWORD, {});
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
