-- Use two joins to select the "firstName" and "lastName" of all actors that
-- starred in the film 'Jersey Sassy'. There is a special table in the database
-- named "castMembers" for this purpose. Notice how the many-to-many relationship
-- between films and actors is modeled in the "castMembers" table.

select "a"."firstName",
       "a"."lastName",
       "f"."title"
from "actors" as "a"
join "castMembers" using ("actorId")
join "films" as "f" using ("filmId")
where "title" = 'Jersey Sassy';
