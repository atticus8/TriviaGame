

$(document).ready(function () {

    var score;
    var remainingTime;

    document.onload = function() {

        $("#content").hide();
        let score = 0;
        let remainingTime = 30;

    };

    $("#newGameButton").on("click", function(){

        countdown();
        $("#content").show();
    })

    function countdown() {
        setInterval(decrement, 1000);
        function decrement() {
            remainingTime--;
            $("#timeBox").append(remainingTime);
        }
    }







})