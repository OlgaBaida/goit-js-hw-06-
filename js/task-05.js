const valueImput = document.querySelector("#name-input");
const valueOutpat = document.querySelector ("#name-output");
valueImput,addEventListener ("input", (event) => {
    if (event.currentTarget.value !== '') {
      return  valueOutpat.textContent = event.currentTarget.value} ; 
    if (event.currentTarget.value === '') {
        return valueOutpat.textContent = "Anonymous"
    }
});
