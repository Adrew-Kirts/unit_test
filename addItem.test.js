import { describe, it, expect } from 'vitest';
import { addItem } from './addItem.js';

describe('addItem function test', () => {
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
  })

  it('should return a correct item object with label(string) and status(false)', () => {
    const result = addItem("new todo list item");
    expect(typeof result).toBe('object');
    expect(result.label).toBe("new todo list item");
    expect(result.status).toBe(false);
  })

});