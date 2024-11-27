const containerEl = document.getElementById("container");


function costEstimate(masonNo, perDayWage){

    const totalCost = masonNo * perDayWage;
    return totalCost;
}

costValue = costEstimate(5,500);
containerEl.innerText = "Total masonry labor cost: " + costValue + " BDT";