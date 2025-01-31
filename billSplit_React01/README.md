# Bill Splitter React App

This is a simple React application to split bills between friends. The app allows you to add friends, select a friend, and split a bill with the selected friend.

## Features

- Add new friends
- Select a friend to split a bill with
- Enter the bill amount and your expense
- Calculate the friend's expense
- Choose who will pay the bill
- Update the balance based on the selected payer


## Components

### App

The main component that holds the state and renders the `Friendlist`, `AddFriend`, and `Formsplit` components.

### Friendlist

Renders a list of friends and allows selecting a friend to split a bill with.

### AddFriend

A form to add a new friend to the list.

### Formsplit

A form to enter the bill amount, your expense, and select who will pay the bill. It calculates the friend's expense and updates the balance accordingly.

### Button

A reusable button component.

## Styling

The app uses Tailwind CSS for styling. You can customize the styles by modifying the class names in the components.

