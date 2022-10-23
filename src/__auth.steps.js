/*
------------
AUTH SETUP
------------
1. create firebase project
2. enable web
3. enable sign in method
4. install firebase
5. get firebase config in our firebase.config.js file
6. export app from fierbase.config.js
*/

/*
---------------
CONTEXT SETUP
---------------
1. create UserContext (Auth Context): UserContext --> component name, 
    userContext provides AuthContext
2. Create AuthContext
3. set AuthContext.Provider
4. Make sure we you set the children
5. export AuthContext to use inside useContext hook
6. get form data
7. getAuth in the UserContext
*/

/*
------------------
FIREBASE HOSTING
------------------
=> One time for each computer
1. npm install -g firebase-tools
2. firebase login

=> for each project one time
3. firebase init
4. ? What do you want to use as your public directory? build
5. ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
6. ? Set up automatic builds and deploys with GitHub? No
7. ? File build/index.html already exists. Overwrite? No

=> for every deploy
8. npm run build
9. firebase deploy
*/