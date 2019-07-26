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

        var temp = [];
        var nums = [];
        var list = [parseInt(one), parseInt(two), parseInt(three), parseInt(four), parseInt(five), parseInt(six), parseInt(seven), parseInt(eight), parseInt(nine), parseInt(ten)]

        $.get("/api/people", (data) => {
            for( let e in data ){
                var now = data[e].score;
                var count = 0;
                
                for ( let i = 0; i < list.length; i++ ){
                    var up = Math.abs(now[i] - list[i]);
                    if (up == 0){
                        null
                    } else {
                        temp.push(up);
                    }
                }

                for ( let j = 0; j < temp.length; j++ ){
                    count += temp[j];
                }
                
                var fin = { name: data[e].name, url: data[e].photo, amount: count }
                nums.push(fin);
                temp = [];
            }
            console.log(nums)
            afterGet(send);
        })

    }

})

function afterGet(info){
    $.post("/api/people", info)
    .then((data) => {
        console.log("questions.html", data)
    })
}