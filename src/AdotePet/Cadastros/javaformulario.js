function cadastrar() {
    const nome = document.getElementById('nome').value;
    const CEP = document.getElementById('CEP').value;
    const imovel = document.getElementById('imovel').value;
    const endereco = document.getElementById('endereco').value;
    const quintal = document.getElementById('quintal').value;
    const mudar = document.getElementById('mudar').value;
    const outros = document.getElementById('outros').value;
    const custos = document.getElementById('custos').value;
    
    // Lê o arquivo da imagem
    const fotoInput = document.getElementById('foto');
    const file = fotoInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = function() {
            const base64Image = reader.result;
            salvarFormulario(nome, CEP, imovel, endereco, quintal, mudar, outros, custos, base64Image);
        }
        reader.readAsDataURL(file);
    } else {
        salvarFormulario(nome, CEP, imovel, endereco, quintal, mudar, outros, custos, null);
    }
}

function salvarFormulario(nome, CEP, imovel, endereco, quintal, mudar, outros, custos, base64Image) {
    const dadosFormulario = {
        nome,
        CEP,
        imovel,
        endereco,
        quintal,
        mudar,
        outros,
        custos,
        foto: base64Image
    };

    localStorage.setItem('formularioTutor', JSON.stringify(dadosFormulario));
    
}

document.addEventListener('DOMContentLoaded', () => {
    const dadosSalvos = localStorage.getItem('formularioTutor');
    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        document.getElementById('nome').value = dados.nome;
        document.getElementById('CEP').value = dados.CEP;
        document.getElementById('imovel').value = dados.imovel;
        document.getElementById('endereco').value = dados.endereco;
        document.getElementById('quintal').value = dados.quintal;
        document.getElementById('mudar').value = dados.mudar;
        document.getElementById('outros').value = dados.outros;
        document.getElementById('custos').value = dados.custos;

        if (dados.foto) {
            const img = document.querySelector('.fotodeperfil img');
            img.src = dados.foto;
        }
    }
});

function convertToBase64(file, callback) {
    const reader = new FileReader();
    reader.onloadend = () => callback(reader.result);
    reader.readAsDataURL(file);
}

// Suponha que você tenha um input do tipo file no seu HTML
const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    convertToBase64(file, (base64Image) => {
        // Salvar a imagem em Base64 no localStorage
        localStorage.setItem('savedImage', base64Image);
        console.log('Imagem salva no localStorage.');
    });
});