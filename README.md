# Berlin Craft Beer

* Mobile-friendly directory of craft beer bars, brewhouses, and bottleshops around Berlin.
* **[Click here](https://berlin-craft.herokuapp.com/)** to see working version of deployed project.

**Built with:**
<p>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white&labelColor=2C2C30" alt="react-badge" height="22"  />
  <img src="https://img.shields.io/badge/node.js-339933?style=flat-square&logo=node.js&logoColor=white&labelColor=2C2C30" alt="nodejs-badge" height="22"  />
  <img src="https://img.shields.io/badge/ex-express-000000?style=flat-square&labelColor=2C2C30" alt="express-badge" height="22"  />
  <img src="https://img.shields.io/badge/mongodb-47A248?style=flat-square&logo=mongodb&logoColor=white&labelColor=2C2C30" alt="mongodb-badge" height="22"  />
</p>

#### Integrated APIs:
<p>
  <img src="https://img.shields.io/badge/google%20places%20api-4285F4?style=flat-square&logo=google-maps&logoColor=white&labelColor=2C2C30" alt="google-badge" height="22"  />
  <img src="https://img.shields.io/badge/mapbox%20api-000000?style=flat-square&logo=mapbox&logoColor=white&labelColor=2C2C30" alt="mapbox-badge" height="22"  />
</p>



## Demo (End User)
<img src="https://res.cloudinary.com/karlkris/image/upload/v1596297702/github/berlincraft-demo_gnsmig.gif" alt="berlincraft_demo" width="300"  />

## Demo (Add a Location)
* Locations autopopulate with Google Places API
<img src="https://res.cloudinary.com/karlkris/image/upload/v1596836884/github/admin-demo_gnznfx.gif" alt="berlincraft_admindemo" width="800"  />

## Setup

### Requirements

* [Node JS](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/get-npm)
* [MongoDB](https://docs.mongodb.com/manual/installation/)
* [Google Developers API Key (Google Places API)](https://developers.google.com/maps/documentation/javascript/get-api-key)
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
