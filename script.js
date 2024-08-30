// Classe base Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

// Função para capturar dados do formulário e criar instâncias das classes
function cadastrarFuncionario() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cargo = document.getElementById("cargo").value;
    const departamento = document.getElementById("departamento").value;
    const linguagem = document.getElementById("linguagem").value;

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Limpa a saída anterior

    try {
        // Verificação se todos os campos obrigatórios estão preenchidos
        if (!nome || !idade || !cargo) {
            throw new Error("Por favor, preencha os campos nome, idade e cargo.");
        }

        let funcionario;

        if (cargo === "Gerente") {
            if (!departamento) {
                throw new Error("Por favor, preencha o campo departamento para o cargo de Gerente.");
            }
            funcionario = new Gerente(nome, idade, cargo, departamento);
            outputDiv.innerHTML += `<p>${funcionario.seApresentar()}</p>`;
            outputDiv.innerHTML += `<p>${funcionario.trabalhar()}</p>`;
            outputDiv.innerHTML += `<p>${funcionario.gerenciar()}</p>`;
        } else if (cargo === "Desenvolvedor") {
            if (!linguagem) {
                throw new Error("Por favor, preencha o campo linguagem para o cargo de Desenvolvedor.");
            }
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
            outputDiv.innerHTML += `<p>${funcionario.seApresentar()}</p>`;
            outputDiv.innerHTML += `<p>${funcionario.trabalhar()}</p>`;
            outputDiv.innerHTML += `<p>${funcionario.programar()}</p>`;
        } else {
            // Se for um funcionário comum, sem especificidades
            funcionario = new Funcionario(nome, idade, cargo);
            outputDiv.innerHTML += `<p>${funcionario.seApresentar()}</p>`;
            outputDiv.innerHTML += `<p>${funcionario.trabalhar()}</p>`;
        }

    } catch (error) {
        // Exibe o erro no console e na página
        console.error("Erro:", error.message);
        outputDiv.innerHTML = `<p style="color:red;">Erro: ${error.message}</p>`;
    }
}
