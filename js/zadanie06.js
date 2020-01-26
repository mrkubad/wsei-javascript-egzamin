document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.querySelector('#button-1');
    const button2 = document.querySelector('#button-2');
    const button3 = document.querySelector('#button-3');
    const shoppingList = document.querySelector('#shopping-list');
    button1.addEventListener('click', e => {
        let newElement = document.createElement('li');
        newElement.innerHTML = 'Chleb';
        shoppingList.appendChild(newElement);
    });
    button2.addEventListener('click', e => {
        shoppingList.removeChild(shoppingList.lastElementChild);
    });
    button3.addEventListener('click', e => {
        if(shoppingList.children.length > 1) {
            const clonedItem = shoppingList.children[1].cloneNode(true);
            shoppingList.appendChild(clonedItem);
        }
        else
            console.log('Brak drugiego elementu :(');
    });
});