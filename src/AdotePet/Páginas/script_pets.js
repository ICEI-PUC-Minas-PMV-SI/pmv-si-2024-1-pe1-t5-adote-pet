function cadastrarPet() {
    // função pra gerar id aleatorio (n faço ideia de como funciona copiei na cara dura)
    
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
            
            var especie = document.getElementById("txt_especie").value;
            var nome = document.getElementById("txt_nome").value;
            var raca = document.getElementById("txt_raca").value || "";
            var dt_nasc = document.getElementById("txt_dt_nasc").value;
            var castrado = document.querySelector('input[name="txt_castrado"]:checked').value;
            var sexo = document.querySelector('input[name="txt_sexo"]:checked').value;
            var vacinado = document.querySelector('input[name="txt_vacinado"]:checked').value;
            var deficiencia = document.querySelector('input[name="txt_deficiencia"]:checked').value;
            var localizacao = document.getElementById("txt_localizacao").value;
            var descricao = document.getElementById("txt_descricao").value;
            
            var pet = {
                id: newId,
                imagem: imageUrl, 
                especie: especie,
                nome: nome,
                raca: raca,
                dt_nasc: dt_nasc,
                castrado: castrado,
                sexo: sexo,
                vacinado: vacinado,
                deficiencia: deficiencia,
                localizacao: localizacao,
                descricao: descricao
            };
    
            var petsCadastrados = JSON.parse(localStorage.getItem("pets")) || [];
            petsCadastrados.push(pet);
            localStorage.setItem("pets", JSON.stringify(petsCadastrados));
    
            document.getElementById("form_pet").reset();
            window.location.href = "meuspets.html"; 
            alert("Pet cadastrado");
        } else {
            alert("Selecione uma imagem para cadastrar o pet.");
        }
    }
    
    function atualizaPet(petId) {

        var especie = document.getElementById("especie").value;
        var nome = document.getElementById("nome_pet").value;
        var raca = document.getElementById("raca").value || "";
        var dt_nasc = document.getElementById("data_nascimento").value;
        var castrado = document.querySelector('input[name="castrado"]:checked').value;
        var sexo = document.querySelector('input[name="sexo"]:checked').value;
        var vacinado = document.querySelector('input[name="vacinado"]:checked').value;
        var deficiencia = document.querySelector('input[name="deficiencia"]:checked').value;
        var localizacao = document.getElementById("localizacao").value;
        var descricao = document.getElementById("descricao_pet").value;
    
        // Obter os pets cadastrados do armazenamento local
        var petsCadastrados = JSON.parse(localStorage.getItem("pets")) || [];
    
        // Encontrar o pet com o ID correspondente
        var petIndex = petsCadastrados.findIndex(pet => pet.id === petId);
    
        // Verificar se o pet foi encontrado
        if (petIndex !== -1) {
            // Atualizar as informações do pet no array de pets cadastrados
            petsCadastrados[petIndex] = {
                id: petId,
                especie: especie,
                nome: nome,
                raca: raca,
                dt_nasc: dt_nasc,
                castrado: castrado,
                sexo: sexo,
                vacinado: vacinado,
                deficiencia: deficiencia,
                localizacao: localizacao,
                descricao: descricao
            };
    
            // Salvar o array atualizado de pets no armazenamento local
            localStorage.setItem("pets", JSON.stringify(petsCadastrados));
    
            // Limpar o formulário após a atualização
            document.getElementById("editarpet").reset();
            window.location.href = "meuspets.html"; 
            alert("Pet atualizado com sucesso.");
        } else {
            alert("Pet não encontrado.");
        }
    }
    



