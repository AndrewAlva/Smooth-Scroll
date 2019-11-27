# OG_Brunch
My first brunch boilerplate created from scratch.


## Development Environment
Hi there, this project is built by npm and brunch. It's coded oriented to use "modules" and "objects" of HTML and CSS with Jade and SCSS.

### Getting to know Brunch

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X (and if you have Homebrew, if you don't go or work over Windows or Linux go check directly the documentation at Node)
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)


### Installation of this repo

1. Clone this repo in your dev environment, you can simply run:
```console
foo@bar:~$ git clone https://github.com/AndrewAlva/Brunch_Sass_Jade_Boilerplate.git
```

2. Then install node modules through npm:
```console
foo@bar:~$ npm install
```

And that's it; now you are able to work on this repo.

Also, you can watch files and compile them live while you're working with this command:
```console
foo@bar:~$ brunch w -s --port 3000
```
The last number is the port where you'd like to view the page, you can use whatever you want: 8000, 1111, etc. For mor commands visit [Brunch documentation.](http://brunch.io/docs/commands)


### Get final files for production

When you finish editing the project, you can run this code to get the final assets for production:
```console
foo@bar:~$ brunch build --production
```

This builds minified files ready to upload to server.