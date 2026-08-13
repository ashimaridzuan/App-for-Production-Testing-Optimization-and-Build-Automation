// Create a general element with specified text
const createElement = (elementType, text) => {
  var  element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

//Creates images with alt
const createImage = (url, alt) => {
  const image = document.createElement("img");
  image.src = url;
  image.alt = alt;
  return image;
};

// Create a header element with specified text and data attribute
const createHeader = (headerType, text, dataCy) => {    
  var header = document.createElement(headerType);
  header.textContent = text; header.setAttribute("data-cy", dataCy); return header; }

// Create a button that toggles the visibility of the form
const createToggleButton = (text, element) => { const button = document.createElement("button");
button.textContent = text
  button.addEventListener("click",()  => {   
    element.classList.toggle("notVisible");
  });
  return button;
};

// Form Helper Functions // Helper function to create a label element
const createLabel = (text, htmlFor) => {
  var label = document.createElement("label");
   label.textContent = text
          label.setAttribute("for", htmlFor);
  return label;
};

// Helper function to create an input element
const createInput = (name) => {
  const input = document.createElement("input");
  
  //const form;
  
  input.name = name; 
  return input;
}

const createSubmitButton = (value) => {
var submit = document.createElement("input");
        submit.type = "submit";submit.value = value
  
  
  return submit;
};

export {
  createElement,
  createImage,
  createHeader,
  createToggleButton,
  createLabel,
  createInput,
  createSubmitButton,
}  


