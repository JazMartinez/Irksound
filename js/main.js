jQuery(function($){
  $("input[type=tel]").mask("+7 (999) 999-9999");
});
$(document).ready(function() {
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };

});

$(document).ready(function(){
  $('a[href*=#].href').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });
  return false;
});

$(document).ready(function(){
  var text = 'Click';
  var text2 = 'Close';
  var word;
  $("#complekt .paket-1").find("button").click(function() {
    word = $("#complekt .paket-1").attr("class");
    if(word == 'visible') {
      $('#complekt #form-1').fadeIn(1500).addClass("hidden");
      $('#complekt .paket-1').fadeIn(1500).removeClass("hidden");
      $('#complekt #form-2').fadeIn(1500).addClass("hidden");
      $('#complekt .paket-2').fadeIn(1500).removeClass("visible");
      $('#complekt #form-3').fadeIn(1500).addClass("hidden");
      $('#complekt .paket-3').fadeIn(1500).removeClass("visible");
    }
    else {
     $('#complekt .paket-1').fadeIn(1500).addClass("hidden");
     $('#complekt #form-1').fadeIn(1500).removeClass("hidden");
     $('#complekt .paket-2').fadeIn(1500).addClass("visible");
     $('#complekt .paket-2').fadeIn(1500).removeClass("hidden");
     $('#complekt #form-2').fadeIn(1500).addClass("hidden");
     $('#complekt .paket-3').fadeIn(1500).addClass("visible");
     $('#complekt .paket-3').fadeIn(1500).removeClass("hidden");
     $('#complekt #form-3').fadeIn(1500).addClass("hidden");
   }
 });
  $("#complekt .paket-2").find("button").click(function() {
    word = $("#complekt .paket-2").attr("class");
    if(word == 'visible') {
      $('#complekt #form-2').fadeIn(1500).addClass("hidden");
      $('#complekt .paket-2').fadeIn(1500).removeClass("hidden");
      $('#complekt #form-1').fadeIn(1500).addClass("hidden");
      $('#complekt .paket-1').fadeIn(1500).removeClass("visible");
      $('#complekt #form-3').fadeIn(1500).addClass("hidden");
      $('#complekt .paket-3').fadeIn(1500).removeClass("visible");
    }
    else {
     $('#complekt .paket-2').fadeIn(1500).addClass("hidden");
     $('#complekt #form-2').fadeIn(1500).removeClass("hidden");
     $('#complekt .paket-1').fadeIn(1500).addClass("visible");

     $('#complekt .paket-1').fadeIn(1500).removeClass("hidden");
     $('#complekt #form-1').fadeIn(1500).addClass("hidden");
     $('#complekt .paket-3').fadeIn(1500).addClass("visible");

     $('#complekt .paket-3').fadeIn(1500).removeClass("hidden");
     $('#complekt #form-3').fadeIn(1500).addClass("hidden");
   }
 });
  $("#complekt .paket-3").find("button").click(function() {
    word = $("#complekt .paket-3").attr("class");
    if(word == 'visible') {
      $('#complekt #form-3').fadeIn(1500).addClass("hidden");
      $('#complekt .paket-3').fadeIn(1500).removeClass("hidden");
      $('#complekt #form-2').fadeIn(1500).addClass("hidden");
      $('#complekt .paket-2').fadeIn(1500).removeClass("visible");
      $('#complekt #form-1').fadeIn(1500).addClass("hidden");
      $('#complekt .paket-1').fadeIn(1500).removeClass("visible");
    }
    else {
     $('#complekt .paket-3').fadeIn(1500).addClass("hidden");
     $('#complekt #form-3').fadeIn(1500).removeClass("hidden");
     $('#complekt .paket-2').fadeIn(1500).addClass("visible");
     $('#complekt .paket-2').fadeIn(1500).removeClass("hidden");
     $('#complekt #form-2').fadeIn(1500).addClass("hidden");
     $('#complekt .paket-1').fadeIn(1500).addClass("visible");
     $('#complekt .paket-1').fadeIn(1500).removeClass("hidden");
     $('#complekt #form-1').fadeIn(1500).addClass("hidden");
   }
 });
  $("#more-1").find("a").click(function() {
    word = $("#more-1 ul").attr("class");
    if(word == 'hidden') {
      $('#more-1 ul').fadeIn(1000).removeClass("hidden").addClass("visible");
      $('#more-1 a').html('Скрыть')
    }
    else {
     $('#more-1 ul').removeClass("visible").addClass("hidden");
     $('#more-1 a').html('Подробнее...')
   }
 });
  $("#more-2").find("a").click(function() {
    word = $("#more-2 ul").attr("class");
    if(word == 'hidden') {
      $('#more-2 ul').fadeIn(1000).removeClass("hidden").addClass("visible");
      $('#more-2 a').html('Скрыть')
    }
    else {
     $('#more-2 ul').removeClass("visible").addClass("hidden");
     $('#more-2 a').html('Подробнее...')
   }
 });
  $("#complekt #form-1").find("a").click(function() {
    word = $("#complekt #form-1").attr("class");
    if(word == 'visible') {
      $('#complekt #form-1').removeClass("visible").addClass("hidden");
      $('#complekt .paket-1').fadeIn(1000).removeClass("hidden").addClass('visible')
    }
    else {
     $('#form-1').removeClass("visible").addClass("hidden");
     $('#complekt .paket-1').fadeIn(1000).removeClass("hidden").addClass('visible')
   }
 });
  $("#complekt #form-2").find("a").click(function() {
    word = $("#complekt #form-2").attr("class");
    if(word == 'visible') {
      $('#complekt #form-2').removeClass("visible").addClass("hidden");
      $('#complekt .paket-2').fadeIn(1000).removeClass("hidden").addClass('visible')
    }
    else {
     $('#form-2').removeClass("visible").addClass("hidden");
     $('#complekt .paket-2').fadeIn(1000).removeClass("hidden").addClass('visible')
   }
 });
  $("#complekt #form-3").find("a").click(function() {
    word = $("#complekt #form-3").attr("class");
    if(word == 'visible') {
      $('#complekt #form-3').removeClass("visible").addClass("hidden");
      $('#complekt .paket-3').fadeIn(1000).removeClass("hidden").addClass('visible')
    }
    else {
     $('#form-3').removeClass("visible").addClass("hidden");
     $('#complekt .paket-3').fadeIn(1000).removeClass("hidden").addClass('visible')
   }
 });
});

jQuery(function ($) {
  $(window).scroll(function(){
    $(".div").each(function () {
      var window_top = $(window).scrollTop();
      var div_top = $(this).offset().top;
      var div_1 = $(this).attr('id');
      if (window_top > div_top - 220){
        $('#menu').find('li').removeClass('active');
        $('#menu').find('li[class="'+div_1+'"]').addClass('active');
      }
      else{
        $('#menu').find('li[class="'+div_1+'"]').removeClass('active');
      };
    });
  });
});
jQuery(function ($) {
  $(window).scroll(function(){
    $(".div").each(function () {
      var window_top = $(window).scrollTop();
      var div_top = $(this).offset().top;
      var div_1 = $(this).attr('id');
      if (window_top > div_top - 220){
        $('.dropdown').find('li').removeClass('active');
        $('.dropdown').find('li[class="'+div_1+'"]').addClass('active');
      }
      else{
        $('.dropdown').find('li[class="'+div_1+'"]').removeClass('active');
      };
    });
  });
});

jQuery( document ).ready(function( $ ) {
  $( '#my-slider' ).sliderPro({
    width: 1640,
    height: 700,
    autoplay: false,
    orientation: 'vertical',
    loop: true,
    arrows: false,
    buttons: false,
    thumbnailsPosition: 'right',
    thumbnailPointer: true,
    thumbnailArrows: true,
    thumbnailWidth: 480,
    thumbnailHeight: 300,
    breakpoints: {
      1700: {
        height: 700,
        thumbnailsPosition: 'right',
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      1300: {
        width: 825,
        height: 500,
        thumbnailsPosition: 'right',
        thumbnailWidth: 300,
        thumbnailHeight: 200
      },
      1200: {
        height: 780,
        orientation: 'horizontal',
        autoplay: true,
        buttons: true,
        thumbnailsPosition: 'bottom',
        thumbnailPointer: false,
        thumbnailArrows: false,
        thumbnailWidth: 0,
        thumbnailHeight: 0
      },
      991: {
        height:700,
        orientation: 'horizontal',
        autoplay: true,
        buttons: true,
        thumbnailsPosition: 'bottom',
        thumbnailPointer: false,
        thumbnailArrows: false,
        thumbnailWidth: 0,
        thumbnailHeight: 0
      }
    }
  });
});

var image, depthMap, displacementMap;

image = load(
  'http://i.imgur.com/QpuvBKC.jpg',

  function () {
    depthMap = load(
      'http://i.imgur.com/3DsYkYq.jpg',

      function () {
        var renderer = PIXI.autoDetectRenderer(
          image.canvas.width,
          image.canvas.height);

        document.body.appendChild(renderer.view);

        var stage = new PIXI.Container();
        stage.interactive = true;

        var container = new PIXI.Container();
        stage.addChild(container);

        var displacementSprite = new PIXI.Sprite(
          PIXI.Texture.fromCanvas(depthMap.canvas));
        displacementSprite.width = image.canvas.width;
        displacementSprite.height = image.canvas.height;

        stage.addChild(displacementSprite);

        var displacementFilter = new PIXI.filters.
        DisplacementFilter(displacementSprite);

        container.filters = [displacementFilter];

        displacementFilter.scale.x = 20;
        displacementFilter.scale.y = 20;

        var bg = new PIXI.Sprite(
          PIXI.Texture.fromCanvas(image.canvas));

        container.addChild(bg);

        stage.on('mousemove', onPointerMove)
        .on('touchmove', onPointerMove);

        renderer.render(stage);

        function onPointerMove(eventData) {
          var mouseOffsetX = eventData.data.global.x /
          image.canvas.width;
          var mouseOffsetY = eventData.data.global.y /
          image.canvas.height;

          displacementFilter.scale.x =
          mouseOffsetX * 10;
          displacementFilter.scale.y =
          mouseOffsetY * 10;
          renderer.render(stage);
        }
      })
  })

function load(path, callback) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  var img = document.createElement('img');
  img.crossOrigin = "Anonymous";
  img.onload = function () {

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);
    callback(canvas, ctx, img);
  };
  img.src = path;
  return {
    context: ctx,
    image: img,
    canvas: canvas
  };
}
$(function() {
  $("input:file").change(function (){
    var fileName = $(this).val().split( '\\' ).pop();
    $(this).next('label').html('<i class="fa fa-file"></i> ' + fileName);
  });
});
(function() {

  "use strict";

  var toggles = document.querySelectorAll(".toggle-switch");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }

})();

$(document).ready(function () {
  $("#form_1").submit(function (evtObj) {
    var formID = $(this).attr('id');
    var formNm = $('#form_1');
    evtObj.preventDefault();
    $.ajax({
      url: 'form.php',
      type: 'POST',
      data: formNm.serialize(),
      success: function (data, el, responce) {
        $('.modal-body p').html('Ваше сообщение отправлено!');
        $(".btn-modal").click(function() {
          $("#myModal").modal('show');
          document.getElementById("form_1").reset();
        });
      },
      error: function (data) {
        $('.modal-body p').html('Ваше сообщение не отправлено!');
        $(".btn").click(function() {
          $("#myModal").modal('show');
        });
      }
    })
  })
})
$(document).ready(function () {
  $("#form_2").submit(function (evtObj) {
    var formID = $(this).attr('id');
    var formNm = $('#form_2');
    evtObj.preventDefault();
    $.ajax({
      url: 'form.php',
      type: 'POST',
      data: formNm.serialize(),
      success: function (data) {
        $('.modal-body p').html('Ваше сообщение отправлено!');
        $(".btn-modal").click(function() {
          $("#myModal").modal('show');
          document.getElementById("form_2").reset();
        });
      },
      error: function (data) {
        $('.modal-body p').html('Ваше сообщение не отправлено!');
        $(".btn").click(function() {
          $("#myModal").modal('show');
        });
      }
    })
  })
})
document.getElementById('formmail').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "form.php", true);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      $('.modal-body p').html('Ваше сообщение отправлено!');
      $(".btn-modal").click(function() {
        $("#myModal").modal('show');
        document.getElementById("formmain").reset();
      });
      $("#formmail").find('input').val('');
      if (http.responseText.indexOf(f.name.value) == 0) { // очистить поле сообщения, если в ответе первым словом будет имя отправителя
        f.message.removeAttribute('value');
        f.message.value='';
        $("#formmail").find('input').val('');
      }
    }
  }
  http.onerror = function() {
    $('.modal-body p').html('Ваше сообщение не отправлено!');
    $(".btn").click(function() {
      $("#myModal").modal('show');
    });
  }
  http.send(new FormData(f));
}, false);
