import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import { fetchUserAttributes, signOut } from 'aws-amplify/auth';

Amplify.configure(config);

async function handleFetchUserAttributes() {
  try {
    const userAttributes = await fetchUserAttributes();
    console.log(userAttributes);
  } catch (error) {
    console.log(error);
    signOut();
  }

}

function App({ signOut, user }) {
  handleFetchUserAttributes();
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);