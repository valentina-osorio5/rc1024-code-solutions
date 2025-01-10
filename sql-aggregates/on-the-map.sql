select "c"."name" as "country",
       count(*) as "cities per country"
from "countries" as "c"
join "cities" using ("countryId")
group by "c"."name";
