UPDATE trip_users
SET profile_image = $2
WHERE user_id = $1;