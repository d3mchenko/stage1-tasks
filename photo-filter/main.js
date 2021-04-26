const inputs = document.querySelectorAll('.filters > label > input');
const btnRes = document.querySelector('.btn-reset');
const fileInput = document.querySelector('input[type="file"]');
const imageContainer = document.querySelector('.image-container');
const btnSave = document.querySelector('.btn-save');

console.log(imageContainer);

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    document.querySelector(`output[name='result ${this.name}']`).value = this.value;
}


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));



btnRes.addEventListener('click', () => {
    inputs.forEach(input => {
        const suffix = input.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${input.name}`, 0 + suffix);
        document.querySelector(`output[name='result ${input.name}']`).value = 0;
        input.value = 0;
    })
    document.documentElement.style.setProperty(`--saturate`, 100 + '%');
    document.querySelector(`input[name='saturate']`).value = 100;
    document.querySelector(`output[name='result saturate']`).value = 100;
})

fileInput.addEventListener('change', function(e) {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    imageContainer.innerHTML = "";
    imageContainer.append(img);
  }
  reader.readAsDataURL(file);
});


btnSave.addEventListener('click', function(e) {
  var link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});
