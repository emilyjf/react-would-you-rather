This project is an application that allows users to login and create and respond to polls.

Would You Rather?
React & Redux Project — Udacity React Developer Nanodegree

This is the second project of the React Developer Nanodegree.

How It Works

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Instruction to load the app
To start the project:
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

The project uses Node.js and the Create-React-App starter. If you do not have Node >= 6.x installed, you can download it here: Node.js

Once Node is installed, navigate to the directory where you want to store the app

git clone https://github.com/dxit/react-redux-would-you-rather.git
npm install

or

yarn install
Once all of the dependencies have been installed, you can launch the app with:

npm start

or

yarn start

A new browser window should automatically open displaying the app. If it doesn't, navigate to http://localhost:3000/ in your browser.

App Functionality
The person using the application has a way of impersonating/logging in as an existing user.

Information about the logged in user appears on the top right of the page. If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page is shown. The application allows the user to log out and log back in.

Once the user logs in, the user is able to toggle between their answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions are shown by default, and the name of the logged in user is visible on the page in the top right corner.

Each polling question has a link to the details of that poll. The details of each poll are available at questions/:question_id. When a poll is clicked on the home page, the following is shown:

-text “Would You Rather”
-avatar of the user who posted the polling question
-two option

For answered polls, each of the ptions incluldes the following:

-text of the option;
-number of people who voted for that option;
-percentage of people who voted for that option;

The option selected by the logged-in user is clearly marked.

Since we want to make sure our application creates a good user experience, the application shows a 404 page if the user is trying to access a poll that does not exist. (Please keep in mind that newly created polls will not be accessible at their url because of the way the backend is set up in this application.) It also displays a navigation bar so the user can easily navigate anywhere in the application.

When someone votes in a poll, all the information for an answered poll is displayed. The user’s response is recorded and is clearly visible on the poll details page. Users can only vote once per poll; they aren’t allowed to change their answer after they’ve voted.  When the user comes back to the home page, the polling question appears in the “Answered” column.

The form for posting new polling questions is available at the /add route. The application shows the text “Would You Rather” and has a form for creating two options. On ubmitting the form, a new poll is created, the user it taken to the home page, and the new polling question appears in the correct category on the home page.

The application has a leaderboard that’s available at the /leaderboard route. Each entry on the leaderboard includes the following:

-user’s name;
-user’s avatar;
-number of questions the user asked;
-number of questions the user answered;

Users are ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered. The more questions a user asks and answers, the higher up they move.

The user is able to navigate to the leaderboard, to a specific question, and to the form that allows the user to create a new poll both from within the app and by typing in the address into the address bar. To make sure we’re showing the data that is relevant to the user, the application requires the user to be signed in order to access those pages.
