const wording = ["Lorem ipsum dolor, sit amet consectetur adipisicing elit.", "Ullam, vel, cum ipsa, porro similique sapiente odio", "molestias esse quibusdam sequi cumque voluptatem possimus?", "Voluptatibus tenetur nulla iste totam doloribus", "dolorum eveniet aliquam eligendi optio, nesciunt mollitia", ", blanditiis corrupti praesentium. Alias?"];
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");
let startTime,endTime;

button.addEventListener("click",function(){
    console.log(this.innerText);
    if(this.innerText == "Start"){
        playText.disabled = false;
        playGame();
    }
    else if(this.innerText == "Done"){
        playText.disabled = true;
        button.innerText = "Start";
        endPlay();
    }
    
});

function compareWords(str1, str2){
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let cnt = 0;
    word1.forEach(function(item,index){
        
        if(item == word2[index]){
            cnt++;
        }
    });
    return (cnt + " correct out of " + word1.length + " words");
}


function playGame(){
    let randomNum = Math.floor(Math.random()*wording.length);
    message.innerText = wording[randomNum];
    let date = new Date();
    startTime = date.getTime();
    button.innerText = "Done";
}

function endPlay(){
    let date= new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    let str1 = playText.value;
    let str = playText.value.split(' ').length;
    let speed = Math.round((str/totalTime)*60);

    let finalMessage = "Your speed is: " + speed + " wpm";
    finalMessage += "<br>" + compareWords(message.innerText, str1);
    message.innerHTML = finalMessage;
    playText.value = "";
}

