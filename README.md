# Project Nutrition

This week's project is all about tying together the skills you've learnt to build an app which scans barcodes on food packages to retrieve the product name and nutritional information.

What you do with that information, and how you present it, is completely up to you. For example, you could build an app which makes an inventory of items you have in your kitchen, or you could build a calorie counter, or an app which counts the protein, salt, or fat content of foods.

We've built a component for you which uses [quagga](https://github.com/serratus/quaggaJS) to access your webcam to use it to scan products, and your app should use Redux as a global state store, but beyond that, it's up to you to decide what other libraries and tools you'd like to encorporate into your app. Perhaps you'd like to use styled components, or maybe you'd like to make routes using react router. It's up to you!

Make sure to read through the hints and tips section further down to read up on how to use the `BarcodeScanner` component, and how to fetch product data from the [Open world facts api](https://world.openfoodfacts.org/).

## What you will learn 🧠

* How to make API calls around Redux using thunks
* How to structure your redux store to suit your data

## How to get started 💪🏼

1. Fork this repo
2. Clone this repo into your projects folder on your computer
3. Open up VS Code
4. In the terminal, run `cd code` to change into the code folder
5. Install the dependencies needed for react by running `npm install`
6. Run the react development server by running `npm start`

## Hints and tips to complete the project 🤓

Since the brief for this project is fairly broad, you should start by figuring out what you want to do with that data you get back from the product API. Try to keep the scope small to start with - perhaps start by just hooking up the `BarcodeScanner` component to get a code and send that code to the product API. Once you know how it works, come up with a plan for how to put that data into Redux, and how you want to use the data.

Don't be afraid of storing lots of information in redux - you can store the entire product response in your store so you always have all the product information at hand.

### Scanning barcodes

In src/components, you'll find a premade `BarcodeScanner` component. When mounted, this component tries to use the webcam to scan barcodes. Since you probably don't want the camera running all the time, you probably want to conditionally show the component after the user clicks a button.

When the `BarcodeScanner` component sucessfully scans a barcode, it invokes a callback function with the barcode code. Here's an example component which mounts the `BarcodeScanner` when a user clicks a button:

```jsx
import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)

  return (
    <>
      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
        }} />
      )}
    </>
  )
}
```

Once you have the barcode, you can pass that to the [Open world facts api](https://world.openfoodfacts.org/) to try to find information about that product.

### Fetching product data

The [Open world facts api](https://world.openfoodfacts.org/) is quite simple and only has one endpoint - `https://world.openfoodfacts.org/api/v0/product/[barcode].json` (where you replace `[barcode]` with the barcode number you got from the scanner).

If the product was found in the database, you'll get a massive response back with all sorts of information, including nutritional information, images, product name, tags, and other descriptions. [Here's an example response from a milk carton](https://world.openfoodfacts.org/api/v0/product/7310865071804.json).

## Requirements 🧪

Since the scope for this project is very broad, the enforced requirements are few. You're free to decide how many tools and what approaches you use!

* Use redux, preferably using a thunk to wrap your api call (but you don't have to if you don't want to).
* Focus on making the UX of your app good. Handle when a product isn't found. Try to display relevant information about products and not overload your page with data.
* Your page should be responsive.
* Code follows Technigo’s code guidelines.
* Contribute by helping others with this project on Stack Overflow.
* If selected; demo your solution for your team.


## How to hand in the code 🎯

* When you’re finished with the project, push your code to GitHub with these commands:

  ```
  git add .
  git commit -m "your commit message"
  git push origin master
  ```

* Navigate to your repo and create a Pull Request into the Technigo repo (Add a link to your deployed project.)
* Wait for the code review from your teachers

## How to get help 🆘

Ask for help and share your knowledge about this project with the 'project-nutrition' tag on [Stack Overflow](https://stackoverflow.com/c/technigo/questions). Talk to your team on Slack and help each other out. Do some research about your problem, you are surely not the first one with this problem, Google is your friend 🙂. And you can of course also book a tech call. 

## Stretch Goals 🏃‍♂

Stretch goals are really up to you this time. Perhaps you want to use [react router](https://reacttraining.com/react-router/web/guides/quick-start), or persist your redux store to localstorage so the app data remains when you reload the page, or perhaps you want to focus more on design and make or use a design library (for example [material-ui](https://material-ui.com/)). You could also improve the `BarcodeScanner` component to make the scanning experience nicer.

#### 🚨 Don't forget to add, commit and push the changes to GitHub when you're done. 🏁
