const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
let fileName = "";

const downloadBtn = document.getElementById("download-btn");
const uploadFile = document.getElementById("upload-file");
const revertBtn = document.getElementById("revert-btn");



$(document).on('change', 'input[type=range]', function() {
    var bright = parseInt($('#brightrange').val());
    var cntrst = parseInt($('#contrastrange').val());
    var gamma = parseInt($('#gammarange').val());
    var sepia = parseInt($('#sepiarange').val());
    var saturation = parseInt($('#saturationrange').val());
    document.getElementById('brightness-value').innerHTML = `Value:`+($('#brightrange')).val();
    document.getElementById('contrast-value').innerHTML = `Value:`+($('#contrastrange')).val();
    document.getElementById('gamma-value').innerHTML = `Value:`+($('#gammarange')).val();
    document.getElementById('sepia-value').innerHTML = `Value:`+($('#sepiaange')).val();
    document.getElementById('saturation-value').innerHTML = `Value:`+($('#saturationrange')).val();
    Caman('#canvas', img, function() {
      this.revert(false);
      this.brightness(bright).contrast(cntrst).gamma(gamma).sepia(sepia).saturation(saturation).render();
    });
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

  // Add image to canvas
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
