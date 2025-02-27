# Complete Node.js Developer Course

This is a udemy course i got thought by [Andrew Mead](mead.io) that really has been rated high and i hope it solidifies my node knowledge.

## What is Node.js ?

Node is a way to run javascript on the server as opposed to being forced to run it on the client that is just built on chrome V8 js engine.

The chrome V8 engine and node are basically written in c++
This is what allows chrome to interact with the DOM because technically the DOM isnt part of javascript and also it is what allows node to interaact with the file-system when also the file system isnt part of js either

## Why i am learning Node.js Again ?

- Because of its strong demand even in todays market
- because of its non-blocking I/O
- I need it for my interactive comments section app

Essentially every file you create is basically a module in node.js with its own scope just like how a function is given its own scope

# Notes App Documentation

So yea for over a week i was working on a notes application that uses the fs (File System), chalk and JSON to Create, Read Update and Delete notes on the Json file based on Command Line Arguments passed on the terminal

## What did I learn

- I learnt that chalk is a really good package to be able to use to display terminal messages in a more easy to understand fashion
- I learnt also that "--" in node/terminal is use to tell the application that this is a Command Line Argument (or CLA's as i like to call them).
- Yargs offer built in support for properly parsing command line arguments.
- Learnt new yargs methods

All in all i learnt a lot so i guess to the next one!

# Debugging in Node.js

- debugger: This is a tool specific to node.js (but is also compatible with the google v8 engine) that helps u debugg your code, on its own it doesnt do anything ooh but once you run "node inspect <filename>.js then it kicks into action showing you what all the variable u have looks like. Then you can view it on chrome by going to "chrome://inspect"

Then if you close the debugger and want to reopen it you have to just type the word "restart" on your terminal and it will restart the debbuger giving you access to that inspect link

# Weather App

[geocode API](https://api.opencagedata.com/geocode/v1/json?q=ikki&key=bf04b86b881842e0898fd7b43bc4c529&limit=1) and [Weather Stack API](https://api.weatherstack.com/current?access_key=53d5c6d178d53ebcb753860c72a59132&query=6.8570,7.3834)

I have been learning about how to query weather stack api and dynamically convert text location to geo location coordinates using geo location api

Low-Level Errors: This is an error that happens usually on the users OS where in which the error property exists but the response doesn't

Call-back Pattern: The call back pattern is really usefull in node.js and how it operates because since node-js is single threaded and it still needs to handle async await calls that might still havent return but might want to run an output with that return, callbacks are useful cos they are like accomapany function that gets passed to the main async function when its fully ready to use.

### Encode URI component

### Callback Chaining

### Manual request setup

### Web Servers - Express

In reality you never send just plain text response its either you send Html to display a page on the browser or you send JSON data to be consumed

"**dirname": This is get the path to the current directory of the node js application
"**filename": This is use to get the name of the executed file.

When creating web servers index.html has a special meaning (you dont have to load up the specific path for it)

### Template engine to render dynamic webpages

Handlebars: The "hbs" package is the handlebarjs package for express use case

Handle bars is basically html code with some flexibility for dynamic contentt rendering and it has the ".hbs" file extension

### Partial

This is when you create a little template that is part of a bigger web page, its just like components in react

in nodemon if you want it to restart the server only when certain files are changed you can set it via "nodemon app.cjs -e js,hbs,cjs" this tells nodemon to only restart the server when files with this extension are changed

## 404 pages

this is a way of setting up the express server in such a way that instead of showing the generic "Cannot Get/<filename>" it shows something useful to the user

Was able to learn how to set up complex matched routing using the wild card (\*) selector in express

# How to Deploy Http JSON endpoints for Weather app.

- Deploying with heroku: So basically this is my first time deploying a project on heroku so its going to be a wonderful experience

1. Got started via sign up and authentication
2. Proceeded to install heroku CLI
3. Check version via heroku -v
4. Login via "heroku login" command

And thats all for heroku set up

### Setting up SSH keys

- SSH : This stands for "Secure SHell" It gives us a means of communicating with another machine
  "ls -a -l ~/.ssh" is used to check if you already have an ssh folder in your project

To create ssh keys u use "ssh-keygen -t rsa -b 4096 -C "justicefavour491@gmail.com" This will open a wizard that u just need to press enter

### Registering your ssh files

"ssh add" is the command

### Databases and MongoDB

To start up mongoDB for me: "/Users/Justice/mongodb/bin/mongod.exe --dbpath /Users/Justice/mongodb-data"

We are working on a task manager project to explore more about MongoDB
NO-SQL: "Not Only Structured Query Language"
In the tutorial we used Robo 3T which has now been changed to Studio 3T for the GUI

## Mongo DB native driver for node

to install mongoDB node driver "npm install mongodb@6.11"

## Object ID's in MongoDB

it is different from nosql databases that uses auto-incrementing id's it uses GU id's (Globally Unique ID's)

#### how to manually generate objectID

- The mongoDB GU ID is a 12-byte string which is not just randomly generated but its divided into:

1. first 4-byte: a timestamp value in seconds starting from the Unix Epoch (January 1 1970 UTC)
2. 5-byte random value
3. 3-byte increment value
   "6750aee4c283e1a62f865c6f"
   ID's are visualization of the actual binary

## REST API's and Mongoose

- What's Mongoose: Mongoose is used to allow us to do more important stuffs on MongoDB and set up some stucture to your mongoDB database

### Mongoose Modelling

A model is what allows us to model something in the real world that we want to store in the database

Mongoose Falls into a broader category of tools called ODM's (Object Document Mapper)

### Data Validation & Data Sanitization

- Data validation: Allows us enforce some rules on data
- Data Sanitization: Allows us to do some cleanup on the data for the data before saving

**NOTE**: Instead of stressing yourself you can use [npm validator](https://www.npmjs.com/package/validator)

\_\_V: Stores the version of the data

## REST API (Representational State Transfer Application Programming Interface)

- REST: This allows client to acces and manipulate resources using a set of predefined operations.
- API: Its a set of tools that allows us to build applications.

Every single REST API operation is defined with two pieces of data the http method and the path.

What is an HTTP request:

## Promise Chaining

## ASYNC AWAIT

When you add an async keyword to a function it becomes a promise and the return value is the fufillment value

Throwing an error is just like rejecting param in promise

Async-await just helps us to provide more sync to asynchronous operations
