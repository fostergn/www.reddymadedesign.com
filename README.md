# www.reddymadedesign.com
Architecture Website

This project uses React and WordPress

### Getting Started
`git clone git@github.com:fostergn/www.reddymadedesign.com.git`
`cd www.reddymadedesign.com`
`docker compose-up`
`cd app`
`npm install`
`npm run start`

The client side application will now be running at `localhost:3000` and WordPress will be running at `localhost:8000`

### Build for Production
`cd www.reddymadedesign.com/app`
`npm run build`

Your front end application will now be in the root of your project as an index.html and a /static directory. `rsync` / ftp drag 'n' drop that sweet little baby wherever it needs to go.

There is an `.htaccess` file in the root that allows for all requests that do not match an existing path on the server will serve the index.html page.

