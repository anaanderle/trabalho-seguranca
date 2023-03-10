DROP TABLE IF EXISTS usuario CASCADE;
CREATE TABLE IF NOT EXISTS usuario(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(13) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(128) NOT NULL,
    imagem_url VARCHAR(512),
    criado_em DATE NOT NULL,
    atualizado_em DATE NOT NULL,
	ativo BOOLEAN DEFAULT TRUE,

    CONSTRAINT pk_usuario PRIMARY KEY (id),
    CONSTRAINT uk_usuario_telefone UNIQUE (telefone),
    CONSTRAINT uk_usuario_email UNIQUE (email)
);

DROP TABLE IF EXISTS permissao CASCADE;
CREATE TABLE IF NOT EXISTS permissao(
    id BIGINT NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    nome VARCHAR(100) NOT NULL,
    usuario_id BIGINT NOT NULL,

    CONSTRAINT pk_permissao PRIMARY KEY (id),
    CONSTRAINT uk_permissao UNIQUE (nome, usuario_id)
);
