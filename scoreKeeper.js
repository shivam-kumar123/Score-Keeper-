var score1 = document.getElementById("scoreOne");
var score2 = document.getElementById("scoreTwo");
var score = document.getElementById("score");
var player1 = document.getElementsByTagName("button")[0];
var player2 = document.getElementsByTagName("button")[1];
var reset = document.getElementsByTagName("button")[2];
var input = document.querySelector("input");
var h2 = document.querySelector("h2");
var p1score = 0;
var p2score = 0;
var finalScore = 0;
var check = true;
input.addEventListener("change",function()
{
    finalScore = Number(input.value);
    score.textContent = finalScore;
});
player1.addEventListener("click",function()
{
    if(check === true)
    {
        p1score++;
        if(p1score < finalScore)
        {
            score1.textContent = p1score;
        }
        else if(p1score === finalScore)
        {
            check = false;
            score1.textContent = p1score;
            score1.classList.add("winner");
            h2.textContent = "Player 1 is the WINNER";
        }
    }
});
player2.addEventListener("click",function()
{
    if(check === true)
    {
        p2score++;
        if(p2score < finalScore)
        {
            score2.textContent = p2score;
        }
        else if(p2score === finalScore)
        {
            check = false;
            score2.textContent = p2score;
            score2.classList.add("winner");
            h2.textContent = "Player 2 is the WINNER";
        }
    }
});
reset.addEventListener("click",function()
{
    check = true;
    input.value = 0;
    score1.classList.remove("winner");
    score2.classList.remove("winner");
    p1score = 0;
    p2score = 0;
    finalScore = 0;
    h2.textContent = "";
    score.textContent = finalScore;
    score1.textContent = p1score;
    score2.textContent = p2score;
});