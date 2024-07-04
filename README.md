[![Netlify Status](https://api.netlify.com/api/v1/badges/626af698-2379-4cfc-888c-3c502fad8f08/deploy-status)](https://app.netlify.com/sites/coffee-cart/deploys)

# Coffee cart

This app is deployed for QA course basic module.

## Special actions you can do
1. **Double click** on coffee title to translate it to Chinese.
2. **Right click** on coffee icon to open an add to cart `<dialog>`.
3. [Desktop only] **Hover** over Pay button will show a quick cart preview, click to add or remove items.
4. A random promo coffee pop up show up when adding every 3rd items to the cart. (e.g. 3, 6, 9, ...)
5. The add to cart process will be slowing down (intentionally) when the cart has more than 7 items.

## The app contains a list of bugs:

1. "Espresso Macchiato" coffees added to the cart when clicking on the cup.
2. 2 extra coffees added to the cart instead of 1 when clicking '+' for any coffee in the list.
3. Button 'x' does not remove coffee from the cart list.
4. "(Discounted) Mocha" has 5$ price instead of 4$ after it was added to the cart.
5. "(Discounted) Mocha" added to the cart when "Nah, I'll skip was clicked". 
6. "Contact us" link navigates to the Cart page.
7. Wrong spelling in the message "No coffee, go add some."
8. "Cappuccino" is not translated to Chinese. 
9. "Cafe Latte" is not added to the Cart after clicking on the cup.
10. "Espresso Con Panna" was added to the cart when clicking on "Cafe Breve" cup. 


## Getting started with this repo

1. Download the project.
2. Switch to "version1" branch.
3. Run `npm ci`.
4. Run `npm run build` to build the app.
5. Run `npm run serve` to start build version.
