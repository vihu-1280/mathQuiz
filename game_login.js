function adduser(){
    player1_name = document.getElementById("player_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name_input",player1_name);
    localStorage.setItem("player2_name_input",player2_name);
    window.location.replace("Game_page.html")
    }