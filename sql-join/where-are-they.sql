select "line1",
      "c"."name" as "city",
      "district",
      "countries"."name" as "country"
from "addresses"
join "cities" as "c" using ("cityId")
join "countries" using ("countryId");
