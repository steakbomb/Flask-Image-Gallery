function clicked_img(img, fp) {
  console.log(img.src);

  var top = document.getElementById('top');

  top.src = img.src;
  top.hidden = false;

  var aspectRatio = img.naturalWidth / img.naturalHeight;
  var maxHeight = window.innerHeight * 0.8; // Adjust the percentage as needed

  if (aspectRatio > 1) {
    top.style.width = "100%";
    top.style.height = "auto";
  } else {
    top.style.width = "auto";
    top.style.height = maxHeight + "px";
  }

  document.getElementById('close').hidden = false;
}




function do_close(){
  document.getElementById('top').hidden=true;
  document.getElementById('close').hidden=true;
}
