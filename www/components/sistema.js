$(document).on("click", "#botao", function(){
  L.mapquest.key = 'afBbkH6L7Q1vhevaj5NOL9vWipxf8tCR';

  // 'map' refers to a <div> element with the ID map
  L.mapquest.map('map', {
    center: [37.7749, -122.4194],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });
});

