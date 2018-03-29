// scripts.js 

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
var dinos = dinosaur.toUpperCase();
var text = text.replace("Velociraptor", dinos);

document.write(dinos + "<br/>");
document.write(text.substr(0, text.length / 2));
