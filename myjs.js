const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
let fileName = "";
var ul = document.getElementById('effect-list');
const downloadBtn = document.getElementById("download-btn");
const uploadFile = document.getElementById("upload-file");
const revertBtn = document.getElementById("revert-btn");
var bright = parseInt($('#brightnessrange').val());
var cntrst = parseInt($('#contrastrange').val());
var gamma = parseInt($('#gammarange').val());
var sepia = parseInt($('#sepiarange').val());
var saturation = parseInt($('#saturationrange').val());

function removecont(contr){
  Caman('#canvas', img, function() {
    this.revert(false);
    if(contr == "brightness"){
      this.brightness(parseInt(document.getElementById(contr+'range').value)).render();
    } else if(contr == "contrast"){
      this.contrast(parseInt(document.getElementById(contr+'range').value)).render();
    } else if(contr == "saturation"){
      this.saturation(parseInt(document.getElementById(contr+'range').value)).render();
    } else if(contr == "sepia"){
      this.sepia(parseInt(document.getElementById(contr+'range').value)).render();
    } else if ( contr == "gamma"){
      this.gamma(parseInt(document.getElementById(contr+'range').value)).render();
    }
  });
  console.log(contr);
    var con =document.getElementById(contr+"_layer");
  con.remove();
  document.getElementById(contr+"range").value = '0';
  document.getElementById(contr+"_value").innerHTML = `value:`+ 0;
};

// $(document).on('change', '#contrastrange', function() {
//   if($('#contrastrange').val() != 0 ) {
//     var layerc = document.getElementById("contrast_layer");
//     var layercvalue = document.getElementById("contrast_value");
//     if(layerc){
//      layercvalue.innerHTML = parseInt($('#contrastrange').val());
      
//     } else {
//       var contli = [
//         `<li class="list-group-item d-flex justify-content-between align-items-center" id="contrast_layer">
//         <button class="btn btn-primary"  onclick="removecont('contrast')" id="remove_cont">-</button>
//         Contrast
//         <span class="badge badge-primary badge-pill" id="contrast_layer_value">`+ parseInt($('#contrastrange').val()) +`</span>
//     </li>`];
//     ul.innerHTML += contli;
//     }
    
//   } else{
//    removecont('contrast');
//   }
// });
 function layerbild(valu) {
  Caman('#canvas', img, function() {
    this.revert(false);
    if(valu == "brightness"){
      this.brightness(parseInt(document.getElementById(valu+'range').value)).render();
    } else if(valu == "contrast"){
      this.contrast(parseInt(document.getElementById(valu+'range').value)).render();
    }
  });
  if(document.getElementById(valu+"range") != 0 ) {
    var layer = document.getElementById(valu+"_layer");
    var layervalue = document.getElementById(valu+"_layer_value");
    if(layer){
     layervalue.innerHTML = parseInt(document.getElementById(valu+'range').value);
      
    } else {
      var layerli = [
        `<li class="list-group-item d-flex justify-content-between align-items-center" id="`+valu+`_layer">
        <button class="btn btn-primary"  onclick="removecont('`+ valu +`')" id="`+valu+`remove_cont">-</button>
       `+ valu +`
        <span class="badge badge-primary badge-pill" id="`+ valu +`_layer_value">`+ parseInt($('#'+valu+'range').val()) +`</span>
    </li>`];
    ul.innerHTML += layerli;
    }
    
  } else{
   removecont(valu);
  }
};
 function layerbildB(alu) {
  Caman('#canvas', img, function() {
    this.revert(false);
    if(alu == "saturation"){
      this.saturation(parseInt(document.getElementById(alu+'range').value)).render();
    } else if(alu == "sepia"){
      this.sepia(parseInt(document.getElementById(alu+'range').value)).render();
    } else if ( alu == "gamma"){
      this.gamma(parseInt(document.getElementById(alu+'range').value)).render();
    }
  });
  if(document.getElementById( alu +"range").value > 1 ) {
    var layerB = document.getElementById(alu+"_layer");
    var layerBvalue = document.getElementById(alu+"_layer_value");
    if(layerB){
     layerBvalue.innerHTML = parseInt(document.getElementById(alu+'range').value);
      
    } else {
      var layerBli = [
        `<li class="list-group-item d-flex justify-content-between align-items-center" id="`+alu+`_layer">
        <button class="btn btn-primary"  onclick="removecont('`+ alu +`')" id="`+alu+`_remove_cont">-</button>
       `+ alu +`
        <span class="badge badge-primary badge-pill" id="`+ alu +`_layer_value">`+ parseInt($('#'+alu+'range').val()) +`</span>
    </li>`];
    ul.innerHTML += layerBli;
    }
    
  } else{
   removecont(alu);
   Caman('#canvas', img, function() {
    this.revert(false);
    if(alu == "saturation"){
      this.saturation(1).render();
    } else if(alu == "sepia"){
      this.sepia(1).render();
    } else if ( alu == "gamma"){
      this.gamma(1).render();
    }
  });
  }
};
// $(document).on('change', '#gammarange', function() {
//   if($('#gammarange').val() > 1 ) {
//     var layerc = document.getElementById("gamma_layer");
//     var layercvalue = document.getElementById("gamma_value");
//     if(layerc){
//      layercvalue.innerHTML = parseInt($('#gammarange').val());
      
//     } else {
//       var gammali = [
//         `<li class="list-group-item d-flex justify-content-between align-items-center" id="gamma_layer">
//         <button class="btn btn-primary"  onclick="removecont('gamma')" id="remove_cont">-</button>
//         Contrast
//         <span class="badge badge-primary badge-pill" id="gamma_layer_value">`+ parseInt($('#gammarange').val()) +`</span>
//     </li>`];
//     ul.innerHTML += gammali;
//     }
    
//   } else{
//    removecont('gamma');
//   }
// });
// $(document).on('change', '#brightnessrange', function() {
//   if($('#brightnessrange').val() != 0 ) {
//     var layerb = document.getElementById("brightness_layer");
//     var layerbvalue = document.getElementById("brightness_value");
//     if(layerb){
//      layerbvalue.innerHTML = parseInt($('#brightnessrange').val());
      
//     } else {
//       var brightli = [
//         `<li class="list-group-item d-flex justify-content-between align-items-center" id="brightness_layer">
//         <button class="btn btn-primary"  onclick="removecont('brightness')" id="remove_cont">-</button>
//         Brightness
//         <span class="badge badge-primary badge-pill" id="brightness_layer_value">`+ $('#brightnessrange').val() +`</span>
//     </li>`];
//     ul.innerHTML += brightli;
//     }
    
//   } else{
//    removebright('brightness');
//   }
// });
$(document).on('change', '#effects', function() {
  document.getElementById('brightness_value').innerHTML = `Value:`+($('#brightnessrange')).val();
  document.getElementById('contrast_value').innerHTML = `Value:`+($('#contrastrange')).val();
  document.getElementById('gamma_value').innerHTML = `Value:`+($('#gammarange')).val();
  document.getElementById('sepia_value').innerHTML = `Value:`+($('#sepiarange')).val();
  document.getElementById('saturation_value').innerHTML = `Value:`+($('#saturationrange')).val();
  // Caman('#canvas', img, function() {
  //   this.revert(false);
  //   this.brightness(bright).contrast(cntrst).gamma(gamma).sepia(sepia).saturation(saturation).render();
  // });
 
  // switch(document.getElementById('effects').change) {
  //   case document.getElementById('brightrange').change:
  //     if($('#brightrange').val() != 0 ) {
  //       var layerb = document.getElementById("bright_layer");
  //       var layerbvalue = document.getElementById("bright_value");

  //       if(layerb){
  //        layerbvalue.innerHTML = parseInt($('#brightrange').val());
          
  //       } else {
  //         var brightli = [
  //           `<li class="list-group-item d-flex justify-content-between align-items-center" id="bright_layer">
  //           <button class="btn btn-primary"  onclick="removebright()" id="remove_bright">-</button>
  //           Brightness
  //           <span class="badge badge-primary badge-pill" id="bright_value">`+ parseInt($('#brightrange').val()) +`</span>
  //       </li>`];
  //       ul.innerHTML += brightli;
  //       }
        
  //     } else{
  //       removebright()
  //     }
  //     break;
  //   case y:
  //     // code block
  //     break;
  //   default:
  //     // code block
  // }
  
   
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      if (e.target.classList.contains("vintage-add")) {
        Caman("#canvas", img, function () {
          this.vintage().render();
        });
      } else if (e.target.classList.contains("lomo-add")) {
        Caman("#canvas", img, function () {
          this.lomo().render();
        });
      } else if (e.target.classList.contains("clarity-add")) {
        Caman("#canvas", img, function () {
          this.clarity().render();
        });
      } else if (e.target.classList.contains("sincity-add")) {
        Caman("#canvas", img, function () {
          this.sinCity().render();
        });
      } else if (e.target.classList.contains("crossprocess-add")) {
        Caman("#canvas", img, function () {
          this.crossProcess().render();
        });
      } else if (e.target.classList.contains("pinhole-add")) {
        Caman("#canvas", img, function () {
          this.pinhole().render();
        });
      } else if (e.target.classList.contains("nostalgia-add")) {
        Caman("#canvas", img, function () {
          this.nostalgia().render();
        });
      } else if (e.target.classList.contains("hermajesty-add")) {
        Caman("#canvas", img, function () {
          this.herMajesty().render();
        });
      }
    }
  });

// Revert Filters
revertBtn.addEventListener("click", (e) => {
  Caman("#canvas", img, function () {
    this.revert();
  });
});

uploadFile.addEventListener("change", () => {
  // Get File
  const file = document.getElementById("upload-file").files[0];
  // Init FileReader API
  const reader = new FileReader();

  // Check for file
  if (file) {
    // Set file name
    fileName = file.name;
    // Read data as URL
    reader.readAsDataURL(file);
  }
  downloadBtn.addEventListener("click", () => {
    const fileExtension = fileName.slice(-4);
    let newFilename;
    if (fileExtension === ".jpg" || fileExtension === ".png") {
      newFilename = fileName.substring(0, fileName.length - 4) + "-edited.jpg";
    }
    download(canvas, newFilename);
  });
  function download(canvas, filename) {
    let e;
    const link = document.createElement("a");
    link.download = filename;
    link.href = canvas.toDataURL("image/jpeg", 0.8);
    e = new MouseEvent("click");
    link.dispatchEvent(e);
  }
  revertBtn.addEventListener("click", e => {
    Caman("#canvas", img, function() {
      this.revert();
    });
  });
  reader.addEventListener(
    "load",
    () => {
      // Create image
      img = new Image();
      // Set image src
      img.src = reader.result;
      // On image load add to canvas
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.removeAttribute("data-caman-id");
      };
    },
    false
  );
});
