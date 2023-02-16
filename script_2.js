function start() {
    let token = document.getElementById("a").value;
    let txt = document.getElementById("b").value;

    fetch('https://statman.darkmash.repl.co/service/ca/' + txt, {
            method: "GET",
            headers: {

                "token": token,

            },
            mode: 'cors',
        }).then(response => response.text())
        .then((response) => {
            console.log(response);
            if (response == "RUNNING") {
                location.href = "error_already_running.html";
            } else if (response == "Invalid Token") {
                location.href = "error_invalid_token.html";
            }
        }).catch(err => console.log(err));
}

function stop_() {
    let token = document.getElementById("a").value;
    fetch('https://statman.darkmash.repl.co/service/stop', {
            method: "GET",
            headers: { "token": token },
            mode: 'cors'

        }).then(response => response.text())
        .then((response) => {
            if (response == "Notfound") {
                location.href = "error_nothing_to_stop.html";
            } else {
                location.href = "index.html";
            }
        }).catch(err => console.log(err));
}