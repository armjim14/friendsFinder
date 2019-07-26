$(".next").on("click", () => {
    window.location.href = "/survey";
})

$("#back").on("click", () => {
    window.location.href = "/";
})

$("#done").on("click", () => {
    var namex = $("#name").val().trim();
    var urlx = $("#url").val();

    var one = $("#a1").val();
    var two = $("#a2").val();
    var three = $("#a3").val();
    var four = $("#a4").val();
    var five = $("#a5").val();
    var six = $("#a6").val();
    var seven = $("#a7").val();
    var eight = $("#a8").val();
    var nine = $("#a9").val();
    var ten = $("#ax").val();

    if ( !namex || !urlx || one == "0" || two == "0" || three == "0" || four == "0" || five == "0" 
    || six == "0" || seven == "0" || eight == "0" || nine == "0" || ten == "0"){
        var count = 0;
        clearInterval(int);
        var int = setInterval(() => {
            $("#done").text("It seems some fields are empty");
            count++
            if (count == 3){
                clearInterval(int);
                $("#done").text("Submit");
            }
        }, 1000)
    } else {
        var send = {
            name: namex,
            photo: urlx,
            score: [
                parseInt(one), parseInt(two), parseInt(three),
                parseInt(four), parseInt(five), parseInt(six), 
                parseInt(seven), parseInt(eight), parseInt(nine), parseInt(ten)
            ]
        }

        $.post("/api/people", send)
        .then((data) => {
            console.log("questions.html", data)
        })
    }

})