var random, counter=10;
random = Math.trunc(Math.random()*100);

function detector()
{
    var guess = document.getElementById("text").value;
    guessn = Number(guess);


    document.getElementById("counter").textContent = "Remaining Attempt:"+--counter;

    if(guessn == random)
    {
        document.getElementById("answer").textContent = "Congrats! You found the number";
        document.getElementById("btn1").textContent = "Congrats!";
        document.getElementById("btn1").disabled = true;
        document.body.setAttribute("class","grid h-screen w-screen place-content-center bg-green-300");
    }
    else if(guessn > random)
    {
        document.getElementById("answer").textContent = "Lower";
    }
    else if(guessn < random)
    {
        document.getElementById("answer").textContent = "Upper";
    }
    else
    {
        document.getElementById("answer").textContent = "You have to enter a number";
        counter += 1;
        document.getElementById("counter").textContent = "Remaining Attempt:"+counter;
    }

    if(counter == 0 && guessn!=random)
    {
        document.body.setAttribute("class","grid h-screen w-screen place-content-center bg-red-300");
        document.getElementById('text').disabled = true;
        document.getElementById("create").textContent = "Try Again";
        document.getElementById("btn1").textContent = "You Failed"
        document.getElementById("btn1").disabled = true;
        document.getElementById("answer").textContent = "";

    }


    document.getElementById("text").value = "";
}

function randomnumber()
{
    random = Math.trunc(Math.random()*100);
    //document.getElementById("realthing").textContent = random;
    document.getElementById("counter").textContent = "Remaining Attempt: 10";
    document.getElementById("answer").textContent = "";
    document.getElementById("create").textContent = "Create New Number";
    document.getElementById("btn1").textContent = "Try";    document.getElementById("btn1").disabled = false;
    document.getElementById("text").disabled = false;
    counter = 10;
    document.body.setAttribute("class","grid h-screen w-screen place-content-center");
}

