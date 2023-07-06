


$(document).ready(function(){

  var width = $(".front").width() / 2;
  var height = $(".front").height() / 2;
  $(".front").scrollTop(height)
  $(".front").scrollLeft(width)


  $(".front").on("mousewheel scroll", function(){
    var top = $(".front").scrollTop() / 2;
    var left = $(".front").scrollLeft() / 2;

    $(".back").scrollTop(top)
    $(".back").scrollLeft(left)
  })


  $(document).on('click','.article h1',function(){
    $(this).toggleClass('open')
    $(this).next('.content').toggleClass('open')
  })


  function checkImgs() {
    $('span.anker').each(function () {
      if ($(this).visible(true) === true) {
        $that = $(this)
        target = $that.data('target')
        if (target == "index"){
          $('.left .title').hide()
          $('.background2').hide()
          
        }
        $that.addClass('loaded')
        $('.left .'+target).addClass('open')
      }else{
        $that = $(this)
        target = $that.data('target')
        $that.removeClass('loaded')
        $('.left .title').show()
        $('.background2').show()
        $('.left .'+target).removeClass('open')
      }
      console.log(target);

    })
  }

  checkImgs();

  $('.right').scroll(function () {
    checkImgs();
  })


  $(".index h1").on("click", function(){
    var target = "." + $(this).attr("data-target");
    $(".index").hide()
    $(target).show()
  })
});


// const right = document.querySelector(".right");
// let value = 0;
// const wheel_SPEED = 0.5;

// document.addEventListener("wheel", function (e) {
//   if (right.style.transform === "translateX(-50vw)") {
//     console.log('50');
//     return;
//   } else if (e.deltaY !== 0 || e.deltaX !== 0) {
//     value -= wheel_SPEED;
//     console.log(value);
//     right.style.transform = `translateX(${value}vw)`;
//   }
// });


// const cover = document.querySelector(".cover");

// document.addEventListener("wheel", function (e) {

// if (right.style.transform === "translateX(-50vw)") {
//   $('.cover').addClass('half');
//   return;
// } else if (e.deltaY !== 0 || e.deltaX !== 0) {
//   value -= wheel_SPEED;
//   cover.style.transform = `translateX(${value}vw)`;
// }
// });

  let value = 0;
  const wheel_SPEED = 0.5;

    // if (right.style.transform === "translateX(-50vw)") {
    //   console.log('50');
    //   cover.classList.add("half");
    // } else if (e.deltaY !== 0 || e.deltaX !== 0) {
    //   value -= wheel_SPEED;
    //   console.log(value);
    //   right.style.transform = `translateX(${value}vw)`;
    //   cover.classList.remove("half");
    // }
    $(document).on('mousewheel', function(e){

      if (value <= -50) {
        $(".cover, .title, .background2").addClass("half");
      } else if (e.deltaY !== 0 || e.deltaX !== 0) {
        value -= wheel_SPEED;
       $(".right").css({"transform":"translateX("+value+"vw)"});      
       $(".cover, .background2").css({"width": (100 - (value * -1)) + "vw"});      
       $(".title").css({"width": (60 - (value * -0.5)) + "vw"});    
       $(".cover, .title, .background2").removeClass("half");
      }
    });


// const leftBar = document.querySelector('.left-bar');
// const direction = document.querySelector('.direction');
// const thirdOfPageWidth = window.innerWidth/3;
// const halfOfPageWidth = window.innerWidth/2;
// const right = window.innerWidth /3;

// document.addEventListener('click', function(event) {
  
//   if (event.clientX < halfOfPageWidth) {
//     leftBar.classList.remove('open');
//   } else if ( event.clientX > right) {
//     leftBar.classList.add('open');
//   }

//   }

// );
