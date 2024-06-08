
DROP TABLE IF EXISTS pronostico;
DROP TABLE IF EXISTS equipo;
DROP TABLE IF EXISTS partido;
DROP TABLE IF EXISTS usuario;


create table equipo(
    codigo char(3) PRIMARY KEY not null,
	nombre varchar(100) not null
);
create table partido(
    codigo  serial not null,
	codigo_equipo1 char(3) not null,
	codigo_equipo2 char(3) not null,
	fecha_encuentro date not null,
	hora_encunentro time not null,
	foreign key (codigo_equipo1) references equipo(codigo),
	foreign key (codigo_equipo2) references equipo(codigo)
);

create table usuario(
	cedula char(10) primary key not null,
	nombre varchar(100) not null,
	apellido varchar(100) not null
);
create table pronostico(
    codigo  serial not null,
    codigo_usuario char(10),
	cod_equipo1 char(3),
	cod_equipo2 char(3),
	gol_equipo1 int,
	gol_equipo2 int,
	codigo_partido int,
	foreign key (cod_equipo1) references equipo(codigo),
	foreign key (cod_equipo2) references equipo(codigo),
	foreign key (codigo_usuario) references usuario(cedula),
	foreign key (codigo_partido) references partido(codigo)
	
);	