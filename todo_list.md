
# Cahier de tests

## Add item

function: addItem

-> receives label (string)

- Assert label is not empty 
    - if label is empty: send error message
- Assert label is a string
    - if label is not a string: send error message
- If string is longer than 255 characters truncate at 255 characters

<- return object {label (string), status (false)}

### Tests:

```
Name: Check label has content
Description: Returns error message when label is empty
Steps: input ""
Awaited result: Error message "Please add a message to your item

Name: Check if label is a string
Description: Returns error message when label is not a string
Steps: input '84'
Awaited result: Error message "Label is not text"

Name: Check if label string surpasses 255 characters
Description: Checks if string surpasses 255 characters
Steps: Input string longer than 255 chars
Awaited result: Returns object with string truncated at 255 chars and status(false)

Name: Check if function returns correct object
Description: Checks if string surpasses 255 characters
Steps: Input string shorter than 255 chars
Awaited result: Returns object with same string and status(false)

```

## Delete item

function: deleteItem

-> receives item ID (id)

- Assert item exists
    - if doesn't exist: send error message
- Delete item from list
- Assert items is deleted 

<- return success message

### Tests:

```
Name: Check if item exists 
ID: 4
Description: Returns error message when item doesn't exist 
Steps: input non-existent item ID
Awaited result: Error message "Item not found"

Name: Check if item is deleted 
ID: 5 
Description: Deletes item from the list 
Steps: input existing item ID 
Awaited result: Item is removed from the list
```

## Edit item

function: editItem

-> receives item ID (id), new label (string)

- Assert item exists
    - if doesn't exist: send error message
- Assert new label is not empty
    - if label is empty: send error message
- Assert new label is a string
    - if label is not a string: send error message
- If string is longer than 255 characters truncate at 255 characters
- Edit item with new label

<- Return success message


### Tests:

```
Name: Check if item exists 
ID: 4
Description: Returns error message when item doesn't exist 
Steps: input non-existent item ID
Awaited result: Error message "Item not found"

Name: Check label has content
ID: 1
Description: Returns error message when label is empty
Steps: input "" and click save button
Awaited result: Error message "Please add a message to your item

Name: Check if new label is a string 
ID: 3 
Description: Returns error message when new label is not a string 
Steps: input existing item ID and "84" as new label and click edit button 
Awaited result: Error message "Label is not text"

Name: Check if new label string surpasses 255 characters
ID: 3.1
Description: Checks if string surpasses 255 characters
Steps: Input string longer than 255 chars
Awaited result: Returns true 

Name: Check if label string surpasses 255 characters
ID: 3.2
Description: Checks if string surpasses 255 characters
Steps: Input string shorter than 255 chars
Awaited result: Returns false

Name: Check if string is correctly truncated
ID: 3.3
Description: Assert function truncates string
Steps: Input string longer than 255 chars
Awaited result: Result is string of exactly 255 chars long 

Name: Check if item is edited 
ID: 5 
Description: Edits item with new label 
Steps: input existing item ID and new label and click edit button 
Awaited result: Item is edited with new label

```

## Mark item as done

function: markItemDone

-> receives item ID (id)

- Assert item exists
    - if doesn't exist: send error message
- Mark item as done

<- Return success message

### Tests:

```
Name: Check if item exists 
ID: 4
Description: Returns error message when item doesn't exist 
Steps: input non-existent item ID
Awaited result: Error message "Item not found"

Name: Check if item is marked as done 
ID: 6
Description: Marks item as done (change done status to true)
Steps: input existing item ID and click mark as done button 
Awaited result: Item is marked as done

```

## Mark all items as done

function: markAllItemsDone

-> no input parameters

- Mark all items as done (change done status to true)

<- Return success message

### Tests:

```
Name: Check if all items are marked as done 
ID: 7
Description: Marks all items as done 
Steps: click mark all items as done button 
Awaited result: All items are marked as done

```