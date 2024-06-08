select * from partido;
insert into partido (codigo_equipo1,codigo_equipo2,fecha_encuentro,hora_encuentro)
values ('032','591','20/06/2024','20:00'),
('604','152','21/06/2024','18:30'),
('218','862','22/06/2024','14:30'),
('484','388','22/06/2024','19:30'),
('840','068','23/06/2024','16:30')

select * from pronostico
insert into pronostico(codigo_usuario,cod_equipo1,cod_equipo2,gol_equipo1,gol_equipo2,codigo_partido) values ('1723415418','032','591',1,2,4);
insert into pronostico(codigo_usuario,cod_equipo1,cod_equipo2,gol_equipo1,gol_equipo2,codigo_partido) values ('1091200756','604','152',0,0,5);
insert into pronostico(codigo_usuario,cod_equipo1,cod_equipo2,gol_equipo1,gol_equipo2,codigo_partido) values ('1719690487','218','862',3,2,6);