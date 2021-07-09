# README
## Vue 3 Frontend with Rails 6 backend

Hi Max.

This is a barebones template of a Vue on Rails application, using Rails 6.x, Vue 3.x, Ruby 3.x, and Webpacker 5.x. 

The webpack has been configured to recgonize *\*.vue* files. 



### To install necessary gems and dependencies run:
(this requires yarn, so install it if necessary)
```
bin/setup
```

### Then to start the server for frontend and backend:

in one tab:
```
rails server
```
then in another tab:
```
./bin/webpack-dev-server
```
You will be greeted with a Vue page saying "Hello World"

From there you are free to build your new Vue on Rails application to your specific needs.

Vue components can be added to the *app/javascript/src/components* file, just make sure to update the router.
