let items = [];

export function getItems() {
    return items;
}

export function setItems(newItems) {
    items = newItems;
}

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

    const item = items.find(o => o.id === id);
    if (!item) {
        return "Item not found";
    }
    if (!newLabel) {
        return "Please add a new label to your item";
    }
    if (newLabel.length > 255) {
        newLabel = newLabel.slice(0, 255);
    }
    const objWithIdIndex = items.findIndex((obj) => obj.id === id);
    items[objWithIdIndex].label = newLabel;
    return items[objWithIdIndex];
}

export function markItemDone(id) {

    const item = items.find(o => o.id === id);
    if (!item) {
        return "Item not found";
    }
    const objWithIdIndex = items.findIndex((obj) => obj.id === id);
    items[objWithIdIndex].status = true;
    return "Item marked as done";
}

export function markAllItemsDone() {
    items.forEach(item => {
        item.status = true;
    });
    return "All items marked as done";

}


