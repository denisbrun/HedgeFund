function initMap() {
  const loc = {lat: 46.088437, lng: -64.777790};

  const map = new google.maps.Map(document.querySelector('.contactMap'), {
    center: loc,
    zoom: 14
  });

  const marker = new google.maps.Marker({position:loc, map:map});
}

window.addEventListener('scroll',function() {
  if(this.window.scrollY>150) {
    this.document.querySelector('#navigationBar').style.opacity = 0.9
  } else {
    this.document.querySelector('#navigationBar').style.opacity = 1
  }
})