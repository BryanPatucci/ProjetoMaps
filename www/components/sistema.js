$(document).on("click", "#botao", function(){
  L.mapquest.key = 'afBbkH6L7Q1vhevaj5NOL9vWipxf8tCR';

  L.mapquest.map('map', {
    center: [-24.1226656,-46.6784699],
    layers: L.mapquest.tileLayer('map'),
    zoom:17
  });
});

