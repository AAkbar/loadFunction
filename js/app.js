(function IIFE($) {
  let load = $("#load"),
    nav = $(".nav"),
    classNames = [".btn--success", ".btn--info"];

  $(nav).on("click", "a", function (e) {
    let successBtn = $(classNames[0]);
    let target = $(e.target),
      link = target.attr("href");
    e.preventDefault();

    load.stop().empty().load(link, function () {
      successBtn.addClass(".btn--info").removeClass("btn--success");
      target.addClass("btn--success");
    });
  });
}(jQuery));