(function ($) {

  $('h2').text('Busque Conhecimento!');

  $('body').append('<img src="https://uploaddeimagens.com.br/images/001/579/778/full/Bilu.png?1535321592" class="biluse" />');
  $('head').append("<style> \
  .biluse { \
    position: fixed; \
    float: left; \
    width: 70px; \
    display: none; \
    z-index: 99999 \
  } \
  \
  .bilu-left-bottom { \
    display: block; \
    bottom: -100px; \
    left: -100px; \
    animation-name: bilu-left-bottom; \
    animation-delay: -2s; \
    animation-duration: 14s; \
    transform: rotate(45deg); \
  } \
  \
  .bilu-right-bottom { \
    display: block; \
    bottom: -100px; \
    right: -100px; \
    animation-name: bilu-right-bottom; \
    animation-delay: -2s; \
    animation-duration: 14s; \
    transform: rotate(-45deg); \
  } \
 \
  .bilu-right-top { \
    display: block; \
    top: -100px; \
    right: -100px; \
    animation-name: bilu-right-top; \
    animation-delay: -2s; \
    animation-duration: 14s; \
    transform: rotate(250deg); \
  } \
  \
  .bilu-left-top { \
    display: block; \
    top: -100px; \
    left: -100px; \
    animation-name: bilu-left-top; \
    animation-delay: -2s; \
    animation-duration: 14s; \
    transform: rotate(115deg); \
  } \
  \
  @keyframes bilu-left-bottom { \
    0%   { bottom: -100px; left: -100px } \
    30%  { bottom: -15px; left: -15px } \
    70%  { bottom: -15px; left: -15px } \
    100% { bottom: -100px; left: -100px } \
  } \
  @keyframes bilu-right-bottom { \
    0%   { bottom: -100px; right: -100px } \
    30%  { bottom: -15px; right: -15px } \
    70%  { bottom: -15px; right: -15px } \
    100% { bottom: -100px; right: -100px } \
  } \
  @keyframes bilu-right-top { \
    0%   { top: -100px; right: -100px } \
    30%  { top: -15px; right: -15px } \
    70%  { top: -15px; right: -15px } \
    100% { top: -100px; right: -100px } \
  } \
  @keyframes bilu-left-top { \
    0%   { top: -100px; left: -100px } \
    30%  { top: -15px; left: -15px } \
    70%  { top: -15px; left: -15px } \
    100% { top: -100px; left: -100px } \
  } \
</style>");

var current = 'bilu-left-bottom';
var times = 0;
var positions = [
  'bilu-left-bottom',
  'bilu-left-top',
  'bilu-right-bottom',
  'bilu-right-top'
]
var biluImage = $('.biluse');
setTimeout(function() {
  $(biluImage).addClass('bilu-left-bottom');
  showBilu();
}, 6000);

function showBilu() {
  setInterval(function() {
    $(biluImage).removeClass(current);
    current = positions[Math.floor(Math.random() * positions.length)];
    $(biluImage).addClass(current);
    if(times <= 10) {
      showBilu();
      times++;
    }
  }, (1000*30));
}


})(jQuery);