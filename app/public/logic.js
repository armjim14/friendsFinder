$(".next").on("click", () => {
    $("#contain").css("display", "block");
    $("#box2").css("display", "none");
    window.location.href = "/survey";
})

$("#back").on("click", () => {
    window.location.href = "/";
})

$("#home").on("click", () => {
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

        $("#contain").css("display", "none")
        $("#box2").css("display", "block")
        
        var send = {
            name: namex.toLowerCase(),
            photo: urlx,
            score: [
                parseInt(one), parseInt(two), parseInt(three),
                parseInt(four), parseInt(five), parseInt(six), 
                parseInt(seven), parseInt(eight), parseInt(nine), parseInt(ten)
            ]
        }
        
        var temp = [];
        var nums = [{name: "You Have to take the survey first", url: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX38503500.jpg", amount: 500}];
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
                
                if ( count < nums[0].amount ){
                    nums.splice(0, 1);
                    var fin = { name: data[e].name, url: data[e].photo, amount: count }
                    nums.push(fin);
                }
                temp = [];
            }

            afterGet(send);
            forResult(nums);
        })
    }
    
})

function afterGet(info){
    $.post("/api/people", info)
    .then((data) => {
        console.log("questions.html", data)
    })
}

function forResult(info){
    console.log(info);
    $("#winner").text(info[0].name);
    $("#pic").attr("src", info[0].url)
}