const utenti = ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const password = ["ciccio1", "wandanara", "tiktok", "siffredi33", "tatangelo"];

function login() {

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let messaggio = document.getElementById("messaggio");
    let testo = document.getElementById("testo");

    for (let i = 0; i < utenti.length; i++) {

        if (user == utenti[i] && pass == password[i]) {

            testo.innerHTML = "Login Successful";

            messaggio.classList.remove("d-none", "errore");
            messaggio.classList.add("successo");

            return;
        }
    }

    
    testo.innerHTML = "Login Failed. password incorrect";

    messaggio.classList.remove("d-none", "successo");
    messaggio.classList.add("errore");
}





function mostraPassword() {

    let password = document.getElementById("password");
    if (password.type == "password") {
    password.type = "text";
    } else {
        password.type = "password";
    }

}