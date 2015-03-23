app.controller('FriendsController', ['$scope', function ($scope) {

    //create array of friends
    $scope.friends = [];
    $scope.friend = {};
    //add a friend
    $scope.AddFriend = function(){
			
        var newFriend = {
            UserName: $scope.UserName,
            FirstName: $scope.FirstName,
            LastName: $scope.LastName,
            NickName: $scope.NickName
        }
        return $scope.vacation;
        $scope.Friends.push(newFriend);
    };
    //edit friend's first and last name
    $scope.EditFriend = function(index){
        $scope.Friends[index].NickName = $scope.Friends[index].NickName;
    };
    //delete a friend
    $scope.DeleteFriend = function(index){
        var index = $scope.Friend.indexOf(FriendUserId);
        $scope.Friends.splice(index, 1);
    };
    
}]);
