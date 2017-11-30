SELECT *
FROM trip_users
  JOIN friends
    ON trip_users.user_id = friends.friend_id AND friends.user_id = $1;
