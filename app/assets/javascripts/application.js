// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require js.cookie


$(document).ready(function() {
  $('.panel-title').hover(function(){
    $(this).parent().siblings('.panel-collapse').toggleClass('in');
  });

  $('.panel-title').mouseenter(function(){
    var path = '/product/' + $(this).attr('value');
    $.ajax({
      type: 'GET',
      url: path,
      dataType: 'json',
      success: function(data){
        // console.log("done");
        var elem = '#notif' + data.product.id;
        // console.log(data);
        $(elem).html(data.content);
      },
       error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(XMLHttpRequest.responseText);
        console.log(textStatus);
        console.log(errorThrown);
      }
    });
  });
});
