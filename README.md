# [Pretty Stuff](http://prettystuff.io)

![Screenshot](https://d13yacurqjgara.cloudfront.net/users/13314/screenshots/1715582/prettystuff_ipad.png)

Pretty Stuff runs on the Ghost CMS using a custom theme. If you want to mess around with it locally, here is some instruction.

### Install Ghost
For detailed instructions on various platforms, visit the [Ghost Installation Guide](http://support.ghost.org/installation/). If you get stuck, help is available on [our support site](http://support.ghost.org/).

1. Install [Node.js](http://nodejs.org) - Ghost requires **Node v0.10.x**
1. Download the latest Ghost package from [Ghost.org](http://ghost.org/download). 
1. Create a new directory where you would like to run the code, and un-zip the package to that location.
1. Fire up a Terminal, the Node Command Prompt or shell and change directory to the root of the Ghost application (where config.example.js and index.js are)
1. run `npm install --production` to install the node dependencies. If you see `error Error: ENOENT` on this step, make sure you are in the project directory and try again.
1. To start ghost, run `npm start`
1. Visit `http://localhost:2368/` in your web browser or go to `http://localhost:2368/ghost` to log in

Check out the [Documentation](http://support.ghost.org/) for more detailed instructions, or get in touch via the [forum](http://ghost.org/forum) if you get stuck.

### Customizing the theme 
1. Install [Gulp.js](http://gulpjs.com/).
1. Install all the packages listed in the gulpfile, which you can find in the „prettystuff“ theme directory (content/themes/prettystuff).
1. Run `gulp watch` in that directory.
1. You now have an browser-sync supported second server at `http://localhost:3000/`, but any changes to the ghost-backend still have to happen under `http://localhost:2368/ghost/`.


### Logging in For The First Time
Once you have the Ghost server up and running, you should be able to navigate to `http://localhost:2368/ghost/` from a web browser, where you will be prompted to setup your blog and user account. Once you have entered your desired credentials you will be automatically logged in to the admin area. The setup screen will not be accessible once the process has been completed.

#### Please feel free to open an issue for any bug you find on the site, thank you! 

