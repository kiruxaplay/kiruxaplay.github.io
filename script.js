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
