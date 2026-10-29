export class Produto{
    constructo(descricao, preco, peso){
        this.descricao = descricao;
        this.preco = preco;
        this.peso = peso;
    }

    validar(){
        if(!this.descricao || this.descricao.trim().length < 3){
            throw new Error("Descrição tem que conter pelo menos 3 caracteres");
        }

        if(Number(this.preco) <= 0){
            throw new Error("Preço deve ser maior que ZERO!");
        }
    }

    static validarId(id, nomeAlgumaCoisa){
        if(!Number.isInteger(id) || id <= 0){
            throw new Error("ID de" + nomeAlgumaCoisa + "deve ser um número inteiro positivo");
            
        }
    }
}