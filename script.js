var titleHeading = document.getElementById("titleHeading");
var inventoryHeading = document.getElementById("inventoryHeading");
var shoeImage = document.getElementById("shoeImage");
var shoesLabel = document.getElementById("shoesLabel");
var numOfShoesElement = document.getElementById("numOfShoes");
var shoesPerClickLabel = document.getElementById("shoesPerClickLabel");
var shoesPerClickElement = document.getElementById("shoesPerClick");
var luckyRing = document.getElementById("luckyRing");
var shoesPerClickUpgradeButton = document.getElementById("upgradeSpc");
var twoPercentDoubleShoesButton = document.getElementById("twoPercentDoubleShoes");
var inventoryButton = document.getElementById("inventory");
var backToHomeButton = document.getElementById("backToHome");
var shoesPerClickUpgradeCost = 50;
var luckyRingUpgradeCost = 5000;
var luckyRingSpecialChance = 0.02;
var obtainedLuckyRing = false;

titleHeading.style.display = "block";
inventoryHeading.style.display = "none";
shoeImage.style.display = "block";
shoesLabel.style.display = "block";
numOfShoesElement.style.display = "block";
shoesPerClickLabel.style.display = "block";
shoesPerClickElement.style.display = "block";
luckyRing.style.display = "none";
shoesPerClickUpgradeButton.style.display = "block";
twoPercentDoubleShoesButton.style.display = "block";
backToHomeButton.style.display = "none";
inventoryButton.style.display = "none";

function clickOnce() {
    numOfShoesElement.innerHTML = Number(numOfShoesElement.innerHTML) + Number(shoesPerClickElement.innerHTML);
    if (obtainedLuckyRing == true) {
        if (Math.random() < luckyRingSpecialChance) {
            alert("[🍀] | Your lucky ring gave you double shoes!");
            numOfShoesElement.innerHTML = Number(numOfShoesElement.innerHTML) + (Number(shoesPerClickElement.innerHTML)) * 2;
        }
    }
}

function upgradeSpc(answer) {
    if (Number(numOfShoesElement.innerHTML) < shoesPerClickUpgradeCost) {
        alert("You cannot afford this upgrade!");
    } else if (Number(numOfShoesElement.innerHTML) >= shoesPerClickUpgradeCost) {
        answer = prompt("Are you sure you would like to purchase this upgrade?");
        if (answer == "Yes" || answer == "yes" || answer == "YES") {
            numOfShoesElement.innerHTML = Number(numOfShoesElement.innerHTML) - shoesPerClickUpgradeCost;
            shoesPerClickElement.innerHTML *= 2;
            shoesPerClickUpgradeCost *= 2;
            shoesPerClickUpgradeButton.innerHTML = "Upgrade Shoes Per Click " + "(" + shoesPerClickUpgradeCost + " shoes)";
        } else {
            alert("Upgrade canceled.");
        }
    }
}

function twoPercentDoubleShoes(answer) {
    if (Number(numOfShoesElement.innerHTML) < luckyRingUpgradeCost) {
        alert("You cannot afford this upgrade!");
    } else if (Number(numOfShoesElement.innerHTML) >= luckyRingUpgradeCost) {
        answer = prompt("Are you sure you would like to purchase this upgrade?");
        if (answer == "Yes" || answer == "yes" || answer == "YES") {
            numOfShoesElement.innerHTML = Number(numOfShoesElement.innerHTML) - luckyRingUpgradeCost;
            obtainedLuckyRing = true;
            inventoryButton.style.display = "block";
            alert("You've just unlocked your inventory! Go navigate to it to see how it looks!");
        } else {
            alert("Upgrade canceled.");
        }
    }
}

function inventoryOpen() {
    titleHeading.style.display = "none";
    inventoryHeading.style.display = "block";
    shoeImage.style.display = "none";
    shoesLabel.style.display = "none";
    numOfShoesElement.style.display = "none";
    shoesPerClickLabel.style.display = "none";
    shoesPerClickElement.style.display = "none";
    shoesPerClickUpgradeButton.style.display = "none";
    twoPercentDoubleShoesButton.style.display = "none";
    backToHomeButton.style.display = "block";
    inventoryButton.style.display = "none";
    if (obtainedLuckyRing == true) {
        luckyRing.style.display = "block";
    }
}

function backToHome() {
    titleHeading.style.display = "block";
    inventoryHeading.style.display = "none";
    shoeImage.style.display = "block";
    shoesLabel.style.display = "block";
    numOfShoesElement.style.display = "block";
    shoesPerClickLabel.style.display = "block";
    shoesPerClickElement.style.display = "block";
    luckyRing.style.display = "none";
    shoesPerClickUpgradeButton.style.display = "block";
    twoPercentDoubleShoesButton.style.display = "block";
    backToHomeButton.style.display = "none";
    inventoryButton.style.display = "block";
}