// Избегайте ошибок `console` в браузерах, в которых отсутствует консоль.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Только заглушки неопределенные методы.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
// Разместите здесь любые плагины jQuery / helper.
