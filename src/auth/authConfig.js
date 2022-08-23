export const msalConfig = {
  auth: {
    clientId: 'd48a1c2a-f788-41a1-8875-7bd0b31ea830',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: 'http://localhost:3000',
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ['openid', 'profile', 'User.Read'],
};

// Add scopes here for access token to be used at back-end API.
export const tokenRequest = {
  scopes: [],
};
