angular.module("myApp", [])
    .controller("MainCtrl", mainController);

function mainController() {
    var main = this;
    console.log("Poof");
    main.greeting = "Where us my modal?"
    main.showQuotes = false;
    main.newQuoteList = [];
    main.newQuote = {};

    main.authorFilter = {};

    var User = function(quote, author) {
        this.quote = quote;
        this.author = author;
    }

    main.addQuote = function() {
        main.newQuote = new User(main.quote, main.author);
        main.newQuoteList.push(main.newQuote);
        $("#myModal").modal("hide");
        main.newQuote = {};
        console.log(main.newQuoteList);
    }



}
