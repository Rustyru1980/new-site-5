import wixData from "wix-data"
import wixAnimations from "wix-animations"

$w.onReady(function () {
    // Triggers when value of slider element changes
    $w("#priceSlider").onChange(() => {
        // Declaring variable for the slider's value
        const maxPrice = $w('#priceSlider').value;
        // Filters the data set to only show products with a price that is
        // less than the current value of the slider
        $w('#productsDataset').setFilter(wixData.filter().le('price', maxPrice));
    })
    // Triggers when typing into the text input element
    $w("#searchBox").onInput(() => {
        // Filters the dataset to only display products which contain the value entered
        // into the input element in their name
        $w("#productsDataset").setFilter(wixData.filter().contains("name", $w("#searchBox").value))
    })

    // Triggers when changing the value of dropdown element
    $w("#priceSort").onChange(() => {
        // Declares variable for dropdown value
        let sortOrder = $w("#priceSort").value;
        // Checks if the value chosen is "ascending" 
        // Dropown options can have different labels to their values
        if (sortOrder === "ascending") {
            $w("#productsDataset").setSort(wixData.sort().ascending("price"))
        } else {
            $w("#productsDataset").setSort(wixData.sort().descending("price"))
        }
    })
    // Triggers when the data assigned to the repeater has loaded/is ready.
    $w("#repeater1").onItemReady(($item, itemData) => {
        // Checks each item to see if the price is less than 30
        if (itemData.price < 30) {
            // If it is, show this text element
            $item("#bargain").show()
        }

        $item("#imageX2").onMouseIn(() => {
            const animation = wixAnimations.timeline()
            animation.add($item("#imageX2"), {
                duration: 1500,
                scale: 1.5,
            })
			animation.play()
        })
    })

});