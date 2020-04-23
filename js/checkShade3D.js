function checkShade3D () {
    var user_agent = window.navigator.userAgent.toLowerCase();
    if(user_agent.indexOf('shade') != -1) {
        for (var i=1; i<6; i++){
            document.getElementById("range-r-" + String(i)).className="range-rgb-shade";
            document.getElementById("range-g-" + String(i)).className="range-rgb-shade";
            document.getElementById("range-b-" + String(i)).className="range-rgb-shade";

            document.getElementById("text-r-" + String(i)).className="text-rgb-shade";
            document.getElementById("text-g-" + String(i)).className="text-rgb-shade";
            document.getElementById("text-b-" + String(i)).className="text-rgb-shade";
        }
    }else{
        btn_element = document.getElementsByClassName("btn-rgb");
        for (var j=0; j<btn_element.length; j++){
            btn_element[j].style.display = "none";
        }
        shade_element = document.getElementsByClassName("sh-btn-area");
        for (var l=0; l<shade_element.length; l++){
            shade_element[l].style.display = "none";
        }
        for (var i=1; i<6; i++){
            document.getElementById("range-r-" + String(i)).className="range-rgb-web";
            document.getElementById("range-g-" + String(i)).className="range-rgb-web";
            document.getElementById("range-b-" + String(i)).className="range-rgb-web";

            document.getElementById("text-r-" + String(i)).className="text-rgb-web";
            document.getElementById("text-g-" + String(i)).className="text-rgb-web";
            document.getElementById("text-b-" + String(i)).className="text-rgb-web";
        }
    }
}