UPDATE trips
SET city = $2, state_country = $3, depart_date = $4, return_date = $5
WHERE trip_id = $1 and user_id = $2;
