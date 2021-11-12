angular.module('projetointegrado1', [])
    .controller('lista', ($scope, $http)=>{
        $scope.nome = "";
        $scope.cidade = "";
        $scope.statusbusca = {};
        $scope.statusbusca.vazio = false;
        $scope.statusbusca.erro = false;
        $http.get('https://projetointegrador1-api.herokuapp.com/').then((resp)=>{$scope.ongs=resp.data}, (error)=>{console.log("Erro ao buscar ongs")});
        $scope.search=()=>{
            $http.get(`https://projetointegrador1-api.herokuapp.com/search?nome=${$scope.nome}&cidade=${$scope.cidade}`).then((resp)=>{
                console.log($scope);
                if(resp.data.length == 0){
                    $scope.statusbusca.vazio = true;
                    $scope.statusbusca.erro = false;
                    $scope.ongs=[];
                    return;
                }
                $scope.ongs=resp.data;
                $scope.statusbusca.vazio = false;
                $scope.statusbusca.erro = false;
            }, (error)=>{
                console.log("Erro ao buscar ongs",error);
                $scope.statusbusca.erro = true;
                $scope.statusbusca.vazio = false;
            });
        }
    });