player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_q").innerHTML="Question turn = " + player1_name;
document.getElementById("player_a").innerHTML="Answer turn = " + player2_name;

function send()
{
   get_number1=document.getElementById("number1").value;
   get_number2=document.getElementById("number2").value;
   get_number=document.getElementById("number1").innerHTML= get_number1 + " x " + get_number2;
   actual_answer = parseInt(get_number1) * parseInt(get_number2);
   console.log("Numbers = " + get_number);

   question_number="<h4 id='number_display'>Q. " + get_number + "</h4>";
   input_box="<br>Answer : <input type='number' id='input_check_box'>";
   check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

   row=question_number + input_box + check_button;
   document.getElementById("output").innerHTML=row;
   document.getElementById("number1").value="";
   document.getElementById("number2").value="";
}

question_turn="player1_name";
answer_turn="player2_name";

function check()
{
   get_answer=document.getElementById("input_check_box").value;
   if(get_answer == actual_answer)
   {
      if(answer_turn == "player1_name")
      {
          player1_score=player1_score + 1;
          document.getElementById("player1_score").innerHTML=player1_score;
      }
      else
      {
         player2_score=player2_score + 1
         document.getElementById("player2_score").innerHTML=player2_score;
      }
   }

    if(question_turn == "player1_name")
    {
        question_turn="player2_name"
       document.getElementById("player_q").innerHTML= "Question turn : " + player2_name;
    }
    else
    {
       question_turn="player1_name"
      document.getElementById("player_q").innerHTML= "Question turn : " + player1_name;
    }

    if(answer_turn == "player1_name")
    {
       answer_turn="player2_name"
       document.getElementById("player_a").innerHTML= "Answer turn : " + player2_name;
    }
    else
    {
       answer_turn="player1_name"
       document.getElementById("player_a").innerHTML= "Answer turn : " + player1_name;
    }

     document.getElementById("output").innerHTML="";
}