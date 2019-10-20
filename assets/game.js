$(document).ready(function () {
    $(".run").hide();
    $(".timer").hide()

    questions = {
        q1: "When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?",
        q2: "Which Jamaican runner is an 11-time world champion and holds the record in the 100 and 200-meter race?",
        q3: "Which boxer was known as “The Greatest” and “The People’s Champion”? ",
        q4: "What country won the very first FIFA World Cup in 1930?",
        q5: "How many soccer players should each team have on the field at the start of each match?",

    };

    answers = {
        q1: "Six",
        q2: "Usain Bolt",
        q3: "Muhammad Ali",
        q4: "Uruguay",
        q5: "11",
    };

    options = {
        q1: ["Five", "Six", "Two", "Eight"],
        q2: ["Yohan Blake", "Asafa Powell", "Usain Bolt", "Nesta Carter"],
        q3: ["Mike Tyson", "Muhammad Ali", "George Foreman", "Floyd Mayweather"],
        q4: ["Uruguay", "USA", "France", "Belgium"],
        q5: ["22", "10", "9", "11"],
    }







$("#startbutton").on("click", function () {
    $(".row").hide();
    startGame();
    
    var correctAns = 0;
    var wrongAns = 0;
    var unAns = 0;    
    var set = 0;
    var timer = 10;
    var timerId;
  

    function startGame() {
        correctAns = 0;
        wrongAns = 0;
        unAns = 0;
        set = 0;

        $(".run").show();
        $(".timer").show();
        nextQuestion();
        run();
        
    }
    // to manipulate the Dom for question and the option
    function nextQuestion() {
        stop();
        // var timing;
        // timing =setInterval(click,1000);
        var questionContent = Object.values(questions)[set];
        $(".question").text(questionContent);
        

        var optionsContent = Object.values(options)[set];
        $.each(optionsContent, function (index, key) {
            var test = $("<h5>")
            test.attr("class", "okay")
            test.text(key);
            $(".options").append(test);
            
        });
        

        
        var number = set + 1
        $(".result").text("Question "+number+ " of 5");
        
        if(set===Object.keys(questions).length) {
            final();
        }  
          
    }



    
    

    $(document).on("click", ".okay", function () {
        set++;
        stop()
        console.log(this);
        var currentAnswer = Object.values(answers)[set-1];
        console.log(currentAnswer);
        if ($(this).text() === currentAnswer) {
            correctAns++;
            $(".options").html("");
            nextQuestion();
            console.log(this);
           
            
            



        }
        else if ($(this).text() !== currentAnswer) {
            wrongAns++;
            $(".options").html("");
            nextQuestion();
            
            

        }
    })

    function run() {
        timer = 10;
        clearInterval(timerId);
        timerID = setInterval(decrement, 1000);
      }


      function decrement() {
        timer--;
        $(".timer").html("<h2>Remaining time: " + timer + "</h2>");
        if (timer === 0) {
            stop();
            unAns++;
            set++;
            $(".options").html("");
            nextQuestion()
            alert("Time Up!");
            }

        }
        
      
      
      function stop() {
        clearInterval(timerId);
      } 

    function final(){
        $(".timer").hide();
        $(".run").hide();
        var finalResult = $("<p>");
        finalResult.attr("class", "fresult");
        $(".game").append(finalResult);
        finalResult.append("<p>Right Answers: " + correctAns + "</p>");
        finalResult.append("<p>Wrong Answers: " + wrongAns +"</p>");
        finalResult.append("<p>Not Answered: " + unAns +"</p>");
        finalResult.append("<button>Play Again!!</button>")
        }

});


});
