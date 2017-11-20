module.exports = {
  //Get all trips assigned to current User

  Get_Trips: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

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
    console.log("this is the params", params);
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

    dbInstance
      .Add_Friend([user_id, friend_id])
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
  }
};
