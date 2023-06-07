# [Inquire Chatbot SaaS](https://appseed.us/product/purity-dashboard/api-server-nodejs/react/)
## Telegram: https://t.me/midasprince
Start your Development with an Innovative Admin Template for **Chakra UI** and **React**. [Purity UI Dashboard](https://appseed.us/product/purity-dashboard/api-server-nodejs/react/) is built with over 70 frontend individual elements, like buttons, inputs, navbars, navtabs, cards or alerts, giving you the freedom of choosing and combining. All components can take variations in colour, that you can easily modify using Chakra's style props. The product comes with a simple JWT authentication flow: login/register/logout. 

- 👉 [Inquire Chatbot SaaS](https://appseed.us/product/purity-dashboard/api-server-nodejs/react/) - product page

<br />

![Inquire Chatbot SaaS - Open-source full-stack prodyct crafted by AppSeed and Creative-Tim.](https://user-images.githubusercontent.com/51070104/205427640-007904ec-9cd5-4060-86c6-47675b36cda1.png)

<br />

## Tests

> `Compatibility matrix` using Ubuntu `18.04 LTS` as reference.

| NodeJS | NPM | YARN | 
| --- | --- | --- |  
| `v12.0.0` | ✅ | ✅ |
| `v14.0.0` | ✅ | ✅ |
| `v16.0.0` | ✅ | ✅ | 
| `v18.0.0` | ✅ | ✅ | 

<br />

## How to use it

To use the product Node JS (>= 12.x) is required and GIT to clone/download the project from the public repository.

> 👉 **Step 1** - Clone the project

```bash
$ git clone https://github.com/Chatbot-SaaS/inquirebot-frontend.git
$ cd inquirebot-frontend
```

<br >

> 👉 **Step 2** - Install dependencies via NPM or yarn

```bash
$ npm i
// OR
$ yarn
```

<br />

> 👉 **Step 3** - Edit the `.env` using the template `.env.sample`. 

```env

API_URL='http://localhost:7777/api/'

REACT_APP_GITHUB_OAUTH_CLIENT_ID     = ... # Github OAuth Client
REACT_APP_GITHUB_OAUTH_CLIENT_SECRET = ... # Github OAuth Secret
REACT_APP_GITHUB_OAUTH_REDIRECT_URL  = ... # Github OAuth Callback URL
```

<br />

> 👉 **Step 4** - Start in development mode

```bash
$ npm run start 
// OR
$ yarn start
```

<br />

## Configure the backend server

The product comes with a usable JWT Authentication flow that provides only the basic requests: login/logout/register. 

> 👉 **API Server URL** - `src/config/constant.js` 

```javascript
const config = {
    ...
    API_SERVER: 'http://localhost:5000/api/'  // <-- The magic line
};
```

<br />

**API Server Descriptor** - POSTMAN Collection

The API Server signature is provided by the [Unified API Definition](https://docs.appseed.us/boilerplate-code/api-unified-definition)

- [API POSTMAN Collection](https://github.com/app-generator/api-server-unified/blob/main/api.postman_collection.json) - can be used to mock (simulate) the backend server or code a new one in your preferred framework. 

<br />
