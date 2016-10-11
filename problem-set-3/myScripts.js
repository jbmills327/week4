angular.module("myApp", [])
    .controller("MainCtrl", mainController);

function mainController() {
    var main = this;

    // THis function will revers the provided word and then return true if it is a palindrome
    main.palindrome = function(word) {
        // Split the string and store in an array
        main.newArray = word.split("");
        console.log(main.newArray);
        // Use the built in method to reverse the array
        main.backwards = main.newArray.reverse();
        console.log(main.backwards);
        // Join the array to make a string of the new backwards word
        main.newWord = main.backwards.join();
        // This will get rid of the commas that will be inserted when the array is joined
        main.anotherWord = main.newWord.replace(/,/g, "");
        console.log(main.anotherWord);
        // This is the if statement to determine if the reverse word is a palindrome
        if (word == main.anotherWord) {
            return true;
        } else {
            return false;
        }
    }

    console.log(main.palindrome("tomato"));



    // This function will take an array of numbers and add dashes
    main.dashInsert = function(num) {
        main.anotherArray = ("" + num).split("");
        main.pleaseWork = [];
        main.stillNotWorking = [];
        console.log(main.anotherArray.length);
        for (var i = 0; i < main.anotherArray.length; i++) {
            if (main.anotherArray[i] % 2 != 0 && i < main.anotherArray.length - 1) {
                main.pleaseWork.push(main.anotherArray[i] + " - ");
            } else {
                main.pleaseWork.push(main.anotherArray[i]);
            }

        }
        main.someMoreWords = main.pleaseWork.join().replace(/,/g, "");
        main.stillNotWorking = main.someMoreWords.split(" ");
        main.moreWordShit = main.stillNotWorking.join().replace(/,/g, "");
        return main.moreWordShit;
    }



    console.log(main.dashInsert(56291));
}
