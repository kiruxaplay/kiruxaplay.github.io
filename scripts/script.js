$(document).ready(function() {
  $('.bookmark').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('added');
    var parentId = $(this).parent().attr("id");
    var bookMarks = $('.bookmark-list');
    if ($(this).hasClass('added')) {
      $(this).text("Удалить из закладок");
      var text = $('#' + parentId + ' h2').text();
      $('<a>', {
        href: '#' + parentId,
        text: text
      }).appendTo(bookMarks);
    } else {
      $(this).text("Добавить в закладки");
      $('a[href="#' + parentId + '"]').remove();
    }
  });
});


var modal = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
   modal.style.display = "block";
}

span.onclick = function () {
   modal.style.display = "none";
}

window.onclick = function (event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}
