# Gymate

A way to plan your workout routines and meet new friends! Gymate will take in your workout preferences and pair you with a buddy who has similar interests. 

### Link to delopyed site



### Author

Author : [Jacobs](https://github.com/gljacobs)

Author : [Chloe](https://github.com/chloezhouny)

Author : [Matt](https://github.com/matkuh)

Author : [Megha](https://github.com/meghabprasad)

### Images

### Tech Used

1. [JavaScript](https://www.javascript.com/)
2. [Node](https://nodejs.org/en/)
3. [Express](https://expressjs.com/)
4. [Handlebars](https://www.npmjs.com/package/handlebars)
5. [Okta](https://www.okta.com/)
6. [AWS-SDK S3](https://aws.amazon.com/sdk-for-node-js/)
7. [MySQL](https://www.mysql.com/)
8. [Sequelize](http://docs.sequelizejs.com/)

### How it Works

<img src"wireframess.png" width 600 height 400>

### Account Authentication

## Getting Started

To install this example application, run the following commands:

```bash
git clone git@github.com:oktadeveloper/okta-node-express-example.git
cd okta-node-express-example
```

This will get a copy of the project install locally. You will need to set up some environment variables before the app will run properly.

To integrate Okta's Identity Platform for user authentication, you'll first need to:

* [Sign up for a free Okta Developer account](https://www.okta.com/developer/signup/)
* You will get a URL similar to `https://dev-123456.oktapreview.com`.
  * Save this URL for later
  * You will also use this URL to login to your Okta account

You will need to create an application in Okta:

* Log in to your Okta account, then navigate to **Applications** and click the **Add Application** button
* Select **Web** and click **Next**
* Give your application a name (e.g. "Simple Node Authentication")
* Change the **Base URI** to `http://localhost:3000` and the **Login redirect URI** to `http://localhost:3000/authorization-code/callback`, then click **Done**
* Save your **client ID** and **client secret** for later

Your Okta application should have settings similar to the following:

You will also need two API tokens:

* Log in to your Okta account, then navigate to **API > Tokens** and click the **Create Token** button
* Enter a name that will help you remember what this is used for
  * The first one will be for registering users, so a name like "Registration" would work here
  * The second token will be for fetching and editing user profiles, so you could call it something like "User Profiles"
* Save the provided **token value** for later
  * This will only be displayed once. If you lose it, you will need to create another API token
* Repeat this process for the next token

Now create a file called `.env` in the project root and add the following variables, replacing the values with your own from the previous steps.

```bash
HOST_URL=http://localhost:3000
ORG_URL=https://dev-123456.oktapreview.com
CLIENT_ID=okta-application-client-id
CLIENT_SECRET=okta-application-client-secret
REGISTRATION_TOKEN=okta-registration-api-token
USER_PROFILE_TOKEN=okta-user-profile-api-token
APP_SECRET=something-random
```

One way to get a random `APP_SECRET` is to use the following command line, which will generate a random value and add it to your `.env` file.

```bash
echo "APP_SECRET=`openssl rand -base64 32`" >> .env
```

The app also assumes users have `birthdate` and `favoriteColor` custom user attributes. Those need to be added from the Okta Developer Console by going to **Users > Profile Editor**, then click the **Profile** button on the profile labeled **User**. Click **Add Attribute**, then give it a display name like `Birth Date` and a variable name of `birthdate` (case sensitive). Click **Save and Add Another** to add another one with the variable name `favoriteColor`, then click **Save**. The rest of the options can stay at the default.

