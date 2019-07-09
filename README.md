This is full-stack javascript application which is a major part of my bachelor graduation project and named `VNUK AMS - Attendance Management System`

## Table of Contents

- [Specifications](#specifications)
- [Setup guidelines](#Setup guidelines)
  - [Step 1: Download required resources ](#step-1-download-required-resources)
  - [Step 2: Import database](#step-2-import-database)
  - [Step 3: Install project technologies](#step-3-install-project-technologies)
  - [Step 4: Install Project](#step-4-install-project)
- [Usage](#usage)
  - [Start server and client ](#start-server-and-client)
  - [Start face-recognition app](#start-face-recognition-app)
  - [API Usages](#api-usages)
 
- [Database & Test account](#database--test-account)
- [Screenshots & Demo](#screenshots--demo)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Specifications

The specs contained in this project are:

**Server App:**
- [NodeJS](https://nodejs.org) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.                           
- [ExpressJS](https://expressjs.com/) - A minimal and flexible Node.js web application framework.
- [googleapis](https://www.npmjs.com/package/googleapis) - Node.js client library for using Google APIs. 
- [PassportJS](http://www.passportjs.org) - Authentication middleware for Node.js.

**Client App:**
- [ReactJS](https://reactjs.org) -A JavaScript library for building user interfaces.                                       
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
- [SASS](https://sass-lang.com/) - Css processor
- [Ant Design](https://ant.design/) - A design system with values of Nature and Determinacy for better user experience of enterprise applications.                             
- [PassportJS](http://www.passportjs.org) - Authentication middleware for Node.js.

**Face Recognition AI App:**
- [Python](https://www.python.org/) - the Python Programming Language                          
- [face_recognition](https://pypi.org/project/face_recognition/) - Recognize and manipulate faces from Python or from the command line with
                                                                   the world’s simplest face recognition library.                       
- [OpenCV2](https://opencv.org/) - a library of programming functions mainly aimed at real-time computer vision.                          


## Setup guidelines 
_Development mode_

### Step 1: Download required resources 
- Download shape predictor for face_attendance application : 
[95MB - Google Drive](https://drive.google.com/open?id=1TSRhJAYkBqBfYNwrxXGaUDeEnBhR9aAJ)
- Copy file `shape_predictor_68_face_landmarks.dat` to folder `./face-attendance/models/`

### Step 2: Import database
1. Database: MongoDB located at `./database/vnuk-ams-database.zip` exported by [mongodump][https://docs.mongodb.com/manual/reference/program/mongodump/]
2. Import to your local MongoDB:  
    - Firstly, you need MongoDB installed locally: [MongoDB Community Edition installation tutorials](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials)
      - After installed, open Terminal  / cmd and type `mongo` and enter.
    If you see `MongoDB shell version v4.0.10` and bla bla, good to move next steps. Remember exit out of mongo command by type "exit" and Enter.
    - Unzip `vnuk-ams-database.zip` 
    - Back to Terminal/ cmd, type `mongorestore -d [database-name] [path-to-database-folder]` 
      -  Replace **[database-name]** with database name you want 
      -  Replace **[path-to-database-folder]** with path to vnuk-ams-database just extracted above.
          > Get this path maybe tricky, so to get this step easier, some tips: 
          > - You can simply type `mongorestore -d vnuk-ams ` and then drag the folder database to terminal / cmd to get exact path
          > - For not supported drag-drop termnial / cmd, you can move database folder to top folders like Downloads, Documents for easier get path.
      - After all, my entire import command is (you will have different path): `mongorestore -d vnuk-ams /Users/nguyen.the.vinh.bao/Projects/Personal/vnuk-ams/database/vnuk-ams-database`
    - Finally, get into mongo with `mongo` command and `show dbs` to check if our database created or not 
      ```
      > show dbs
      admin     0.000GB
      config    0.000GB
      local     0.000GB
      vnuk-ams  0.007GB (this is our database imported )
      ```
3. Config mongURL in server application: 
    - Open keys.js located at `./config`
    - Replace value of `mongoURL` field with new correct url:
    default is `mongodb://localhost:27017/vnuk-ams` and your will be `mongodb://localhost:27017/[your database name imported]` 
    - Save it ! ☕️
  
### Step 3: Install project technologies

> This section is specific to Node.js/npm projects, but can be generalized to any language and ecosystem. The following instructions will probably be relevant if any of the following are true:
> 
> - The top level of the project contains a file called `package.json`
> - The instructions in the README talk about `npm` or `yarn`

- Install [Node.js](https://nodejs.org/) by following the instructions on the website.
- If the project's README explicitly mentions any other dependencies or libraries, follow the site instructions to install those as well.

You're finally ready to install the actual project!

- Follow the instructions in the project README, which probably involve the following steps:
    + Run `npm install` inside the project
    + Run `npm start` afterwards

> #### Note: npm vs. Yarn
> 
> Node.js comes with a **package manager** called `npm`, which is kind of like a free App Store for JavaScript software.
> 
> If the project's README mentions `yarn`, you can probably replace `yarn` with `npm` and things will go fine.
> 
> For example:
> 
> ```sh
> yarn install          # npm install
> yarn start            # npm start
> yarn run some-script  # npm run some-script
> ```
> 
> One pitfall is with **global installation** (installing a package to your whole computer, not just the specific project).
> 
> ```sh
> yarn global add some-package   # npm install -g some-package
> ```


### Step 4: Install Project
  ##### Install dependencies for server and client app.
  - **Install server packages:** From the project root directory, run command `yarn install` or `npm install`
  - **Install client packages:** Go to client folder: `cd client` and then run command `yarn install` or `npm install`
  - When successfully installed dependencies, move on.
  - Back to root by `cd ..` to ready for next steps.


The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Database & Test account

- Database: MongoDB exported at `/database/vnuk-ams.zip` by mongodump
- Config mongoDB: `mongoURL` in file `/config/keys.js`
- Test account: located at `/database/test-account.json`

## Usage
### Start server and client 
  ##### Concurrently running both server and client by one script
- From root, then run `yarn run dev` or `npm run dev` to start server and client app.
  - Your browser will be navigate to [http://localhost:3000](http://localhost:3000) as client application running which built with React and Redux
  - Also, you will endup with another port running is api server [http://localhost:5000](http://localhost:5000)
 > _Note that_ : The react project was already proxy configured: so for example instead of `http://localhost:5000/api/*`, the actual api address is `http://localhost:3000/api/*`
 >  . All request following `api/*` from port `5000` will be fowarded to port `3000`

### Start face-recognition app
##### This AI app need to run as watcher.
- Start a new tab/window terminal or cmd ( still keep terminal server app above running)
- At `./face-attendace` directory
- Run `python3 face_watcher.py`
- Application will turn to watching mode.
- Yay! You are done. 

### API Usages
##### Updating 

## Screenshots & Demo

#### `Import from Google Calendar`

![alt text](https://raw.githubusercontent.com/methebao/vnuk-ams/master/screenshoots/calendar.png)

#### `To Timeline`

![alt text](https://raw.githubusercontent.com/methebao/vnuk-ams/master/screenshoots/home-timeline.png)

#### `Class list`

![alt text](https://raw.githubusercontent.com/methebao/vnuk-ams/master/screenshoots/class-list.png)

#### `Class detail`

![alt text](https://raw.githubusercontent.com/methebao/vnuk-ams/master/screenshoots/class-detail.png)

#### `Event detail`

![alt text](https://raw.githubusercontent.com/methebao/vnuk-ams/master/screenshoots/event-detail.png)


[Drive - 95MB]: https://drive.google.com/open?id=1TSRhJAYkBqBfYNwrxXGaUDeEnBhR9aAJ


## Maintainers

[@methebao](https://github.com/methebao).

## Contributing

Feel free to dive in! [Open an issue](https://github.com/methebao/vnuk-ams/issues/new) or submit PRs.


## License

[MIT](LICENSE) © thebaoDEV_ 
