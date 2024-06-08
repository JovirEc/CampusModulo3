

DROP TABLE IF EXISTS equipo CASCADE;
DROP TABLE IF EXISTS partido CASCADE;
DROP TABLE IF EXISTS usuario CASCADE;
DROP TABLE IF EXISTS pronostico CASCADE;

create table equipo(
    codigo char(3) PRIMARY KEY not null,
	nombre varchar(100) not null
);
create table partido(
    codigo  serial PRIMARY KEY not null,
	codigo_equipo1 char(3) not null,
	codigo_equipo2 char(3) not null,
	fecha_encuentro date not null,
	hora_encuentro time not null,
	foreign key (codigo_equipo1) references equipo(codigo),
	foreign key (codigo_equipo2) references equipo(codigo) 
);

create table usuario(
	cedula char(10) primary key not null,
	nombre varchar(100) not null,
	apellido varchar(100) not null
);
create table pronostico(
    codigo  serial PRIMARY KEY not null,
    codigo_usuario char(10),
	cod_equipo1 char(3),
	cod_equipo2 char(3),
	gol_equipo1 int,
	gol_equipo2 int,
	codigo_partido int,
	foreign key (cod_equipo1) references equipo(codigo) ,
	foreign key (cod_equipo2) references equipo(codigo) ,
	foreign key (codigo_usuario) references usuario(cedula),
	foreign key (codigo_partido) references partido(codigo)
	
);	

insert into equipo (nombre,codigo) values ('Argentina','032');
insert into equipo (nombre,codigo) values ('Perú','604');
insert into equipo (nombre,codigo) values ('Chile','152');	
insert into equipo (nombre,codigo) values ('Canadá','124');	
insert into equipo (nombre,codigo) values ('México','484');
insert into equipo (nombre,codigo) values ('Ecuador','218');
insert into equipo (nombre,codigo) values ('Venezuela','862');
insert into equipo (nombre,codigo) values ('Jamaica','388');
insert into equipo (nombre,codigo) values ('Estados Unidos','840');
insert into equipo (nombre,codigo) values ('Uruguay','858');
insert into equipo (nombre,codigo) values ('Panamá','591');
insert into equipo (nombre,codigo) values ('Bolivia','068');
insert into equipo (nombre,codigo) values ('Brasil','076');
insert into equipo (nombre,codigo) values ('Colombia','170');
insert into equipo (nombre,codigo) values ('Paraguay','600');
insert into equipo (nombre,codigo) values ('Costa Rica','188');

insert into usuario values ('1723415418','CARLOS PAUL','FLORES MUÑOZ');
insert into usuario values ('1091200756','CONSTANTE FLORENTINO','BETANCOURT JIMENEZ ');
insert into usuario values ('1719690487','SMARIA BELEN','BETANCOURT LOVATO');

insert into pronostico(codigo_usuario,cod_equipo1,cod_equipo2,gol_equipo1,gol_equipo2,codigo_partido) values ('1723415418','032','591',1,2,1);
insert into pronostico(codigo_usuario,cod_equipo1,cod_equipo2,gol_equipo1,gol_equipo2,codigo_partido) values ('1091200756','604','152',0,0,2);
insert into pronostico(codigo_usuario,cod_equipo1,cod_equipo2,gol_equipo1,gol_equipo2,codigo_partido) values ('1719690487','218','862',3,2,3);