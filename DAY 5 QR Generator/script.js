// for qr api --> GO QR --> https://goqr.me/api/

let qrBox = document.getElementById("qr-box");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qr-text");

const generateQR = () => {
    
  if (qrText.value) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    qrBox.classList.add("show-img");
  } 
  
  else {

    // add error class when input field is black for shake animation
    qrText.classList.add('error');

    // to remove error class
    setTimeout(() => {
        qrText.classList.remove('error');
    }, 1000);
  }

};
