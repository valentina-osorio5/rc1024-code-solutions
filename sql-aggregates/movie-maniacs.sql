-- this is not quite right

select "c"."firstName", "c"."lastName","c"."customerId",
        sum("amount") as "total paid"
from "customers" as "c"
join "rentals" using ("customerId")
join "payments" as "p" using ("customerId")
group by "c"."customerId"
order by "p"."amount" desc;
