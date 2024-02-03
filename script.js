var tabTitle = document.getElementById("tabTitle");
var titleHeading = document.getElementById("titleHeading");
var inventoryHeading = document.getElementById("inventoryHeading");
var shoeImage = document.getElementById("shoeImage");
var shoesLabel = document.getElementById("shoesLabel");
var numOfShoesElement = document.getElementById("numOfShoes");
var shoesPerClickLabel = document.getElementById("shoesPerClickLabel");
var shoesPerClickElement = document.getElementById("shoesPerClick");
var luckyRingInventoryText = document.getElementById("luckyRing");
var shoesPerClickUpgradeButton = document.getElementById("upgradeSpc");
var doubleShoesAlert = document.getElementById("doubleShoesAlert");
var luckyRingMaxUpgradeReachedAlert = document.getElementById("luckyRingMaxUpgradeReachedAlert");
var cannotAffordUpgradeAlert = document.getElementById("cannotAffordUpgradeAlert");
var twoPercentDoubleShoesButton = document.getElementById("twoPercentDoubleShoes");
var unlockAutomationButton = document.getElementById("unlockAutomation");
var inventoryButton = document.getElementById("inventory");
var backToHomeButton = document.getElementById("backToHome");
var shoesPerClickUpgradeCost = 50;
var luckyRingUpgradeCost = 5000;
var luckyRingSpecialChance = 0.02;
var luckyRingUpgradeLimit = 0.16;
var obtainedLuckyRing = false;
var obtainedAutomation = false;
var unlockAutomationUpgradeCost = 1000000;

titleHeading.style.display = "block";
inventoryHeading.style.display = "none";
shoeImage.style.display = "block";
shoesLabel.style.display = "block";
numOfShoesElement.style.display = "block";
shoesPerClickLabel.style.display = "block";
shoesPerClickElement.style.display = "block";
luckyRingInventoryText.style.display = "none";
shoesPerClickUpgradeButton.style.display = "block";
doubleShoesAlert.style.display = "none";
cannotAffordUpgradeAlert.style.display = "none";
luckyRingMaxUpgradeReachedAlert.style.display = "none";
twoPercentDoubleShoesButton.style.display = "block";
unlockAutomationButton.style.display = "none";
backToHomeButton.style.display = "none";
inventoryButton.style.display = "none";

setNumOfShoes(0);

function clickOnce() {

    setNumOfShoes(Number(numOfShoesElement.innerHTML) + Number(shoesPerClickElement.innerHTML));
    if (obtainedLuckyRing == true) {
        if (Math.random() < luckyRingSpecialChance) {
            doubleShoesAlert.style.display = "block";
            setTimeout(() => {
                doubleShoesAlert.style.display = "none";
            }, 1000);
            setNumOfShoes(Number(numOfShoesElement.innerHTML) + (Number(shoesPerClickElement.innerHTML)) * 2);
        }
    }

}

function upgradeSpc() {

    if (Number(numOfShoesElement.innerHTML) < shoesPerClickUpgradeCost) {
        cannotAffordUpgradeAlert.style.display = "block";
        setTimeout(() => {
            cannotAffordUpgradeAlert.style.display = "none";
        }, 1000);
    } else if (Number(numOfShoesElement.innerHTML) >= shoesPerClickUpgradeCost) {
        setNumOfShoes(Number(numOfShoesElement.innerHTML) - shoesPerClickUpgradeCost);
        shoesPerClickElement.innerHTML *= 2;
        shoesPerClickUpgradeCost *= 2;
        shoesPerClickUpgradeButton.innerHTML = "Upgrade Shoes Per Click " + "(" + shoesPerClickUpgradeCost + " shoes)";
    }

}

function twoPercentDoubleShoes() {

    if (obtainedLuckyRing == false) {
        buyLuckyRing();
    } else {
        upgradeLuckyRing();
    }

}

function buyLuckyRing() {

    if (Number(numOfShoesElement.innerHTML) < luckyRingUpgradeCost) {
        cannotAffordUpgradeAlert.style.display = "block";
        setTimeout(() => {
            cannotAffordUpgradeAlert.style.display = "none";
        }, 1000);
    } else if (Number(numOfShoesElement.innerHTML) >= luckyRingUpgradeCost) {
        setNumOfShoes(Number(numOfShoesElement.innerHTML) - luckyRingUpgradeCost);
        obtainedLuckyRing = true;
        inventoryButton.style.display = "block";
        unlockAutomationButton.style.display = "block";
        luckyRingUpgradeCost *= 4;
        twoPercentDoubleShoesButton.innerHTML = "Upgrade Lucky Ring " + "(" + luckyRingUpgradeCost + " shoes)";
    }

}

function upgradeLuckyRing() {

    if (Number(numOfShoesElement.innerHTML) < luckyRingUpgradeCost) {
        cannotAffordUpgradeAlert.style.display = "block";
        setTimeout(() => {
            cannotAffordUpgradeAlert.style.display = "none";
        }, 1000);
    } else if (Number(numOfShoesElement.innerHTML) >= luckyRingUpgradeCost) {
        setNumOfShoes(Number(numOfShoesElement.innerHTML) - luckyRingUpgradeCost);
        luckyRingUpgradeCost *= 4;
        luckyRingSpecialChance *= 2;

        if (luckyRingSpecialChance >= luckyRingUpgradeLimit) {
            luckyRingMaxUpgradeReachedAlert.style.display = "block";
            setTimeout(() => {
                luckyRingMaxUpgradeReachedAlert.style.display = "none";
            }, 1000);
            twoPercentDoubleShoesButton.style.display = "none";
        }

        luckyRingInventoryText.innerHTML = "Lucky Ring [x1] | Grants a " + (luckyRingSpecialChance * 100) + "%" + " chance of obtaining double shoes";
        twoPercentDoubleShoesButton.innerHTML = "Upgrade Lucky Ring " + "(" + luckyRingUpgradeCost + " shoes)";
    }

}

function unlockAutomation() {

    if (obtainedAutomation == false) {
        buyAutomation();
    }

}

function buyAutomation() {

    if (Number(numOfShoesElement.innerHTML) < unlockAutomationUpgradeCost) {
        cannotAffordUpgradeAlert.style.display = "block";
        setTimeout(() => {
            cannotAffordUpgradeAlert.style.display = "none";
        }, 1000);
    } else if (Number(numOfShoesElement.innerHTML) >= unlockAutomationUpgradeCost) {
        setNumOfShoes(Number(numOfShoesElement.innerHTML) - unlockAutomationUpgradeCost);
        obtainedAutomation = true;
        unlockAutomationButton.style.display = "none";
    }

}

function setNumOfShoes(value) {

    numOfShoesElement.innerHTML = value;
    tabTitle.innerHTML = value + " shoes - Shoe Clicker";
    
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
    unlockAutomationButton.style.display = "none";
    backToHomeButton.style.display = "block";
    inventoryButton.style.display = "none";

    if (obtainedLuckyRing == true) {
        luckyRingInventoryText.style.display = "block";
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
    luckyRingInventoryText.style.display = "none";
    shoesPerClickUpgradeButton.style.display = "block";

    if (luckyRingSpecialChance >= luckyRingUpgradeLimit) {
        twoPercentDoubleShoesButton.style.display = "none";
    } else {
        twoPercentDoubleShoesButton.style.display = "block";
    }

    unlockAutomationButton.style.display = "block";
    backToHomeButton.style.display = "none";
    inventoryButton.style.display = "block";

}