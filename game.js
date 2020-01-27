
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;

function nextSequence() {
    

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


    playSound(randomChosenColor);
    level++;
    $("h1").text(" Level "+ level);
    
}

// nextSequence();

$(".btn").click(function(){
    userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);

})

function playSound(name ){
    var audio = new Audio("sounds/" + name + ".mp3");

    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed")
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100)
}

$("h1").text("Press A Key to Start");

$(document).keydown(function(event){
    nextSequence();
});

