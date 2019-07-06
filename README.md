This is management application which is a major part of my bachelor graduation project and named `VNUK AMS - Attendance Management System`

## Setup guidelines

### Step 1: Install dependencies for server and client app.

- From the project root directory,, run command `yarn install` or `npm install`
- Go to client folder: `cd client` and then run command `yarn install` or `npm install`
- When successfully installed dependencies, move on.

### Step 2 Start server and client ( will be concurrently running at the same time)

- Back to root, then run `yarn run dev` or `npm run dev`
- Your browser will be navigate to [http://localhost:3000](http://localhost:3000) as client application running which built with React and Redux
- Also, you will endup with another port running is api server [http://localhost:5000](http://localhost:5000)
- _Note that_ : The react project was already proxy configured: so for example instead of `http://localhost:5000/api/*`, the actual api address is `http://localhost:3000/api/*`
  - All request following `api/*` from `5000` will be fowarded to `3000`

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Database & Test account

- Database: MongoDB exported at `/database/vnuk-ams.zip` by mongodump
- Config mongoDB: `mongoURL` in file `/config/keys.js`
- Test account: located at `/database/test-account.json`

### `Screenshots & Demo`

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
