-- Find the first and last name of every customer who rented 'Magic Mallrats'.

select "c"."firstName",
       "c"."lastName",
       "f". "title" as "rented movie title"
from "customers" as "c"
join "rentals" using ("customerId")
join "inventory" using ("inventoryId")
join "films" as "f" using ("filmId")
where "title" = 'Magic Mallrats';
