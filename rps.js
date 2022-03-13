function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
humanChoice = yourChoice.id;
botChoice = numberToChoice(randToRpsInt());
console.log('Computer choice:', botChoice); 
results = decideWinner (humanChoice, botChoice);
console.log(results);
message = finalMessage (results);
console.log(message)
rspFrontEnd(yourChoice.id, botChoice, message);
}
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
    return ['rock','paper', 'scissors'] [number];
}
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock':0}
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}
function finalMessage([yourScore]) {
    if (yourScore=== 0) {
        return {'message': 'you lost!', 'color': 'red'};
} else if (yourScore=== 0.5){
    return {'message': 'you tied!', 'color': 'yellow'};
} else {
    return {'message': 'you won!', 'color': 'green'};
}
}
function rspFrontEnd (humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
        //'reset': document.getElementById('reset').src
}

document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();
//document.getElementById('remove').remove();



var humanDiv = document.createElement ('div');
var botDiv = document.createElement ('div');
var messageDiv = document.createElement ('div');
//var resetDiv = document.createElement ('div');


humanDiv.innerHTML = "<img src='" + imagesDatabase [humanImageChoice] + "' height=400 width=400 style='box-shadow: 0px 10px 50px rgba (37,50,277,1);'>"
messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding = 30px; '>" + finalMessage['message'] + "</h1>"
botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=400 width=400 style='box-shadow: 0px 10px 50px rgba (37,50,277,1);'>"
//resetDiv.innerHTML = 
document.getElementById('flexBoxDiv').appendChild(humanDiv);
document.getElementById('flexBoxDiv').appendChild(messageDiv);
document.getElementById('flexBoxDiv').appendChild(botDiv);
}
