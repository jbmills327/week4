angular.module("myApp", [])
    .controller("MainCtrl", mainController);

function mainController() {
    var main = this;
    main.greeting = "Making sure this is working.";
    main.userList = [];
    main.newUser = {
        "name": ""
    };
    main.quoteList = [];
    main.newQuote = {
        "quote": "",
        "author": ""
    };

    main.addUser = function() {
        // Pushes new User to the userList array
        main.userList.push(main.newUser);

        // resets the object to ready for the next user
        main.newUser = {};

        // Manually resets the modal
        $("#myModal").modal("hide");
    }


}
