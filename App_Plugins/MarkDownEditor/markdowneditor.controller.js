angular.module("umbraco")
    .controller("My.MarkdownEditorController", 
    function ($scope, notificationsService) {
        notificationsService.error("Error", "Digite los valores correctos");          
    });
     
      