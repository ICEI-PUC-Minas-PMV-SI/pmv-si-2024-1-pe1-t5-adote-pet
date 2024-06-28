function cadastrarPet() {

            var params = new URLSearchParams(window.location.search);
            var userId = params.get('userId'); // Obter userId da URL
        
            if (!userId) {
                alert("Erro: userId não encontrado na URL.");
                return;
            }
        
            // Gerar ID do pet combinando userId e um número aleatório
            var newId = userId + '-' + Math.floor(Math.random() * 1000);
        
            var inputFoto = document.getElementById("foto");
            var imagem = inputFoto.files[0]; // Acessando o arquivo de imagem
        
            if (imagem) {
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
                    descricao: descricao,
                    userId: userId // Incluir userId no objeto do pet
                };
        
                var petsCadastrados = JSON.parse(localStorage.getItem("pets")) || [];
                petsCadastrados.push(pet);
                localStorage.setItem("pets", JSON.stringify(petsCadastrados));
        
                document.getElementById("form_pet").reset();
                window.location.href = "meuspets.html";
                alert("Pet cadastrado com sucesso.");
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
    



