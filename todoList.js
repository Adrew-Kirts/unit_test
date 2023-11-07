let items = [];

export function addItem(label) {
    if (!label) {
        return 'Please add a message to your item';
    }
    if (typeof label !== 'string') {
        return "Label is not text";
    }
    if (label.length > 255) {
        label = label.slice(0, 255);
    }
    const newItem = {
        id: items.length + 1,
        label: label,
        status: false
    };
    items.push(newItem);
    return newItem;
}

export function deleteItem(id) {
    if (!items.find(o => o.id === id)) {
        return "Item not found";
    }
    const objWithIdIndex = items.findIndex((obj) => obj.id === id);
    items.splice(objWithIdIndex, 1);
    return "Item deleted";
}

export function editItem(id, newLabel) {
}

export function markItemDone() {
}

export function markAllItemsDone() {
}





