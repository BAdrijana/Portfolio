$(document).ready(function(){

    $('#myCarousel').carousel({
      interval: false
    });

$('#myCarousel').on('mousewheel DOMMouseScroll', function(e){

        if(e.originalEvent.wheelDelta > 0 ) {
            $(this).carousel('prev');
			
        }
        else{
            $(this).carousel('next');
			
        }
    });

//scroll slides on swipe for touch enabled devices 

 	$("#myCarousel").on("touchstart", function(event){
 
        var yClick = event.originalEvent.touches[0].pageY;
    	$(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});
    

let menuopen = $(".fa-align-justify");
let nav = $("#nav");
let works = $(".works");
let next = $(".next");
let ind = $(".carousel-indicators");
let menuclose = $(".fa-times");

function open(){
    menuclose.css("visibility", "visible"); 
       nav.css("height", "100%");
       works.hide();
       next.hide();
       menuopen.hide();
    //    ind.hidse();
    }
    menuopen.on('click', open);

    function close(){
        menuclose.css("visibility", "hidden"); 
        nav.css("height", 0);
        works.show();
        next.show();
        menuopen.show();
        ind.show();
    }
    menuclose.on('click', close);

    // typing text

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
       
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    let creativity = $('#creativity');
    let programing = $('#programing');
    let tools = $('#tools');
    
    function openup(){
        menuclose.css("visibility", "visible"); 
           $('.create').css("height", "100%").css("opacity","1").css("background-color","#373737");
           works.hide();
           next.hide();
           menuopen.hide();
        }
        creativity.on('click', openup)
        menuclose.on('click', function(){
            menuclose.css("visibility", "hidden"); 
            $('.create').css("height", 0);
            works.show();
            next.show();
            menuopen.show();
            ind.show();
        });
     programing.on('click', function(){
        menuclose.css("visibility", "visible");
        $('.program').css("height", "100%").css("opacity","1").css("background-color","#373737");
        works.hide();
        next.hide();
        menuopen.hide();
     })
     menuclose.on('click', function(){
        menuclose.css("visibility", "hidden"); 
        $('.program').css("height", 0);
        works.show();
        next.show();
        menuopen.show();
        ind.show();
    });
     tools.on('click', function(){
        menuclose.css("visibility", "visible");
        tools.css("visibility", "visible"); 
        $('.tool').css("height", "100%").css("opacity","1").css("background-color","#373737");
        works.hide();
        next.hide();
        menuopen.hide();
     })
     menuclose.on('click', function(){
        menuclose.css("visibility", "hidden"); 
        $('.tool').css("height", 0);
        works.show();
        next.show();
        menuopen.show();
        ind.show();
    });

    // $('.progress-bar').each(function() {
    //     var bar_value = $(this).attr('aria-valuenow') + '%';                
    //     $(this).animate({ width: bar_value }, { duration: 2000, easing: 'easeOutCirc' });
    //   });
    // Skills Progress Bar
$('.progress-bar').each(function() {
  
    let $bar = $(this);
    let progress = setInterval(function() {
    
    let currWidth = parseInt($bar.attr('aria-valuenow'));
    let maxWidth = parseInt($bar.attr('aria-valuemax'));
    
    //update the progress
      $bar.width(currWidth+'%');
      $bar.attr('aria-valuenow',currWidth+10);
    
    //clear timer when max is reach
    if (currWidth >= maxWidth){
      clearInterval(progress);
    }
    
  }, 500);

});



// Animation
var doAnimations = function() {
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    };
    $animatables.each(function(i) {
       var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
            $animatable.removeClass('animatable').addClass('animated');
                };
            });
    };
    $(window).bind('scroll', doAnimations);
    $(window).trigger('scroll');


    
// // Get the modal
// var modal = document.getElementById('myModal');
// var img = $('.img');
// var modalImg = $("#img01");
// var captionText = document.getElementById("caption");
// $('.img').click(function(){
//     modal.style.display = "block";
//     var newSrc = this.src;
//     modalImg.attr('src', newSrc);
//     captionText.innerHTML = this.alt;
// });


// // var span = document.getElementsByClassName("close")[0];


// // span.onclick = function() {
// //   modal.style.display = "none";
// //}
    
/* activate the carousel */
$("#modal-carousel").carousel({interval:false});

/* change modal title when slide changes */
$("#modal-carousel").on("slid.bs.carousel",function () {
     $(".modal-title")
     .html($(this)
     .find(".active img")
     .attr("title"));
});

/* when clicking a thumbnail */
$(".block .img").click(function(){
 var content = $(".carousel-inner");
 var title = $(".modal-title");

 content.empty();  
 title.empty();

 var id = this.id;  
  var repo = $("#img-repo .item");
  var repoCopy = repo.filter("#" + id).clone();
  var active = repoCopy.first();

 active.addClass("active");
 title.html(active.find("img").attr("title"));
 content.append(repoCopy);

 // show the modal
 $("#modal-gallery").modal("show");
});

});
