import * as msal from '@azure/msal-browser';
import { msalConfig, loginRequest, tokenRequest } from './authConfig';

const myMSALObj = new msal.PublicClientApplication(msalConfig);

let username = '';

/**
 * See here for more info on account retrieval:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
 */
export function getCurrentAccount() {
  const currentAccounts = myMSALObj.getAllAccounts();
  if (currentAccounts?.length === 1) {
    username = currentAccounts[0].username;
    return currentAccounts[0];
  }
  return null;
}

export function isAuthenticated() {
  const currentAccounts = myMSALObj.getAllAccounts();
  console.log('isAuthenticated: ', currentAccounts?.length === 1);
  if (currentAccounts?.length === 1) {
    return true;
  }
  return false;
}

export async function signIn() {
  try {
    const response = await myMSALObj.loginPopup(loginRequest);
    console.log('signIn response: ', response);
    if (response !== null) {
      username = response.account.username;
      myMSALObj.setActiveAccount(response.account);
      return response.account;
    }
  } catch (error) {
    if (error.errorCode === 'interaction_in_progress') {
      sessionStorage.clear();
      return await signIn();
    } else {
      console.error('error signIn ', error.errorCode, '|', error.errorMessage);
    }
  }
  return null;
}

export async function signOut() {
  const logoutRequest = {
    account: myMSALObj.getAccountByUsername(username),
  };
  sessionStorage.clear();
  await myMSALObj.logoutPopup(logoutRequest);
}

/**
 * See here for more info on account retrieval:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
 */
// This method attempts silent token acquisition and falls back on acquireTokenPopup
async function getTokenPopup(request) {
  try {
    return await myMSALObj.acquireTokenSilent(request);
  } catch (error) {
    // Handle error
    console.error(error);
    return await myMSALObj.acquireTokenPopup(request);
  }
}

// Helper function to call API endpoint
// using authorization bearer token scheme
export async function callEndpoint(endpoint, method, body) {
  const token = await getTokenPopup(tokenRequest).catch((error) =>
    console.error(error)
  );
  if (token) {
    const accessToken = token.accessToken;

    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append('Authorization', bearer);
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const options = {
      method: method ? method : 'GET',
      headers: headers,
      body: body ? body : null,
    };

    const response = await fetch(endpoint, options).catch((error) =>
      console.error(error)
    );
    if (response) {
      const data = await response.json();
      if (data) {
        return data;
      }
    }
  }
  return null;
}
