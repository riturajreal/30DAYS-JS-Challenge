const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_-+={}[]></";

const createPassword = () => {
  const allCharacters = upperCase + lowerCase + number + symbol;

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  // Update the value of the passwordBox element with the generated password
  passwordBox.value = password;
};

// function to copy password

function copyPassword () {
    passwordBox.select();
    // document.execCommand("copy");

    // For modern browsers, use the Clipboard API
  if (navigator.clipboard) {
    navigator.clipboard.writeText(passwordBox.value)
      .then(() => {
        console.log("Password copied to clipboard");
      })
      .catch(err => {
        console.error("Unable to copy password to clipboard", err);
      });
  }
}