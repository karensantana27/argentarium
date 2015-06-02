angular.module("umbraco")
    .controller("My.TextboxController", 
    function ($scope, notificationsService) {
        notificationsService.error("Error", "Digite los valores correctos");          
    });
     