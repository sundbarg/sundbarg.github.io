// Array to store the items
let items = [];

// Function to add items to the list
function addItem() {
    const itemInput = document.getElementById('item');
    const itemName = itemInput.value.trim();

    if (itemName !== '') {
        items.push(itemName);
        updateList();
        itemInput.value = ''; // Clear the input field
    }
}

// Function to remove an item from the list
function removeItem(index) {
    items.splice(index, 1);
    updateList();
}

// Function to update the displayed list
function updateList() {
    const groceryList = document.getElementById('groceryList');
    groceryList.innerHTML = ''; // Clear the current list

    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        // Add a remove button for each item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeItem(index);

        li.appendChild(removeButton);
        groceryList.appendChild(li);
    });
}