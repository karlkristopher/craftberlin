# Berlin Craft Beer

* Mobile-friendly directory of craft beer bars, brewhouses, and bottleshops around Berlin.
* MERN stack web application with the help of the Mapbox & Google Places APIs.
* [Click here to see working version of deployed project.](https://berlin-craft.herokuapp.com/)


## Demo
<img src="https://res.cloudinary.com/karlkris/image/upload/v1590504770/github/demo_sum4e3.gif" alt="swapsies_demo"  />

## Setup

### Requirements

* [Node JS](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/get-npm)
* [MongoDB](https://docs.mongodb.com/manual/installation/)
* [Google Developers API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)
* [Mapbox API Key](https://docs.mapbox.com/api/)

### Get Started

First, create the required environment files.

```console
cp .env.template .env
cd client
cp .env.template .env.local
```

Second, install the dependencies.

```console
npm install
cd client
npm install
```

Third, change the Google Places API key found in client/public/index.html to your personal API key.

### Running BCB

#### Run the following commands from the root folder.

For Backend Server (Express.js + MongoDB).

```console
sudo service mongodb start
npm start
```

For Frontend Server (React.js).
```console
cd client
npm start
```

## Managing Locations

### Create Admin Account

1. Go to [http://localhost:3000/admin/create](http://localhost:3000/admin/create).
2. Create an account.
3. Find created account in your database under the **admins** collection and change role from **"null"** to **"admin"**.

### Accessing Admin Account

1. Go to [http://localhost:3000/admin](http://localhost:3000/admin/) and log in with your credentials.
2. You will be directed to a dashboard showing existing locations, and a link to add additional locations.
