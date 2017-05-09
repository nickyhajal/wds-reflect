import $ from 'jquery';

export default () => {
  const body = document.body;
  const html = document.documentElement;
  const $e = $('.fillScreen');
  $e.css('min-height', '');
  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight,
  );
  const scroll = Math.max(body.scrollHeight, html.clientHeight);
  let bonus = 0;
  if (scroll > html.clientHeight) {
    bonus = 120;
  }
  if ($('.footer').is(':visible')) {
    bonus = bonus - $('.footer').outerHeight();
  }
  if ($e.length) {
    $e.css('min-height', `${height - $e.offset().top + bonus}px`);
  }
};
