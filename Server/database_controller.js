module.exports = {
  //Get all trips assigned to current User

  Get_Trips: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;
    console.log("friend trips hit", params.id);

    dbInstance
      .Get_Trips(params.id)
      .then(trips => {
        res.status(200).send(trips);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  //Create new user in db

  Create_User: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .Create_User(display_name, email, profile_image)
      .then(users => {
        res.status(200).send("New User Created");
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  //Add new trip to db with all relevant info

  Add_Trip: (req, res, next) => {
    console.log(req.body);
    const dbInstance = req.app.get("db");
    const { user_id, city, state_country, depart_date, return_date } = req.body;

    dbInstance
      .Add_Trip([user_id, city, state_country, depart_date, return_date])
      .then(trips => {
        res.status(200).send("New Trip Added");
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  //Get all friends associated with current User

  Get_Friends: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;
    dbInstance
      .Get_Friends(params.id)
      .then(friends => {
        res.status(200).send(friends);
      })
      .catch(console.log);
  },

  //Add selected user as friend of current User

  Add_Friend: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { user_id, friend_id } = req.body;
    console.log("adding friend", user_id, friend_id);

    dbInstance
      .Add_Friend(user_id, friend_id)
      .then(friends => {
        res.status(200).send("Friend Added");
      })
      .catch(console.log);
  },

  //Add new row with like trip id and selected User

  Add_Friend_To_Trip: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { friend_id, trip_id } = req.body;

    dbInstance
      .Add_Friend_To_Trip([
        user_id,
        city,
        state_country,
        depart_date,
        return_date,
        trip_id
      ])
      .then(trips => {
        res.status(200).send("Friend Added To Trip");
      })
      .catch(console.log);
  },

  //Current user uploads picture to firebase and stores reference URL in postgres

  Upload_Photo: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { user_id, profile_image } = req.body;
    dbInstance
      .Upload_Photo([user_id, profile_image])
      .then(pics => {
        res.status(200).send("Photo has been uploaded");
      })
      .catch(console.log);
  },

  //Get all info for currently selected trip
  Select_Trip: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;
    console.log("We hit the server", params.id);

    dbInstance
      .Select_Trip([params.id])
      .then(trip => {
        res.status(200).send(trip);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
    // console.log(trip);
  },
  //Get all friends assigned to current trip
  Get_Friends_On_Trip: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { trip_id, user_id } = req.body;
    console.log("friends for trip!", trip_id, user_id);

    dbInstance
      .Get_Friends_On_Trip(trip_id, user_id)
      .then(friends => {
        res.status(200).send(friends);
      })
      .catch(err => err);
  },
  //Cancel selectedTrip
  Cancel_Trip: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { trip_id, user_id } = req.body;
    console.log("cancelling", trip_id, user_id);

    dbInstance
      .Cancel_Trip(trip_id, user_id)
      .then(res.send(200))
      .catch(err => err);
  },
  //Edit selectedTrip
  Edit_Trip: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { trip_id, city, state_country, depart_date, return_date } = req.body;
    console.log(trip_id, city, state_country, depart_date, return_date);

    dbInstance
      .Edit_Trip(trip_id, city, state_country, depart_date, return_date)
      .then(res.send(200))
      .catch(err => err);
  },
  //Join selectedTrip
  Join_Trip: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const {
      user_id,
      city,
      state_country,
      depart_date,
      return_date,
      trip_id
    } = req.body;
    console.log(
      user_id,
      city,
      state_country,
      depart_date,
      return_date,
      trip_id
    );

    dbInstance
      .Join_Trip(
        user_id,
        city,
        state_country,
        depart_date,
        return_date,
        trip_id
      )
      .then(res.send(200))
      .catch(err => err);
  },
  Search_Friends: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { display_name } = req.body;
    console.log(display_name);

    dbInstance
      .Search_Friends(display_name)
      .then(friends => {
        res.status(200).send(friends);
      })
      .catch(err => err);
  },
  Remove_Friend: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { user_id, friend_id } = req.body;
    console.log(user_id, friend_id);

    dbInstance
      .Remove_Friend(user_id, friend_id)
      .then(friend => {
        res.status(200).send(friend);
      })
      .catch(err => err);
  },
  Submit_Comment: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const {
      author_id,
      profile_image,
      comment_text,
      posted_date,
      display_name,
      trip_id
    } = req.body;
    console.log(
      author_id,
      profile_image,
      comment_text,
      posted_date,
      display_name,
      trip_id
    );

    dbInstance
      .Submit_Comment(
        author_id,
        profile_image,
        comment_text,
        posted_date,
        display_name,
        trip_id
      )
      .then(comment => {
        res.status(200).send(comment);
      })
      .catch(err => err);
  },
  Get_Trip_Comments: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;
    console.log("comments hit on server", params.id);

    dbInstance
      .Get_Trip_Comments(params.id)
      .then(comment => {
        res.status(200).send(comment);
      })
      .catch(err => err);
  },
  Delete_Comment: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;
    console.log("delete comment", params.id);

    dbInstance
      .Delete_Comment(params.id)
      .then(comment => {
        res.status(200).send(comment);
      })
      .catch(err => err);
  }
};
