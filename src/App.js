import React from 'react';
import Profile from './components/Profile';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div>
      <AmplifySignOut />
      <h1>My Profile</h1>
      <Profile />
    </div>
  );
}

export default withAuthenticator(App);
