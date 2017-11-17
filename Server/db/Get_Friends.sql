SELECT *
FROM trip_users
  JOIN friends
    ON trip_users.user_id = friends.friend_id;
