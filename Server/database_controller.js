module.exports = {
  Get_Trips: (req, res, next) => {
    const dbInstance = req.app.get("db");
    console.log(dbInstance);
    const { user_id } = req.body;

    dbInstance
      .Get_Trips(user_id)
      .then(trips => {
        res.status(200).send(trips);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
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
  Add_Trip: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { user_id, location, depart_date, return_date } = req.body;
    console.log("user_id", user_id);

    dbInstance
      .Add_Trip([user_id, location, depart_date, return_date])
      .then(trips => {
        res.status(200).send("New Trip Added");
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  Get_Friends: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { user_id } = req.body;

    dbInstance
      .Get_Friends([user_id])
      .then(friends => {
        res.status(200).send(response);
      })
      .catch(console.log);
  },
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
  Add_Friend_To_Trip: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { friend_id, trip_id } = req.body;

    dbInstance
      .Add_Friend_To_Trip([
        user_id,
        location,
        depart_date,
        return_date,
        trip_id
      ])
      .then(trips => {
        res.status(200).send("Friend Added To Trip");
      })
      .catch(console.log);
  }
};
