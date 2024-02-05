var tabTitle = document.getElementById("tabTitle");
var titleHeading = document.getElementById("titleHeading");
var inventoryHeading = document.getElementById("inventoryHeading");
var shoeImage = document.getElementById("shoeImage");
var shoesLabel = document.getElementById("shoesLabel");
var numOfShoesElement = document.getElementById("numOfShoes");
var shoesPerClickLabel = document.getElementById("shoesPerClickLabel");
var shoesPerClickElement = document.getElementById("shoesPerClick");
var shoesGainedAutomaticallyLabel = document.getElementById("shoesGainedAutomaticallyLabel");
var shoesGainedAutomaticallyElement = document.getElementById("shoesGainedAutomatically");
var luckyRingInventoryText = document.getElementById("luckyRing");
var shoesPerClickUpgradeButton = document.getElementById("upgradeSpc");
var doubleShoesAlert = document.getElementById("doubleShoesAlert");
var luckyRingMaxUpgradeReachedAlert = document.getElementById("luckyRingMaxUpgradeReachedAlert");
var cannotAffordUpgradeAlert = document.getElementById("cannotAffordUpgradeAlert");
var twoPercentDoubleShoesButton = document.getElementById("twoPercentDoubleShoes");
var unlockAutomationButton = document.getElementById("unlockAutomation");
var inventoryButton = document.getElementById("inventory");
var backToHomeButton = document.getElementById("backToHome");
var hireWorkerButton = document.getElementById("hireWorker");
var buyFarmButton = document.getElementById("buyFarm");
var buyTentButton = document.getElementById("buyTent");
var shoesPerSecond = 0;
var numOfShoes = 0;
var shoesPerClickUpgradeCost = 50;
var luckyRingUpgradeCost = 5000;
var luckyRingSpecialChance = 0.02;
var luckyRingUpgradeLimit = 0.16;
var obtainedLuckyRing = false;
var obtainedAutomation = false;
var unlockAutomationUpgradeCost = 1000000;
var numOfWorkers = 0;
var hireWorkerCost = 5000000;
var numOfFarms = 0;
var buyFarmCost = 20000000;
var numOfTents = 0;
var buyTentCost = 500000000;

titleHeading.style.display = "block";
inventoryHeading.style.display = "none";
shoeImage.style.display = "block";
shoesLabel.style.display = "block";
numOfShoesElement.style.display = "block";
shoesPerClickLabel.style.display = "block";
shoesPerClickElement.style.display = "block";
shoesGainedAutomaticallyLabel.style.display = "none";
shoesGainedAutomaticallyElement.style.display = "none";
luckyRingInventoryText.style.display = "none";
shoesPerClickUpgradeButton.style.display = "block";
doubleShoesAlert.style.display = "none";
cannotAffordUpgradeAlert.style.display = "none";
luckyRingMaxUpgradeReachedAlert.style.display = "none";
twoPercentDoubleShoesButton.style.display = "block";
unlockAutomationButton.style.display = "none";
hireWorkerButton.style.display = "none";
buyFarmButton.style.display = "none";
buyTentButton.style.display = "none";
backToHomeButton.style.display = "none";
inventoryButton.style.display = "none";

setNumOfShoes(0);

function clickOnce() {

    setNumOfShoes(numOfShoes + Number(shoesPerClickElement.innerHTML));
    if (obtainedLuckyRing == true) {
        if (Math.random() < luckyRingSpecialChance) {
            doubleShoesAlert.style.display = "block";
            setTimeout(() => {
                doubleShoesAlert.style.display = "none";
            }, 1000);
            setNumOfShoes(numOfShoes + (Number(shoesPerClickElement.innerHTML)) * 2);
        }
    }

}

function upgradeSpc() {

    if (numOfShoes < shoesPerClickUpgradeCost) {
        cannotAffordUpgradeAlert.style.display = "block";
        setTimeout(() => {
            cannotAffordUpgradeAlert.style.display = "none";
        }, 1000);
    } else if (numOfShoes >= shoesPerClickUpgradeCost) {
        setNumOfShoes(numOfShoes - shoesPerClickUpgradeCost);
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

    if (numOfShoes < luckyRingUpgradeCost) {
        cannotAffordUpgradeAlert.style.display = "block";
        setTimeout(() => {
            cannotAffordUpgradeAlert.style.display = "none";
        }, 1000);
    } else if (numOfShoes >= luckyRingUpgradeCost) {
        setNumOfShoes(numOfShoes - luckyRingUpgradeCost);
        obtainedLuckyRing = true;
        inventoryButton.style.display = "block";
        unlockAutomationButton.style.display = "block";
        luckyRingUpgradeCost *= 4;
        twoPercentDoubleShoesButton.innerHTML = "Upgrade Lucky Ring " + "(" + luckyRingUpgradeCost + " shoes)";
    }

}

function upgradeLuckyRing() {

    if (numOfShoes < luckyRingUpgradeCost) {
        cannotAffordUpgradeAlert.style.display = "block";
        setTimeout(() => {
            cannotAffordUpgradeAlert.style.display = "none";
        }, 1000);
    } else if (numOfShoes >= luckyRingUpgradeCost) {
        setNumOfShoes(numOfShoes - luckyRingUpgradeCost);
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

    if (numOfShoes < unlockAutomationUpgradeCost) {
        cannotAffordUpgradeAlert.style.display = "block";
        setTimeout(() => {
            cannotAffordUpgradeAlert.style.display = "none";
        }, 1000);
    } else if (numOfShoes >= unlockAutomationUpgradeCost) {
        setNumOfShoes(numOfShoes - unlockAutomationUpgradeCost);
        obtainedAutomation = true;
        unlockAutomationButton.style.display = "none";
        hireWorkerButton.style.display = "block";
        buyFarmButton.style.display = "block";
        buyTentButton.style.display = "block";
        shoesGainedAutomaticallyLabel.style.display = "block";
        shoesGainedAutomaticallyElement.style.display = "block";
    }

}

function hireWorker() {

    if (numOfShoes < hireWorkerCost) {
        cannotAffordUpgradeAlert.style.display = "block";
        setTimeout(() => {
            cannotAffordUpgradeAlert.style.display = "none";
        }, 1000);
    } else if (numOfShoes >= hireWorkerCost) {
        setNumOfShoes(numOfShoes - hireWorkerCost);
        numOfWorkers += 1;
        shoesPerSecond += 500;
        shoesGainedAutomaticallyElement.innerHTML = shoesPerSecond;
        hireWorkerButton.innerHTML = "[x" + numOfWorkers + "] " + "Hire Worker (5,000,000 shoes)";
    }

}

function increaseShoes() {
    setInterval(() => {
        setNumOfShoes(numOfShoes + shoesPerSecond);
    }, 1000);
}

increaseShoes();

function buyFarm() {



}

function buyTent() {



}

function setNumOfShoes(value) {

    numOfShoes = value;
    numOfShoesElement.innerHTML = numOfShoes;
    tabTitle.innerHTML = numOfShoes + " shoes | Shoe Clicker";
    
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

    if (obtainedAutomation == true) {
        hireWorkerButton.style.display = "none";
        buyFarmButton.style.display = "none";
        buyTentButton.style.display = "none";
        shoesGainedAutomaticallyLabel.style.display = "none";
        shoesGainedAutomaticallyElement.style.display = "none";
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

    if (obtainedAutomation == true) {
        hireWorkerButton.style.display = "block";
        buyFarmButton.style.display = "block";
        buyTentButton.style.display = "block";
        shoesGainedAutomaticallyLabel.style.display = "block";
        shoesGainedAutomaticallyElement.style.display = "block";
    }

    unlockAutomationButton.style.display = "block";
    backToHomeButton.style.display = "none";
    inventoryButton.style.display = "block";

}