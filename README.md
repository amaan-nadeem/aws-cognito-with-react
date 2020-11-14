# AWS COGNITO AND IAM AUTHENTICATION WITH REACT

Cognito is an aws most widely used user authentication and management service which provides easy way to develop a product with being worried about user authentication security backlocks and managing api's with custom api gateways.

## Configuration

First initiate a react project it can either be of with or without typescript

```npm i --save bootstrap reactstrap styled-components validator uuid amazon-cognito-identity-js jwt-decode
npm i --save-dev @types/reactstrap @types/styled-components @types/validator @types/uuid @types/jwt-decode
```

We are Going to use

#### amazon-cognito-identity-js NPM Package

for our user authentication flow. CognitoUserPool method of our main package requires only

```COGNITO_USER_POOL_ID
COGNITO_CLIENT_ID
```

for configure aws-cognito in our application

## NECESSARY METHODS FOR COMPLETE AUTHENTICATION FLOW

We'll first import following methods

```import {
  AuthenticationDetails, # username and password and instantiate its class object
  CognitoUserPool, # set cognito user pool
  CognitoUserAttribute, # use to setup user's attributes other than
  CognitoUser, # takes in Username and UserPool and instantiate cognito user object with different authentication methods
  CognitoUserSession,
} from "amazon-cognito-identity-js";
```

## CognitoUserPool Methods

It contains signup methods

```const userPool = new CognitoUserPool({
  UserPoolId: <COGNITO_USER_POOL_ID>,
  ClientId: <COGNITO_CLIENT_ID>,
});

- userPool.signUp(username, password, attrList, authenticationRule || null, callback(error, result))
- userPool.confirmRegistration(verificationCode, status [true or false], callback(error, result))
- userPool.resendConfirmationCode(callback(error, result))
```

## CognitoUserPool METHODS

It contains all sign in methods

```
const authData = {
    Username: email,
    Password: password,
  };

  const authDetails = new AuthenticationDetails(authData);
  const userData = {
    Username: email,
    Pool: userPool,
  };


  const cognitoUser = new CognitoUser(userData);

- cognitoUser.authenticateUser(authDetails, {
      onSuccess: function(result),
      onFailure: function(error),
  }
- cognitoUser.getUserAttributes(callback(err, result))
- cognitoUser.getAttributeVerificationCode(type (mostly its 'email'), {
    onSuccess: function(result),
    onFailure: function(error),
    inputVerificationCode: function() # its null if you want to input verification code on different page
})

- cognitoUser.verifyAttribute('email', verificationCode, this);
- cognitoUser.deleteAttributes(attributeList, callback(err, result))
- cognitoUser.updateAttributes(attributeList, function(err, result))
- cognitoUser.enableMFA(function(err, result)) # to enable multifactor authentication
- cognitoUser.disableMFA(function(err, result)) # to disable multifactor authentication
- cognitoUser.changePassword(oldPassword, newPassword, callback(err, result))
- cognitoUser.signOut() # to sign out from application
- cognitoUser.globalSignOut(callback) # Global signout for an authenticated user(invalidates all issued tokens).
```.
