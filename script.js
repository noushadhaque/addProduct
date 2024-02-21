function addItem(){
    const inputText = document.getElementById('input-field');
    const inputValue = inputText.value;
    inputText.value = "";
    
    const ul = document.getElementById('list');
    const li = document.createElement('li');
    li.innerHTML = inputValue;
    ul.appendChild(li);
}