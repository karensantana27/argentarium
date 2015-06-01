angular.module("umbraco")
    .controller("My.MarkdownEditorController",
      function ($scope, notificationsService) {
        notificationsService.success("Success", "Speaker has been deleted");          
    });