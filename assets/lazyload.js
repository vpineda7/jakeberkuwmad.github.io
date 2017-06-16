window.addEventListener('load', function(event) {
  var images = document.querySelectorAll('img[data-src]');
  for (var i=0; i < images.length; i++) {
    //images[i].setAttribute('srcset', '');
    images[i].setAttribute('src', images[i].getAttribute('data-src'));
    // console.log('Source-set');
  }
});
