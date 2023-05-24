const colors = ["lightBlue", "pink", "yellow", "black", "red"];

const handleColor = (color) => {
  let umbrella = document.getElementById("umbrella_img");

  let UploadDiv = document.getElementById("imageUpload");
  UploadDiv.style.backgroundColor = `${color}`;
  umbrella.src = `/Public/${color} umbrella.png`;
  console.log(color);
};

const colorDiv = document.getElementById("colorBadge");

for (let i = 0; i < colors.length; i++) {
  // Creates a new div element
  let newDiv = document.createElement("div");

  newDiv.style.backgroundColor = colors[i];
  newDiv.style.width = "25px";
  newDiv.style.height = "25px";
  newDiv.style.borderRadius = "50%";
  newDiv.style.marginRight = "10px";
  console.log(colors[i], newDiv);
  colorDiv.appendChild(newDiv);
  newDiv.addEventListener("click", () => handleColor(colors[i]));
}

// for the upload logo thing :-
// with filereader.
const imageUpload = document.getElementById("imageUpload");
const logoBottom = document.getElementById("logo-bottom");

imageUpload.addEventListener("click", () => {
  console.log("clicked");
  const fileInput = document.createElement("input");

  fileInput.type = "file";
  fileInput.accept = "image/*";

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      logoBottom.src = reader.result;
    });

    reader.readAsDataURL(file);
  });
  fileInput.click();
});
