export class Fornecedor{
    constructor(nome, cnpj){
        this.nome = nome;
        this.cnpj = cnpj;
    }

    validar(){
        if(!this.nome || this.nome.trim().length < 3){
            throw new Error("Nome deve ter pelo menos 3 caracteres");
        }

        if (!this.cnpj || this.cnpj.length !== 14){
            throw new Error("CNPJ deve conter 14 caracteres");
        }
    }

    static validarID(id){
        if(!Number.isInteger(id) || id <= 0){
            throw new Error("ID de fornecedor deve ser um número inteiro positivo");
            
        }
    }
}