function copyToClipboard(inputEle) {

  // Create a "hidden" input
  var aux = document.createElement("input");

  var element = inputEle;
  var title = element.getAttribute('data-original-title');



  // If color
  if (title === 'color'){
    // Match rgb numbers
    var rgb = element.style.backgroundColor;
    var hexArray = rgb.match(/\d+/g);
    var hex = '#'
    
    // Convert to hex
    for (var i = 0; i < hexArray.length; i++) {
      var hexVal = Number(hexArray[i]).toString(16);
      hex = hex + hexVal;
    }

    // Copy hex value
    aux.setAttribute("value", hex);

  }
  
  else if (title === 'text style'){
      aux.setAttribute("value", "23pt");
  }
  
  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);

}