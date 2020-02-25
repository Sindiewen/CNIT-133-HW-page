// Enable the tooltip jquery
$(function(){
    $(document).tooltip();
});


/// <Summary>
/// Processes the input from the user
/// </Summary
function process()
{
    // Variables
    // ID Holders
    var itemIDArr = ["item1", "item2", "item3", "item4"];
    var numberSoldIDArr = ["item1NumberSold", "item2NumberSold", "item3NumberSold", "item4NumberSold"];
    var totalIDArr = ["item1Total", "item2Total", "item3Total", "item4Total"];
    var itemErrorAreaIDs = ["itemErrorArea1", "itemErrorArea2", "itemErrorArea3", "itemErrorArea4"];

    // Item costs
    var itemCostsArr = [239.99, 129.75, 99.95, 350.89];

    // item totals and numbers storage
    var itemNumberSoldArr = [];
    var itemTotalsArr = [];

    // totals
    var totalAmmountSold = 0;

    // error flag
    var errorHitFlag = false;

    // Get values from each item input, store the ammounts in the item total array.
    for (var i = 0; i < itemIDArr.length; ++i)
    {
        // get item, calculate cost
        var curValue = document.getElementById(itemIDArr[i]).value;

        // Negative number input
        if (curValue < 0 || isNaN(curValue))
        {
            document.getElementById(itemErrorAreaIDs[i]).innerHTML = "Number must be 0 or Positive.";
            errorHitFlag = true;
        }
        // Succeed input
        else if (!errorHitFlag)
        {
            var totalAmt = itemCostsArr[i] * curValue;

            // store ammounts
            itemNumberSoldArr.push(curValue);
            itemTotalsArr.push(totalAmt.toFixed(2));

            // Update total amount
            totalAmmountSold += curValue;
        }

    }

    // Display values 
    for (var i = 0; i < itemIDArr.length && !errorHitFlag; ++i)
    {
        // display to boxes
        document.getElementById(numberSoldIDArr[i]).value = itemNumberSoldArr[i];
        document.getElementById(totalIDArr[i]).value = "\$" + itemTotalsArr[i];
    
        // Display total amount sold
        document.getElementById("totalAmmountSold").value = "\$" + totalAmmountSold;
    }
}