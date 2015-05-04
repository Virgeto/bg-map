test.controller('ShoppingCartCtrl', function($scope)  {
        $scope.add = true;

    $scope.items = [
        {name: "USD", quantity: "2500", rate: "1.78"},
      ];
 
    $scope.addItem = function(item) {
        $scope.items.push(item);
 $scope.item = {};
 console.log($scope.item);
    }
     
    $scope.totalPrice = function(){
        var total = 0;
         for(count=0;count<$scope.items.length;count++){
             total += $scope.items[count].Price*$scope.items[count].Quantity;
         }
         return total;
            }
   
    $scope.removeItem = function(index){
        $scope.items.splice(index,1);
    }
});