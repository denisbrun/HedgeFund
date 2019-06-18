function initMap() {
  const loc = {lat: 46.088437, lng: -64.777790};

  const map = new google.maps.Map(document.querySelector('.contactMap'), {
    center: loc,
    zoom: 14
  });

  const marker = new google.maps.Marker({position:loc, map:map});
}