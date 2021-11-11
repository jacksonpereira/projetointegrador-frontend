angular.module('projetointegrado1', [])
    .controller('home', ($scope)=>{
        var ong = {
            nome:"AGNEE - Associação Global Nova Era",
            endereco:"Avenida Sete de Setembro",
            numero: "21",
            bairro:"Centro",
            cep:"09912010",
            cidade: "Diadema",
            estado:"SP",
            pais:"Brasil",
            telefone:"11951185012",
            email:"bawdklad@akwdamw.com",
            site:"www.awdawdaw.com",
            cnpj:"9999999999999111",
        };
        $scope.ongs = [];
        $scope.ongs.push(ong);
        $scope.ongs.push(ong);
        $scope.ongs.push(ong);
        // $http.get('localhost:8080/ong').then((resp)=>{}, (error)=>{});
    });