$(document).ready(function () {
    // Global variables
    var $mImage;
    var $photoBox = $(".photoFig");

    // Nav menu scroll
    $("a").on('click',
    function(event){
        if(this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            if(this.hash == "#gallery"){
                $('html, body').animate({
                    scrollTop:
                    $(hash).offset().top - 125
                }, 1000, function(){
                    window.location.hash = hash;
                });

            }
            else {
                $('html, body').animate({
                    scrollTop:
                    $(hash).offset().top - 67
                }, 1000, function(){
                    window.location.hash = hash;
                });
            }

        }
    });

    //Start lightbox
    $photoBox.on('click', function (){
        var imgsrc = $(this).find("img").attr('src');
        var caption = $(this).find("figcaption").text();
            $('#modal-img').attr("src", imgsrc);
            $("#imgText").text(caption);
            $mImage = $(this).parent();
            $(".modal").fadeIn("fast");
    });

    // Next image in lightbox
    $("#nextImg").on('click',function(){
        if($($mImage).next().find("img").attr('src') == null) {

           var imgsrc = $($mImage).parent().find(">:first-child").find("img").attr('src');
           var caption = $($mImage).parent().find(">:first-child").find("figcaption").text();
           console.log(imgsrc);
           console.log(caption);

           $('#modal-img').fadeTo(400,0.30, function() {
           $('#modal-img').attr("src", imgsrc);
           }).fadeTo(300,1);

           $("#imgText").text(caption);
           $mImage = $($mImage).parent().find(">:first-child");

        }
        else
        {
            var nextImg = $($mImage).next().find("img").attr('src');
            var nextCap = $($mImage).next().find("figcaption").text();

            $('#modal-img').fadeTo(400,0.30, function() {
                $('#modal-img').attr("src", nextImg);
            }).fadeTo(300,1);
            $("#imgText").text(nextCap);
            $mImage = $($mImage).next();
            return false;
        }
    });

    // Previous image in lightbox
    $("#prevImg").on('click',function(){
        if($($mImage).prev().find("img").attr('src') == null) {
            var imgsrc = $($mImage).parent().find(">:last-child").find("img").attr('src');
            var caption = $($mImage).parent().find(">:last-child").find("figcaption").text();
            console.log(imgsrc);
            console.log(caption);

            $('#modal-img').fadeTo(400,0.30, function() {
            $('#modal-img').attr("src", imgsrc);
            }).fadeTo(300,1);

            $("#imgText").text(caption);
            $mImage = $($mImage).parent().find(">:last-child");
        }
        else {
            var prevImg = $($mImage).prev().find("img").attr('src');
            var prevCap = $($mImage).prev().find("figcaption").text();

            $('#modal-img').fadeTo(500,0.30, function() {
                $('#modal-img').attr("src", prevImg);
            }).fadeTo(300,1);

            $("#imgText").text(prevCap);
            $mImage = $($mImage).prev();
            return false;
        }
    });

    //Close option 1 & 2
    // 1: Close on close button
    $(document).on('click',".close", function () {
        $(".modal").fadeOut("500");
    });
    //2; Close on click outside canvas
    $('.modal').on('click', function(e){
        if(!$(e.target).closest(".modal-canvas").length){
            $(".modal").fadeOut(500);
        }
    });

    // Close and open pun cards
    $(".card").on('click', function(){
        var $funText = $(this).find("p");

        if($funText.css("display") == "block") {
            $funText.animate({
                marginTop:'-30px'
            }, 500, function(){
                $funText.fadeOut("slow");
                $funText.css("display", "none");
            });

        }
        else {
            $funText.animate({marginTop:'36px'});
            $funText.fadeIn("slow").css("display", "block");
        }
    });

});

