async function getAddress(cep) {
    let msgErro = document.getElementById('msg-erro-cep');
    msgErro.innerHTML = "";

    try {
        let responseCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let objCEP = await responseCEP.json();

        if (objCEP.erro) {
            throw Error('CEP não existente!');
        }

        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');

        cidade.value = objCEP.localidade;
        logradouro.value = objCEP.logradouro;
        estado.value = objCEP.uf;

        return objCEP;
    } catch (erro) {
        msgErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
    }
}

let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => getAddress(cep.value));