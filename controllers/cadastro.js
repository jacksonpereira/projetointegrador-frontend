angular.module('projetointegrado1', [$scope,$http])
    .controller('cadastro', ($scope)=>{
        $http.get('localhost:8080/ong').then((resp)=>{}, (error)=>{});
    });