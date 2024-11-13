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

in nodemon if you want it to restart the server only when certain files are changed you can set it via "nodemon appp.cjs -e js,hbs,cjs" this tells nodemon to only restart the server when files with this extension are changed
