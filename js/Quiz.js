function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;
        if (question1 == "Yes"){
        correct++;
    }
        if (question1 == "No"){
        correct++;
    }
        if (question2 == "C) It's a kind of illness. Treatment is needed."){
        correct++;
    }
        if (question3 == "A) Right now"){
        correct++;
    }
        if (question3 == "B) Three days"){
        correct++;
    }
        if (question3 == "C) A week"){
        correct++;
    }
        if (question3 == "D) Two weeks"){
        correct++;
    }
        if (question4 == "A) Listening to them and giving some suggestions"){
        correct++;
    }
        if (question4 == "B) Telling their parents or their guardians"){
        correct++;
    }
        if (question4 == "C) Contacting a certified therapist or psychiatrist"){
        correct++;
    }
    
    var message = ["Great Job!", "Almost there!", "That's closed!", "Thinking carefully!"];
    
    var range;
        if (correct < 1){
            range = 3;
        }
        if (correct > 0 && correct < 3){
            range = 2;
        }
        if (correct > 2 && correct < 4){
            range = 1;
        }
        if (correct > 3){
            range = 0;
        }
    
    document.getElementById("after_submit").style.visibility= "visible";
    
    document.getElementById("message").innerHTML = message[range];
    document.getElementById("number_correct").innerHTML ="You got "+correct+" correct. The correct answers are 1.Yes/No 2.C 3.A/B/C/D 4.A/B/C";
}