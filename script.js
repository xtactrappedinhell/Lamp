let B_switch = false;
document.getElementById("button").addEventListener("click", OnOff);

function OnOff()
{
    let body = document.body;
    let button = document.getElementById("button")
    let lampImage = document.querySelector(".Light img");
    let warning = document.querySelector(".Warning");

    if(!B_switch)
    {
        button.innerHTML = "Turn Off"
        warning.innerHTML = "WHAT HAVE YOU DONE?!";
        lampImage.src = "bulb-on.png";
        body.style.backgroundImage = "url(larry.jpeg)";
        B_switch = true;
    }
    else
    {
        button.innerHTML = "Turn On"
        warning.innerHTML = "It's too late...";
        lampImage.src = "bulb-off.png";
        body.style.backgroundImage = "";
        body.style.backgroundColor = "#333333";
        B_switch = false;
    }

}