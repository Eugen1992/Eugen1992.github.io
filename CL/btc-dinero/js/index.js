$(document).ready(function () {
  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    var accordionTabs = $(this).closest('.accordion-tabs-minimal');
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      accordionTabs.find('.is-open').removeClass('is-open');

      $(this).next().addClass('is-open');
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
      $(this).removeClass('is-active');
      $(this).next().removeClass('is-open');
    }
  });
});
