

var cartController=function  ($scope) {
	$scope.cart=[
		{
			id:10,
			name:"mac",
			quantity:1,
			price:6200
		},
		{
			id:1300,
			name:"iphone6",
			quantity:3,
			price:4200
		},
		{
			id:1500,
			name:"iphone4",
			quantity:6,
			price:3000
		},
		{
			id:1800,
			name:"iphone5",
			quantity:8,
			price:2000
		}
	];
	$scope.totalPrice=function  () {
		var total=0;
		angular.forEach($scope.cart,function  (item) {
			total+=item.quantity*item.price
		})
		return total;
	} 
	$scope.totalQuantity=function  () {
		var total=0;
		angular.forEach($scope.cart,function  (item) {
			total+=parseInt(item.quantity)
		})
		if (total) {
			return total;
		}else{return 0}
		
	} 
	$scope.remove=function (id) {
		var index=findIndex(id)
		if (index!==-1) {
			$scope.cart.splice(index,1)
		}
	}
	var findIndex=function  (id) {
		var index=-1;
		angular.forEach($scope.cart,function (item,key){
			if (item.id===id) {
				index=key;
				return
			}
		})
		return index;
	}
	$scope.add=function  (id) {
		var index=findIndex(id);
		if (index!==-1) {
			++$scope.cart[index].quantity
		}
	}
	$scope.reduce=function  (id) {
		var index=findIndex(id);
		var item=$scope.cart[index]
		if (index!==-1) {
			if (item.quantity>1) {
				--item.quantity
			}else{
				var confir=confirm('从购物车删除！')
				if (confir) {
					$scope.cart.splice(index,1)
				}
			}
		}
	}
	$scope.$watch('cart',function  (newValue,oldValue) {
		angular.forEach(newValue,function  (item,key) {
			if (item.quantity<1) {
				var confir=confirm('从购物车删除！')
				if (confir) {
					$scope.remove(item.id)
				}else{
					item.quantity=oldValue[key].quantity
				}
			}
		})
	},true)
		
}