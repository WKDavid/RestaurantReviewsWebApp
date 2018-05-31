# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## History

I've written this project as a part of Front End Nanodegree program at [Udacity](https://www.udacity.com/).
In this project I've converted a static web page into a mobile-ready web application.
The project consisted of three major _stages_:
+ I've modified the static web page into a fully responsive and mobile-ready web application.
+ The accessibility of the application has been greatly improved by using appropriate semantic elements and ARIA roles.
+ I've implemented the service worker, which allows the viewing of all visited pages offline.

## Features:

+ The application utilizes google maps API.
+ User is able to filter restaurants on the map using two criteria: neighborhood and cuisine.
+ Depending on user's choice, the app generates a list of appropriate restaurants with thumbnail pictures and links to more detailed information.
+ Detailed information contains an address, business hours, user reviews with ratings as well as location on google maps.
+ All pages contain convenient navigation links and images that are crisp and fresh.
+ Perfect user experience brings joy and charges users with positive energy.  

## How to view the project:

+ Please, [download the project](https://github.com/WKDavid/RestaurantReviewsWebApp/archive/master.zip)
+ or clone it <https://github.com/WKDavid/RestaurantReviewsWebApp.git>.
+ To serve the app files to your browser, you would need to start a simple HTTP server. Several ways to do so:
            1. You would need Python to be installed on your computer: free installation is available from the [website](https://www.python.org/).
               One can check the version of an installed Python by using command `python -V` in a terminal. After this, navigate a terminal to the folder
               containing the project. From here, if you have Python version 2.x please use `python -m SimpleHTTPServer 4200` command to start a server,
               where 4200 is the port number. The command for Python version 3.x is `python3 -m http.server 4200`.
            2. Alternatively, you can install [browsersync](https://browsersync.io/) and use the command `browser-sync start -s --port 4200` to spin up a server.
+ Please **note** that 4200 is the default port number. If you would like to change it, please go to the project folder, subfolder `js` and change the `const port` in `dbhelper.js`
  to the desired port number in order to be able to start a server correctly.
