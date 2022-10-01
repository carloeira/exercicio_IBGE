fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then( (resposta) => resposta.json() )
    .then( (regioes) => {
        regioes.forEach( (cadaRegiao) => {
            document.getElementById('regiao').innerHTML +=  `
                <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option> 
            `;
        } );
    } );

function procuraEstado() {
    let idEstado = document.getElementById('regiao').value
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${idEstado}/estados`)
        .then( (resposta) => resposta.json() )
        .then( (estados) => {
            estados.forEach( (cadaEstado) => {
                document.getElementById('estado').innerHTML +=  `
                    <option value="${cadaEstado.id}">${cadaEstado.nome}</option> 
                `;
            } );
        } );

}



