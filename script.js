$("button").click(function() {
    let colorAnswer = $("input").val();

    let age = $(".A2").val();
    let leader = $(".A1").val();
    let follower = $(".A1").val();
    if (age > 18 && "leader" === leader) {
        $(".text").text("Kakashi!");
        $(".pictureKakashi").show();

    }

    if (age <=18 && "leader" === leader) {
        $(".text").text("Sasuke!");
        $(".picturesasuke").show();

    }
    if (age > 18 && "follower" === follower) {
        $(".text").text("Naruto!");
        $(".picturenaruto").show();

    }
    if (age <= 18 && "follower" === follower) {
        $(".text").text("Sakura!");
        $(".picturesakura").show();

    }
    if( age === '' && '' === follower) {
        	$(".text").text("Please answer the questions!");
    }
});