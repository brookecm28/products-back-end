UPDATE product
SET desciption = $2
WHERE product_id = $1
returning *;