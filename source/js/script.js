var toggle = document.querySelector(".page-header__toggle");
var links = document.querySelectorAll(".modal-link");
var modal = document.querySelector(".modal");

links.forEach(function (item) {
  item.addEventListener("click",
    function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
  })
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
    }
  }
});

if (window.modal) {
  modal.addEventListener("click",
    function (evt) {
      if (evt.target.classList.contains("modal") || evt.target.classList.contains("button")) {
        evt.preventDefault();
        modal.classList.remove("modal-show");
      }
    });
}

toggle.addEventListener("click",
  function (evt) {
  evt.preventDefault();
  toggle.classList.toggle("page-header__toggle--close");
  toggle.classList.toggle("page-header__toggle--open");
});

if (window.ymaps) {
  ymaps.ready(function () {
    var map = new ymaps.Map(document.querySelector(".contacts__ymap"), {
      center: [59.938631, 30.323055],
      zoom: 17,
      controls: []
    });

    map.behaviors.disable('scrollZoom');

    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
      iconLayout: "default#image",
      iconImageHref: "img/icon-map-pin.svg",
      iconImageSize: [66, 101],
      iconImageOffset: [-30, -115]
    });

    map.geoObjects
      .add(myPlacemark);

  });
}
