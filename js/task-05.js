const valueImput = document.querySelector("#name-input");
const valueOutpat = document.querySelector ("#name-output");
valueImput.addEventListener ("input", (event) => {
    if (event.target.value !== '') {
      return  valueOutpat.textContent = event.currentTarget.value} 
    else  {
        return valueOutpat.textContent = "Anonymous"
    }
});
