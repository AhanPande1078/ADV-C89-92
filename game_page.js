player_1 = localStorage.getItem("player1");
player_2 = localStorage.getItem("player2");

document.getElementById("player1_name").innerHTML = player_1 + " :  ";
document.getElementById("player2_name").innerHTML = player_2 + " :  ";

player1_score =  0;
player2_score =  0;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn- " + player_1;
document.getElementById("player_answer").innerHTML = "Answer turn- " + player_2;

function send() 
{
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("The word in lower case is:" + word );

    character1 = word.charAt(1);
    console.log(character1);

    mid_position = Math.floor(word.length/2);
    character2 = word.charAt(mid_position);
    console.log(character2);

    last_position = word.length - 1;
    character3 = word.charAt(last_position);
    console.log(character3);
    
    remove_1 = word.replace(character1, "_");
    remove_2 = remove_1.replace(character2, "_");
    remove_3 = remove_2.replace(character3, "_");
    console.log(remove_3);

    question_word = "<h4 id='word_display'> Q. " + remove_3 + "</h4>";

    input_box = "<br> Answer: <input type='text' id='input_check_box'> ";
    
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button> ";

    row = question_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check() 
{
    //document.getElementById()
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case is " + answer);
    if(answer == word) {
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }

    }
    else {
        window.alert("Wrong Answer");
    }
    if(question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn-" + player_2;
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn-" + player_1;
    }
    if(answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn-" + player_2;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn-" + player_1;
    }
   document.getElementById("output").innerHTML = "";
}