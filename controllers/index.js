angular.module('projetointegrado1', [])
    .controller('index', ($scope, $http)=>{
        $http.get('https://projetointegrador1-api.herokuapp.com/').then((resp)=>{$scope.ongs=resp.data}, (error)=>{console.log("Erro ao buscar ongs")});
    });