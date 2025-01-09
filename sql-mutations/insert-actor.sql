-- select *
-- from "actors";

insert into "actors" ("firstName","lastName")
values ('Mikey', 'Madison')
returning *;
