async function getAddress(cep) {
    const errorMessage = document.getElementById('erro');

    errorMessage.innerHTML += '';
    try {
        const consultCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        const convertedCep = await consultCep.json();

        if (convertedCep.erro) {
            throw Error('CEP não existente.')
        }

        const cidade = document.getElementById('cidade');
        const logradouro = document.getElementById('endereco');
        const estado = document.getElementById('estado');
        const bairro = document.getElementById('bairro');

        cidade.value = convertedCep.localidade;
        logradouro.value = convertedCep.logradouro;
        estado.value = convertedCep.uf;
        bairro.value = convertedCep.bairro;

        return convertedCep;

    } catch (error) {
        console.log(error);
        errorMessage.innerHTML += `<p style="margin-top: 5px;">CEP inválido. Tente novamente</p>`;
    }
}

const cep = document.getElementById('cep');
cep.addEventListener('focusout', () =>  getAddress(cep.value));