var flag = 1;

function setMode(){
    var header = document.getElementById("header");
    var paragraph = document.getElementById("paragraph");
    var mode = document.getElementById("mode");

    console.log("Current flag: ", flag);

    switch(flag){
        case 0:
            document.body.style.backgroundColor = "rgb(255, 195, 0)";
            header.style.color = "black";
            paragraph.style.color = "black";
            mode.style.backgroundColor = "rgb(0, 53, 102)";
            mode.style.color = "white";
            flag = 1;
            console.log("Setting flag 1");
            break;
        case 1:
            document.body.style.backgroundColor = "rgb(0, 53, 102)";
            header.style.color = "white";
            paragraph.style.color = "white";
            mode.style.backgroundColor = "rgb(255, 195, 0)";
            mode.style.color = "black";
            flag = 0;
            console.log("Setting flag 0");
            break;
        default:
    };
}

document.getElementById("mode").addEventListener("click", setMode);