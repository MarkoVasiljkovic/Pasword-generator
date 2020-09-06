let button = document.getElementById('btn');
let passInput = document.getElementById('pass');

function randomPassword() {
  let length = 12,
    charset = '0123456789',
    password = '';
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.random() * n);
  }
  return password;
}

button.addEventListener('click', function () {
  passInput.innerHTML = randomPassword();
});
console.log(randomPassword());
