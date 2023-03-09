# Clok
Clok is an Electron application that helps freelancers track their time and organize their work. It is built using React, Webpack 4, and Jest.
![home-clok](https://i.imgur.com/0OPPb6r.png)
![home-clok](https://i.imgur.com/WjaUwVY.png)
**Interactive Prototype**: <https://xd.adobe.com/view/d00ec58e-f740-4902-a29f-4d933c1cb452?fullscreen>

## Getting Started
To get started with Clok, you can follow these steps:

Clone the repository: `git clone https://github.com/<your-username>/clok.git`
Install dependencies: `npm install`
Start the application: `npm start`

## Features
With Clok, freelancers can easily add clients, projects, and tasks to create a visual workflow for themselves and their clients. Here are some of the main features of the application:

### Clients
A client is the root of the organization structure and is required for every task you track. You can create a client for an individual or a company and assign pay rates (optional).

### Projects
A project should be used whenever a client is hiring you out for more than one assignment. You can create a project under a client and assign pay rates that override the client pay rate (optional).

### Tasks
A task is used every time you want to start tracking your session. You can create a task under a project, click the start button to start tracking, and the stop button to stop tracking a started session. You can also create or edit a task by typing in the time intervals manually and assign pay rates that override the project and client pay rate (optional).

## Scripts
Here are the available scripts in the package.json:

```build:dev: builds the application in development mode using Webpack
start: starts the application using Electron
build:test: builds the tests using Webpack
test: runs the tests using Jest
lint: lints the code using ESLint
fixlint: lints and fixes the code using ESLint
```

## License
Clok is open-source software licensed under the MIT License. See the LICENSE file for more information.

