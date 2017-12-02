SELECT trip_users.user_id, trip_users.display_name, trip_users.profile_image, trips.city, trips.state_country, trips.depart_date, trips.return_date, trips.trip_id, friends.friend_id FROM trips
INNER JOIN trip_users ON (trip_users.user_id = trips.user_id)
INNER JOIN friends ON (trips.user_id = friends.friend_id)
WHERE trips.trip_id = $1 AND trip_users.user_id !=$2
