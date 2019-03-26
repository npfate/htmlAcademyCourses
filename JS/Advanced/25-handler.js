var pictures = [
  'gallery-tomato/tomato-red-large.jpg',
  'gallery-tomato/tomato-yellow-large.jpg',
  'gallery-tomato/tomato-strange-large.jpg'
];

var fullpic = document.querySelector(".full-picture");
var thumbnails = document.querySelectorAll(".gallery__picture-preview");

var addThumbnailClickHandler = function(thumbnail, pic) {
  thumbnail.addEventListener("click", function() {
    fullpic.src = pic;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], pictures[i]);
}
