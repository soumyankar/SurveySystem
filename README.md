# SurveySystem
A customised Survey System for gathering the perception of the public mass towards LGBTQ+ Community

## Tech stack

1. React
2. Material-UI
3. Survey-JS
4. Node
5. Express
6. MongoDB

## Installation

* Clone the repo and change directory:

```bash
https://github.com/soumyankar/SurveySystem.git
cd SurveySystem
```

The application has been modularized into three separate services: **Client**, **Server**, **System**.  
We make use of the **System** service to install and start the application, it is enough to run the command shown below and npm would do the rest for us:

```bash
cd system && npm run installall && npm start
```

## Dependencies

It is important to have the following technologies:

1. Node.js
2. npm
3. MongoDB

To install Node.js, npm, and MongoDB, follow the steps below:

### Install Node.js and npm:

* Visit the official Node.js website: https://nodejs.org
* Download the recommended LTS (Long Term Support) version for your operating system.
* Run the installer and follow the instructions.
* After installation, open a terminal or command prompt and verify that Node.js and npm are installed by running the following commands:

```bash
node -v
npm -v

```
### Install MongoDB:

* Visit the official MongoDB website: https://www.mongodb.com
* Go to the "Downloads" section and choose the appropriate package for your operating system.
* Run the installer and follow the instructions.
* During installation, make sure to select the options to install MongoDB as a service and add it to the system's PATH (if * available).
* After installation, open a terminal or command prompt and verify that MongoDB is installed by running the following command:

```bash
mongod --version
```

Note: MongoDB requires a data directory to store its database files. By default, it uses **/data/db** on the root of the system drive. If you want to use a different directory or location, make sure to set it up in the MongoDB configuration.

Once you have Node.js, npm, and MongoDB installed, you can go back to the installation instructions and if everything is installed correctly, everything should work fine!