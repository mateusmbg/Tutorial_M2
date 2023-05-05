BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "tb_info_gerais" (
	"id_info_gerais"	INTEGER,
	"nome_info_gerais"	TEXT NOT NULL,
	"cargo_info_gerais"	TEXT NOT NULL,
	"especialidade_gerais"	TEXT,
	"arquivo_foto_info_gerais"	BLOB,
	PRIMARY KEY("id_info_gerais" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "tb_info_formacao" (
	"id_info_formacao"	INTEGER,
	"curso_info_formacao"	TEXT NOT NULL,
	"periodo_info_formacao"	INTEGER,
	"descricao_do_curso_info_formacao"	TEXT,
	"id_info_gerais"	INTEGER,
	FOREIGN KEY("id_info_gerais") REFERENCES "tb_info_gerais"("id_info_gerais"),
	PRIMARY KEY("id_info_formacao" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "tb_info_experiencia" (
	"id_info_experiencia"	INTEGER,
	"data_info_experiecia"	INTEGER NOT NULL,
	"titulo_info_experiencia"	TEXT NOT NULL UNIQUE,
	"descricao_info_experiencia"	TEXT,
	"id_info_gerais"	INTEGER,
	FOREIGN KEY("id_info_gerais") REFERENCES "tb_info_gerais"("id_info_gerais"),
	PRIMARY KEY("id_info_experiencia" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "tb_info_competencias" (
	"id_info_competencias"	INTEGER,
	"icones_info_competencias"	BLOB,
	"id_info_gerais"	INTEGER,
	FOREIGN KEY("id_info_gerais") REFERENCES "tb_info_gerais"("id_info_gerais"),
	PRIMARY KEY("id_info_competencias" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "tb_contato" (
	"id_contato"	INTEGER,
	"instagram_contato"	TEXT UNIQUE,
	"linkedin_contato"	TEXT UNIQUE,
	"telefone_contato"	INTEGER UNIQUE,
	"email_contato"	TEXT UNIQUE,
	"id_info_gerais"	INTEGER,
	FOREIGN KEY("id_info_gerais") REFERENCES "tb_info_gerais"("id_info_gerais"),
	PRIMARY KEY("id_contato" AUTOINCREMENT)
);
COMMIT;
