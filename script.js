import { createAuth0Client } from '@auth0/auth0-spa-js';

//with async/await
const auth0 = await createAuth0Client({
  domain: 'dev-38kczhfttg6rqjp.us.auth0.com',
  clientId: 'xx',
  authorizationParams: {
    redirect_uri: 'achinsk.github.io'
  }
});

//redirect to the Universal Login Page
document.getElementById('login').addEventListener('click', async () => {
  await auth0.loginWithRedirect();
});

//in your callback route (<MY_CALLBACK_URL>)
window.addEventListener('load', async () => {
  const redirectResult = await auth0.handleRedirectCallback();
  //logged in. you can get the user profile like this:
  const user = await auth0.getUser();
  console.log(user);
});
