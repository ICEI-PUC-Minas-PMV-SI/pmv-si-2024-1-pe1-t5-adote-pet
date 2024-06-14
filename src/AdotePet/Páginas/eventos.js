$(document).ready(function(){
    // Máscara para o campo de telefone
    $('telefone').mask('(00) 0000-0000');
})

function cadastrarEvento() {
    // Função pra gerar id aleatorio (Obrigada, Valente!)
    
        function generateUUID() { // Public Domain/MIT
            var d = new Date().getTime(); //Timestamp
            var d2 = (performance && performance.now && (performance.now() * 1000)) || 0; //Time in microseconds since page-load or 0 if unsupported
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16; //random number between 0 and 16
                if (d > 0) { //Use timestamp until depleted
                    r = (d + r) % 16 | 0;
                    d = Math.floor(d / 16);
                } else { //Use microseconds since page-load if supported
                    r = (d2 + r) % 16 | 0;
                    d2 = Math.floor(d2 / 16);
                }
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        }
        
        let newId = generateUUID();
        var inputFoto = document.getElementById("foto");
        var imagem = inputFoto.files[0]; // Acessando o arquivo de imagem
    
        // Verifica se uma imagem foi selecionada
        if (imagem) {
            // Cria um objeto URL para a imagem
            var imageUrl = URL.createObjectURL(imagem);

            var tituloevento = document.getElementById("tituloevento").value;
            var endereco = document.getElementById("endereco").value;
            var telefone = document.getElementById("telefone").value;
            var email = document.getElementById("email").value;
            var datadoevento = document.getElementById("datadoevento").value;
            var descricaodoevento = document.getElementById("descricaodoevento").value;

            var eventos = {
                id: newId,
                imagem: imageUrl,
                tituloevento: tituloevento,
                endereco: endereco,
                telefone: telefone,
                email: email,
                datadoevento: datadoevento,
                descricaodoevento: descricaodoevento,
            };
            
            var eventosCadastrados = JSON.parse(localStorage.getItem("eventos")) || [];
            eventosCadastrados.push(eventos);
            localStorage.setItem("eventos", JSON.stringify(eventosCadastrados));
    
            document.getElementById("form_evento").reset();
            alert("Evento cadastrado com sucesso!");
            window.location.href = "seuseventos.html"; 
            

        } else {
            alert("Selecione uma imagem para cadastrar o evento.");
        }
}

function atualizaEvento(eventoId) {

    var endereco = document.getElementById("endereco").value;
    var tituloevento = document.getElementById("tituloevento").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value || "";
    var datadoevento = document.getElementById("datadoevento").value;
    var descricaodoevento = document.getElementById("descricaodoevento").value;

    // Obter os eventos cadastrados do armazenamento local
    var eventosCadastrados = JSON.parse(localStorage.getItem("eventos")) || [];

    // Encontrar o evento com o ID correspondente
    var eventoIndex = eventosCadastrados.findIndex(eventos => evento.id === eventoId);

    // Verificar se o evento foi encontrado
    if (eventoIndex !== -1) {
        // Atualizar as informações do evento no array de eventos cadastrados
        eventosCadastrados[eventoIndex] = {
            id: eventoId,
            tituloevento: tituloevento,
            endereco: endereco,
            telefone: telefone,
            email: email,
            datadoevento: datadoevento,
            descricaodoevento: descricaodoevento,
        };

        // Salvar o array atualizado de eventos no armazenamento local
        localStorage.setItem("eventos", JSON.stringify(eventosCadastrados));

        // Limpar o formulário após a atualização
        document.getElementsByClassName("botao_editar").reset();
        window.location.href = "seuseventos.html"; 
        alert("Evento atualizado com sucesso.");
    } else {
        alert("Evento não encontrado.");
    }
}