$(document).ready(function(){

  $(document).on('click','.article h1',function(){
    $(this).toggleClass('open')
    $(this).next('.content').toggleClass('open')
  })


  function checkImgs() {
    $('div.anker').each(function () {
      if ($(this).visible(true) === true) {
        $that = $(this)
        target = $that.data('target')
        if (target == "index"){
          $('.left .title').hide()
          
        }
        $that.addClass('loaded')
        $('.left .'+target).addClass('open')
      }else{
        $that = $(this)
        target = $that.data('target')
        $that.removeClass('loaded')
        $('.left .title').show()

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


