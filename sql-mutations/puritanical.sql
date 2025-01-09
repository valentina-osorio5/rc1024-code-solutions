delete
from "films"
where not "rating" = 'G'
returning *;
