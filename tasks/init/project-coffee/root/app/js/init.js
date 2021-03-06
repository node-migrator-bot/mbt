// Generated by CoffeeScript 1.3.3
(function() {
  var jqmReady, pgReady;

  jqmReady = $.Deferred();

  pgReady = $.Deferred();

  $.when(jqmReady, pgReady).then(function() {});

  if (typeof PhoneGap !== "undefined" && PhoneGap !== null) {
    document.addEventListener("deviceready", pgReady.resolve, false);
  } else {
    pgReady.resolve();
  }

  $(document).on("mobileinit", function() {
    {%= js_safe_name %}.init();
    return jqmReady.resolve();
  });

}).call(this);

