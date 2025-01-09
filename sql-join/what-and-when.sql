-- Use two joins to select the "releaseYear" and "genres"."name" of the
-- film with the "title" 'Boogie Amelie'. There is a special table in the
-- database named "filmGenre" for this purpose.

select "f"."title" as "film title",
       "f"."releaseYear",
       "g"."name" as "genre"
from "films" as "f"
join "filmGenre" using ("filmId")
join "genres" as "g" using ("genreId")
where "title" = 'Boogie Amelie';
