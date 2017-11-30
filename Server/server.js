const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const database_controller = require("./database_controller");

const connectionString = require("../config").massive;
const passport = require("passport");
const session = require("express-session");
const Auth0Strategy = require("passport-auth0");
const { secret } = require("../config").session;
const { domain, clientID, clientSecret } = require("../config.js").auth0;

const port = 3001;
const app = express();

app.use(json());
app.use(cors());

massive(connectionString)
  .then(dbInstance => {
    // console.log(dbInstance);
    app.set("db", dbInstance);
  })
  .catch(console.log);
//````````````````````````````````````````````Session`````````````````````````````````````````````````````````````````````
app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
//`````````````````````````````````````````````````Authentication```````````````````````````````````````````````````````````
passport.use(
  new Auth0Strategy(
    {
      domain,
      clientID,
      clientSecret,
      callbackURL: "/login"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      app
        .get("db")
        .getUserByAuthId(profile.id)
        .then(response => {
          if (!response[0]) {
            app
              .get("db")
              .createUserByAuth([
                profile.id,
                profile.displayName,
                profile.email
              ])
              .then(created => {
                return done(null, created[0]);
              });
          } else {
            return done(null, response[0]);
          }
        });
    }
  )
);
passport.serializeUser(function(user, done) {
  console.log(user);
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/profile"
  })
);

app.get("/api/me", function(req, res) {
  if (!req.user) return res.status(401);
  res.status(200).json(req.user);
});

//`````````````````````````````````````````````````````````````````````````````API Endpoints``````````````````````````````````````````````````

app.get("/api/getTrips/:id", database_controller.Get_Trips);
app.get("/api/selectedTrip/:id", database_controller.Select_Trip);
app.get("/api/getFriends/:id", database_controller.Get_Friends);
app.get("/api/searchFriends/:id", database_controller.Search_Friends);
app.post("/api/removeFriend", database_controller.Remove_Friend);
app.post("/api/cancelTrip", database_controller.Cancel_Trip);
app.post("/api/getFriendsOnTrip", database_controller.Get_Friends_On_Trip);
app.post("/api/planTrip", database_controller.Add_Trip);
app.post("/api/signup", database_controller.Create_User);
app.post("/api/newFriends", database_controller.Add_Friend);
app.post("/api/addFriendToTrip", database_controller.Add_Friend_To_Trip);
app.post("/api/upload", database_controller.Upload_Photo);
app.post("/api/editTrip", database_controller.Edit_Trip);
app.post("/api/joinTrip", database_controller.Join_Trip);

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
