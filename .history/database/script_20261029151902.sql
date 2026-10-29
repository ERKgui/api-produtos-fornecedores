create database api_produtos_fornecedores_dt;

use api_produtos_fornecedores_dt;

create table fornecedor(
id_fornecedor int auto_increment primary key,
nome varchar(150) not null,
cnpj char(14) not null unique
);

create table produto(
id_produto int auto_increment primary key,
descricao varchar(150) not null,
preco decimal(10,2) not null,
peso decimal(10,3) not null,
fk_id_fornecedor int null,

constraint fk_produto_fornecedor
foreign key (fk_id_fornecedor)
references fornecedor (id_fornecedor)
on delete set null
on update cascade
); 

