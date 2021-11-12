angular.module('projetointegrado1', [])
    .controller('cadastro', ($scope, $http, $window)=>{
        $scope.ong = {};
        $scope.cadastro = {};
        $scope.cadastro.sucesso = false;
        $scope.cadastro.erro = false;
        $scope.cadastro.incompleto = false
        $scope.limpar = () => {
            $scope.ong = null
            $scope.cadastro.sucesso = false;
            $scope.cadastro.erro = false;
            $scope.cadastro.incompleto = false
        }
        $scope.cancelar = () => {
            $window.location.href = 'index.html';
        }
        $scope.salvar = (ong) => {
            if(ong.nome=="" || ong.nome==null){
                $scope.cadastro.incompleto = true;
                $scope.cadastro.erro = false;
                $scope.cadastro.sucesso = false;
                return;
            }
            $http.post('https://projetointegrador1-api.herokuapp.com/', ong).then((resp)=>{
                $scope.cadastro.sucesso = true;
                $scope.cadastro.erro = false;
                $scope.cadastro.incompleto = false
            }, (error)=>{
                $scope.cadastro.erro = true;
                $scope.cadastro.sucesso = false;
                $scope.cadastro.incompleto = false;
            });
          };
    });