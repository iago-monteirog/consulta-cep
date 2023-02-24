async function getAddress(cep) {
    try {
        const consultCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        const convertedCep = await consultCep.json();

        if (convertedCep.erro) {
            throw Error('CEP não existente.')
        }

        return convertedCep;

    } catch (error) {
        console.log(error);
    }
}