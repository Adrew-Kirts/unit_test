import {describe, it, expect, beforeEach} from 'vitest';
import { addItem, deleteItem, editItem, markItemDone, markAllItemsDone } from './todoList.js';

let items = [];
beforeEach(() => {
  items = [];
});

describe('addItem function', () => {
  it('should return an error message when label is empty', () => {
    expect(addItem('')).toBe("Please add a message to your item");
  });
  
  it('should return an error message if label is not a string', () => {
    expect(addItem(84)).toBe("Label is not text");
  });

  it('should return an object with truncated label(string)', () => {
    const longLabel = 'A'.repeat(300);
    const result = addItem(longLabel);
    expect(typeof result).toBe('object');
    expect(result.label).toHaveLength(255);
    expect(result.status).toBe(false);
  });

  it('should return a correct item object with label(string) and status(false)', () => {
    const result = addItem("new todo list item");
    expect(typeof result).toBe('object');
    expect(result.label).toBe("new todo list item");
    expect(result.status).toBe(false);
  });
});

describe('deleteItem function', () => {
  it('should return an error message when item is not found', () => {
    addItem("item 1");
    addItem("item 2");
    const result = deleteItem(5);
    expect(result).toBe("Item not found");
  });

  it('should remove an item from the list', () => {
    const items = [addItem("item 1"), addItem("item 2")];
    const id = 1;
    const result = deleteItem(id);
    expect(result).toBe("Item deleted");
    expect(!items.find(o => o.id === id));
  });
});

describe('editItem function', () => {
  it('should return an error message when item doesn\'t exist ', () => {
    const items = [addItem("item 1"), addItem("item 2")];
    const result = editItem(3);
    expect(result).toBe("Item not found");
  });

  it('should return an error message when label is empty', () => {
    addItem("item 1");
    expect(editItem(1, '')).toBe("Please add a new label to your item");
  });

  it('should return an object with truncated label(string)', () => {
    const longLabel = 'A'.repeat(300);
    const item = addItem('item 1');
    const result = editItem(item.id, longLabel);
    expect(result.label).toHaveLength(255);
  });

  it('should edit item with new label', () => {
    const item = addItem("item 1");
    const result = editItem(item.id, "new label");
    expect(result.label).toBe("new label");
  });
});

describe('markItemDone function', () => {
  it('should return an error message when item doesn\'t exist', () => {
    const result = markItemDone(4);
    expect(result).toBe("Item not found");
  });

  it('should mark item as done when item exists', () => {
    const item = addItem("item 1");
    const result = markItemDone(item.id);
    expect(result).toBe("Item marked as done");
    expect(items[0].status).toBe(true);
  });
});

describe('markAllItemsDone function', () => {
  it('should mark all items as done', () => {
    addItem("item 1");
    addItem("item 2");
    const result = markAllItemsDone();
    expect(result).toBe("All items marked as done");
    for (let i = 0; i < items.length; i++) {
      expect(items[i].status).toBe(true);
    }
  });
});

