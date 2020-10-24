
var width = $(window).width();
function off () {
var item1 = $('.main-d');
item1.each(function() {

    item1.css("opacity","0");
    item1.attr("status","false");
    
    if (width <= 999) {
            item1.css("display","none");
    }
})
}
$(document).ready(function() {
    $('.bri').each(function() {
        $(this).css('opacity',0);
        $(this).css('transition',"all 1s");
        if (width <= 999) {
            $(this).css("display","none");
        }
    })
    $(document).on("click","#bri",function() {
        var thiss = $(this);
        var bri = $('#bri');
        var target = thiss.attr("target");

        $('.bri').each(function() {
            $(this).css('opacity',0);
            if (width <= 999) {
                setTimeout(() => {
                    $(this).css("display","none");
                    }, 0);
            }
        })


        $("." + target).each(function() {
            if (thiss.attr("status") == "true") {
                $(this).css("opacity",1);
                if (width <= 999) {
                    setTimeout(() => {
                        $(this).css("display","block");
                    }, 100);
                }
            } else {
                
                $(this).css("opacity",0);
                if (width <= 999) {
                    setTimeout(() => {
                        $(this).css("display","none");
                        }, 0);
                }
            }
        })
        if (thiss.attr("status") == "true") {
            thiss.attr("status","false");
        } else {
            thiss.attr("status","true");
        }
    })
})


$(document).ready(function() {
    $(document).on("click","#covid",function() {
        if ($(this).attr("status") == "true") {
            $(this).css("marginLeft","auto")
            $(this).css("marginRight","0")
            $(this).attr("status","false")
        } else {
            $(this).css("marginRight","auto")
            $(this).css("marginLeft","0")
            $(this).attr("status","true")
        }
    })
})
$(document).ready(function() {

    var width = $(window).width();
    if (width<=999) {
        $('.min').css("transition","all 1s");
    }
    $(document).on("click",".close",function() {
        
        $('.min').css("opacity","0");
        $('.min').css("visibility","hidden");
    })
    $(document).on("click",".open",function() {
        
        $('.min').css("opacity","1");
        $('.min').css("visibility","visible");
    })

    var count = 1;
    var item = $('.listitem');
    var all = item.length;
    if (width <= 999) {
        item.each(function(){
            $(this).css("display","none");
        })
        item.each(function() {
            if ($(this).attr("data") == 1) {
                $(this).css("display","block");
                return;
            }
        })
    }

    $(document).on("click","#turnleft",function(){
        if (count >= 2) {
            item.each(function(){
            $(this).css("display","none");
            })
            count--;
            item.each(function() {
                if ($(this).attr("data") == count) {
                    $(this).css("display","block");
                    return;
                }
            })
            document.getElementById('countme').innerText = count + "/" + all;
        }
    })
    $(document).on("click","#turnright",function(){
        if (count >= 1 && count < all) {
            item.each(function(){
            $(this).css("display","none");
            })
            count++;
            item.each(function() {
                if ($(this).attr("data") == count) {
                    $(this).css("display","block");
                    return;
                }
            })
            document.getElementById('countme').innerText = count + "/" + all;
        }
    })
            document.getElementById('countme').innerText = count + "/" + all;
})