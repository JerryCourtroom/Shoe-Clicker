//IMPORTANT: If something doesn't fit in your code, use a setInterval(). Most games use loops (ex. Minecraft's code is all in ONE setInterval()).
//IMPORTANT: NEVER combine a ".innerHTML" with a number on the right side of assigning a variable. You can treat numbers as strings, but never strings as numbers.
//IMPORTANT: localStorage does NOT need to store elements because they are already in HTML file.
//IMPORTANT: requestAnimationFrame() should be understood as based off of setTimeout(), except it calls a function right when the browser is ready. It only calls ONCE.

var tabTitle = document.getElementById("tabTitle");
var titleHeading = document.getElementById("titleHeading");
var inventoryHeading = document.getElementById("inventoryHeading");
var workerPageHeading = document.getElementById("workerPageHeading");
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
var workersObtainEmotionsAlert = document.getElementById("workersObtainEmotionsAlert");
var outOfWorkersAlert = document.getElementById("outOfWorkersAlert");
var cannotExcuseWorkersAlert = document.getElementById("cannotExcuseWorkersAlert");
var workerStatusLabel = document.getElementById("currentWorkerStatusLabel");
var workerStatusElement = document.getElementById("currentWorkerStatus");
var numOfWorkersAtFarmLabel = document.getElementById("numOfWorkersAtFarmLabel");
var numOfWorkersAtFarmElement = document.getElementById("numOfWorkersAtFarm");
var numOfWorkersAtTentLabel = document.getElementById("numOfWorkersAtTentLabel");
var numOfWorkersAtTentElement = document.getElementById("numOfWorkersAtTent");
var numOfWorkersAtShackLabel = document.getElementById("numOfWorkersAtShackLabel");
var numOfWorkersAtShackElement = document.getElementById("numOfWorkersAtShack");
var asciiFarm = document.getElementById("asciiFarm");
var asciiTent = document.getElementById("asciiTent");
var asciiShack = document.getElementById("asciiShack");
var asciiFarmOpen = document.getElementById("asciiFarmOpen");
var asciiTentOpen = document.getElementById("asciiTentOpen");
var asciiShackOpen = document.getElementById("asciiShackOpen");
var twoPercentDoubleShoesButton = document.getElementById("twoPercentDoubleShoes");
var unlockAutomationButton = document.getElementById("unlockAutomation");
var inventoryButton = document.getElementById("inventory");
var manageWorkersButton = document.getElementById("manageWorkers");
var totalNumOfWorkersElement = document.getElementById("totalNumOfWorkers");
var totalNumOfWorkersLabel = document.getElementById("totalNumOfWorkersLabel");
var appointWorkersToFarmButton = document.getElementById("appointWorkersToFarm");
var appointWorkersToTentButton = document.getElementById("appointWorkersToTent");
var appointWorkersToShackButton = document.getElementById("appointWorkersToShack");
var excuseWorkersFromFarmButton = document.getElementById("excuseWorkersFromFarm");
var excuseWorkersFromTentButton = document.getElementById("excuseWorkersFromTent");
var excuseWorkersFromShackButton = document.getElementById("excuseWorkersFromShack");
var backToHomeButton = document.getElementById("backToHome");
var hireWorkerButton = document.getElementById("hireWorker");
var buyFarmButton = document.getElementById("buyFarm");
var buyTentButton = document.getElementById("buyTent");
var buyShackButton = document.getElementById("buyShack");
var shoesPerClickIterationNumber = 1;
var luckyRingIterationNumber = 1;
var unlockAutomationIterationNumber = 1;
var workerIterationNumber = 1;
var farmIterationNumber = 1;
var tentIterationNumber = 1;
var shackIterationNumber = 1;
var shoesPerSecond = 0;
var shoesPerClick = 1;
var numOfShoes = 0;
var shoesPerClickUpgradeCost = 20;
var luckyRingUpgradeCost = 150;
var luckyRingSpecialChance = 0.02;
var luckyRingUpgradeLimit = 0.16;
var obtainedLuckyRing = false;
var obtainedAutomation = false;
var obtainedStatus = false;
var isInventoryOpen = false;
var isWorkerPageOpen = false;
var unlockAutomationUpgradeCost = 2000;
var numOfWorkers = 0;
var hireWorkerCost = 2775;
var numOfFarms = 0;
var buyFarmCost = 15770;
var numOfTents = 0;
var buyTentCost = 127095;
var obtainedShack = false;
var numOfShacks = 0;
var buyShackCost = 1000110;
var workerStatusNumber = 10;
var totalNumOfWorkersRemaining = 0;
var numOfWorkersAtFarm = 0;
var numOfWorkersAtTent = 0;
var numOfWorkersAtShack = 0;

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
workersObtainEmotionsAlert.style.display = "none";
outOfWorkersAlert.style.display = "none";
cannotExcuseWorkersAlert.style.display = "none";
workerStatusLabel.style.display = "none";
workerStatusElement.style.display = "none";
workerPageHeading.style.display = "none";
appointWorkersToFarmButton.style.display = "none";
appointWorkersToTentButton.style.display = "none";
appointWorkersToShackButton.style.display = "none";
excuseWorkersFromFarmButton.style.display = "none";
excuseWorkersFromTentButton.style.display = "none";
excuseWorkersFromShackButton.style.display = "none";
twoPercentDoubleShoesButton.style.display = "block";
unlockAutomationButton.style.display = "none";
hireWorkerButton.style.display = "none";
buyFarmButton.style.display = "none";
buyTentButton.style.display = "none";
buyShackButton.style.display = "none";
backToHomeButton.style.display = "none";
inventoryButton.style.display = "none";
manageWorkersButton.style.display = "none";
totalNumOfWorkersElement.style.display = "none";
totalNumOfWorkersLabel.style.display = "none";
numOfWorkersAtFarmLabel.style.display = "none";
numOfWorkersAtFarmElement.style.display = "none";
numOfWorkersAtTentLabel.style.display = "none";
numOfWorkersAtTentElement.style.display = "none";
numOfWorkersAtShackLabel.style.display = "none";
numOfWorkersAtShackElement.style.display = "none";
asciiFarm.style.display = "none";
asciiTent.style.display = "none";
asciiShack.style.display = "none";
asciiFarmOpen.style.display = "none";
asciiTentOpen.style.display = "none";
asciiShackOpen.style.display = "none";

setNumOfShoes(0);

function calculateShoesPerClickCost(value) {
    return 2.5*(value**2)+17.5*value;
}

function calculateLuckyRingCost(value) {
    return 62.5*(value**2)+87.5*value;
}

function calculateWorkerCost(value) {
    return 2.5*(value**2)+162.5*value+2610;
}

function calculateFarmCost(value) {
    return 2.5*(value**2)+392.5*value+15375;
}

function calculateTentCost(value) {
    return 2.5*(value**2)+1122.5*value+125970;
}

function calculateShackCost(value) {
    return 2.5*(value**2)+3157.5*value+996950;
}

function setNumOfShoes(value) {

    if (isInventoryOpen == false && isWorkerPageOpen  == false) {
        numOfShoes = value;
        numOfShoesElement.innerHTML = numOfShoes;
        tabTitle.innerHTML = numOfShoes + " shoes | Shoe Clicker";
    } else if (isInventoryOpen == true) {
        numOfShoes = value;
        numOfShoesElement.innerHTML = numOfShoes;
        tabTitle.innerHTML = "Inventory | Shoe Clicker";
    } else if (isWorkerPageOpen == true) {
        numOfShoes = value;
        numOfShoesElement.innerHTML = numOfShoes;
        tabTitle.innerHTML = "Worker Management | Shoe Clicker";
    }
    
}

function clickOnce() {

    if (obtainedLuckyRing == true) {
        if (Math.random() < luckyRingSpecialChance) {
            doubleShoesAlert.style.display = "block";
            setTimeout(() => {
                doubleShoesAlert.style.display = "none";
            }, 1000);
            setNumOfShoes(numOfShoes + (shoesPerClick * 2));
        } else {
            setNumOfShoes(numOfShoes + shoesPerClick);
        }
    } else {
        setNumOfShoes(numOfShoes + shoesPerClick);
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
        shoesPerClickIterationNumber += 1;
        shoesPerClick += 1;
        shoesPerClickUpgradeCost = calculateShoesPerClickCost(shoesPerClickIterationNumber);
        shoesPerClickUpgradeButton.innerHTML = "Upgrade Shoes per Click " + "(" + shoesPerClickUpgradeCost + " shoes)";
    }

}

function increaseShoesPerClick() {
    setInterval(() => {
        setShoesPerClick(shoesPerClick);
    }, 1000);
}

increaseShoesPerClick();

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
        luckyRingIterationNumber += 1;
        luckyRingUpgradeCost = calculateLuckyRingCost(luckyRingIterationNumber);
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
        luckyRingIterationNumber += 1;
        luckyRingUpgradeCost = calculateLuckyRingCost(luckyRingIterationNumber);
        luckyRingSpecialChance *= 2;

        if (luckyRingSpecialChance >= luckyRingUpgradeLimit) {
            luckyRingMaxUpgradeReachedAlert.style.display = "block";
            setTimeout(() => {
                luckyRingMaxUpgradeReachedAlert.style.display = "none";
            }, 1000);
            twoPercentDoubleShoesButton.style.display = "none";
        }

        luckyRingInventoryText.innerHTML = "[💍] Lucky Ring [x1] | Grants a " + (luckyRingSpecialChance * 100) + "%" + " chance of obtaining double shoes";
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
        unlockAutomationIterationNumber += 1;
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
        workerIterationNumber += 1;
        hireWorkerCost = calculateWorkerCost(workerIterationNumber);
        numOfWorkers += 1;
        totalNumOfWorkersRemaining += 1;
        shoesPerSecond += 10;
        shoesGainedAutomaticallyElement.innerHTML = shoesPerSecond;
        hireWorkerButton.innerHTML = "[x" + numOfWorkers + "] " + "Hire Worker (" + hireWorkerCost + " shoes)";
    }

}

function increaseShoes() {
    setInterval(() => {
        setNumOfShoes(numOfShoes + shoesPerSecond);
    }, 1000);
}

increaseShoes();

function buyFarm() {

    if (numOfShoes < buyFarmCost) {
        cannotAffordUpgradeAlert.style.display = "block";
        setTimeout(() => {
            cannotAffordUpgradeAlert.style.display = "none";
        }, 1000);
    } else if (numOfShoes >= buyFarmCost) {
        setNumOfShoes(numOfShoes - buyFarmCost);
        farmIterationNumber += 1;
        buyFarmCost = calculateFarmCost(farmIterationNumber);
        numOfFarms += 1;
        shoesPerSecond += 50;
        shoesGainedAutomaticallyElement.innerHTML = shoesPerSecond;
        if (numOfWorkersAtFarm > 0) {
            buyFarmButton.innerHTML = "[x" + numOfFarms + "] " + "Buy Farm (" + buyFarmCost + " shoes)" + "(+" + numOfWorkersAtFarm + " worker(s))";
        } else {
            buyFarmButton.innerHTML = "[x" + numOfFarms + "] " + "Buy Farm (" + buyFarmCost + " shoes)";
        }
    }

}

function buyTent() {

    if (numOfShoes < buyTentCost) {
        cannotAffordUpgradeAlert.style.display = "block";
        setTimeout(() => {
            cannotAffordUpgradeAlert.style.display = "none";
        }, 1000);
    } else if (numOfShoes >= buyTentCost) {
        setNumOfShoes(numOfShoes - buyTentCost);
        tentIterationNumber += 1;
        buyTentCost = calculateTentCost(tentIterationNumber);
        numOfTents += 1;
        shoesPerSecond += 450;
        shoesGainedAutomaticallyElement.innerHTML = shoesPerSecond;
        buyTentButton.innerHTML = "[x" + numOfTents + "] " + "Buy Tent (" + buyTentCost + " shoes)";
        if (tentIterationNumber >= 16) {
            buyShackButton.style.display = "block";
        }
    }

}

function checkForShack() {

    if (obtainedShack == false) {
        buyShackWithAlert();
    } else {
        buyShack();
    }

}

function buyShackWithAlert() {

    if (numOfShoes < buyShackCost) {
        cannotAffordUpgradeAlert.style.display = "block";
        setTimeout(() => {
            cannotAffordUpgradeAlert.style.display = "none";
        }, 1000);
    } else if (numOfShoes >= buyShackCost) {
        setNumOfShoes(numOfShoes - buyShackCost);
        shackIterationNumber += 1;
        buyShackCost = calculateShackCost(shackIterationNumber);
        numOfShacks += 1;
        shoesPerSecond += 1210;
        shoesGainedAutomaticallyElement.innerHTML = shoesPerSecond;
        buyShackButton.innerHTML = "[x" + numOfShacks + "] " + "Buy Shack (" + buyShackCost + " shoes)";
        workersObtainEmotionsAlert.style.display = "block";
        setTimeout(() => {
            workersObtainEmotionsAlert.style.display = "none";
        }, 5000);
        workerStatusLabel.style.display = "block";
        workerStatusElement.style.display = "block";
        manageWorkersButton.style.display = "block";
        obtainedStatus = true;
        obtainedShack = true;
    }

}

function buyShack() {

    if (numOfShoes < buyShackCost) {
        cannotAffordUpgradeAlert.style.display = "block";
        setTimeout(() => {
            cannotAffordUpgradeAlert.style.display = "none";
        }, 1000);
    } else if (numOfShoes >= buyShackCost) {
        setNumOfShoes(numOfShoes - buyShackCost);
        shackIterationNumber += 1;
        buyShackCost = calculateShackCost(shackIterationNumber);
        numOfShacks += 1;
        shoesPerSecond += 1210;
        shoesGainedAutomaticallyElement.innerHTML = shoesPerSecond;
        buyShackButton.innerHTML = "[x" + numOfShacks + "] " + "Buy Shack (" + buyShackCost + " shoes)";
    }

}

setInterval(() => {

    if (workerStatusNumber <= 0) {
        tabTitle.innerHTML = "[💥] Strike!!! | Shoe Clicker";
    }
    if (numOfWorkersAtFarm > 0) {
        buyFarmButton.innerHTML = "[x" + numOfFarms + "] " + "Buy Farm (" + buyFarmCost + " shoes)" + "(+" + numOfWorkersAtFarm + " worker(s))";
    } else {
        buyFarmButton.innerHTML = "[x" + numOfFarms + "] " + "Buy Farm (" + buyFarmCost + " shoes)";
    }
    totalNumOfWorkersElement.innerHTML = totalNumOfWorkersRemaining;

}, 500);

//Loops saveGame
function saveGame() {

    //this function is always running!
    localStorage.setItem("numOfShoes", numOfShoes);
    localStorage.setItem("shoesPerClick", shoesPerClick);
    localStorage.setItem("shoesPerClickIterationNumber", shoesPerClickIterationNumber);
    localStorage.setItem("shoesPerClickUpgradeCost", shoesPerClickUpgradeCost);
    localStorage.setItem("luckyRingUpgradeCost", luckyRingUpgradeCost);
    localStorage.setItem("luckyRingIterationNumber", luckyRingIterationNumber);
    localStorage.setItem("luckyRingSpecialChance", luckyRingSpecialChance);
    localStorage.setItem("obtainedLuckyRing", obtainedLuckyRing);
    localStorage.setItem("luckyRingUpgradeLimit", luckyRingUpgradeLimit);
    localStorage.setItem("isInventoryOpen", isInventoryOpen);
    localStorage.setItem("unlockAutomationIterationNumber", unlockAutomationIterationNumber);
    localStorage.setItem("obtainedAutomation", obtainedAutomation);
    localStorage.setItem("unlockAutomationUpgradeCost", unlockAutomationUpgradeCost);
    localStorage.setItem("shoesPerSecond", shoesPerSecond);
    localStorage.setItem("workerIterationNumber", workerIterationNumber);
    localStorage.setItem("numOfWorkers", numOfWorkers);
    localStorage.setItem("hireWorkerCost", hireWorkerCost);
    localStorage.setItem("farmIterationNumber", farmIterationNumber);
    localStorage.setItem("numOfFarms", numOfFarms);
    localStorage.setItem("buyFarmCost", buyFarmCost);
    localStorage.setItem("tentIterationNumber", tentIterationNumber);
    localStorage.setItem("numOfTents", numOfTents);
    localStorage.setItem("buyTentCost", buyTentCost);
    localStorage.setItem("obtainedShack", obtainedShack);
    localStorage.setItem("shackIterationNumber", shackIterationNumber);
    localStorage.setItem("numOfShacks", numOfShacks);
    localStorage.setItem("buyShackCost", buyShackCost);
    localStorage.setItem("obtainedStatus", obtainedStatus);
    localStorage.setItem("workerStatusNumber", workerStatusNumber);
    localStorage.setItem("isWorkerPageOpen", isWorkerPageOpen);
    localStorage.setItem("totalNumOfWorkersRemaining", totalNumOfWorkersRemaining);
    localStorage.setItem("numOfWorkersAtFarm", numOfWorkersAtFarm);
    localStorage.setItem("numOfWorkersAtTent", numOfWorkersAtTent);
    localStorage.setItem("numOfWorkersAtShack", numOfWorkersAtShack);

    requestAnimationFrame(saveGame);

}

function importGame() {

    //runs right after browser reload, if the player is experienced
    shoesPerSecond = Number(localStorage.getItem("shoesPerSecond"));
    setNumOfShoes((Number(localStorage.getItem("numOfShoes"))) + (Number(localStorage.getItem("shoesPerSecond"))));
    setShoesPerClick(Number(localStorage.getItem("shoesPerClick")));
    shoesPerClickIterationNumber = Number(localStorage.getItem("shoesPerClickIterationNumber"));
    shoesPerClickUpgradeCost = calculateShoesPerClickCost(Number(localStorage.getItem("shoesPerClickIterationNumber")));
    shoesPerClickUpgradeButton.innerHTML = "Upgrade Shoes per Click (" + shoesPerClickUpgradeCost + " shoes)";
    luckyRingIterationNumber = Number(localStorage.getItem("luckyRingIterationNumber"));
    luckyRingUpgradeCost = calculateLuckyRingCost(Number(localStorage.getItem("luckyRingIterationNumber")));
    obtainedLuckyRing = (localStorage.getItem("obtainedLuckyRing") === "true");
    unlockAutomationUpgradeCost = Number(localStorage.getItem("unlockAutomationUpgradeCost"));
    unlockAutomationButton.innerHTML = "Unlock Automation (" + unlockAutomationUpgradeCost + " shoes)";
    if (obtainedLuckyRing == true) {
        twoPercentDoubleShoesButton.innerHTML = "Upgrade Lucky Ring (" + luckyRingUpgradeCost + " shoes)";
        unlockAutomationButton.style.display = "block";
    } else {
        twoPercentDoubleShoesButton.innerHTML = "Purchase Lucky Ring (" + luckyRingUpgradeCost + " shoes)";
    }
    luckyRingSpecialChance = Number(localStorage.getItem("luckyRingSpecialChance"));
    luckyRingInventoryText.innerHTML = "[💍] Lucky Ring [x1] | Grants a " + (luckyRingSpecialChance * 100) + "%" + " chance of obtaining double shoes";
    if (obtainedLuckyRing == true) {
        inventoryButton.style.display = "block";
    }
    luckyRingUpgradeLimit = Number(localStorage.getItem("luckyRingUpgradeLimit"));
    if (luckyRingSpecialChance >= luckyRingUpgradeLimit) {
        twoPercentDoubleShoesButton.style.display = "none";
    } else {
        twoPercentDoubleShoesButton.style.display = "block";
    }
    unlockAutomationIterationNumber = Number(localStorage.getItem("unlockAutomationIterationNumber"));
    obtainedAutomation = (localStorage.getItem("obtainedAutomation") === "true");
    if (obtainedAutomation == true) {
        unlockAutomationButton.style.display = "none";
        hireWorkerButton.style.display = "block";
        buyFarmButton.style.display = "block";
        buyTentButton.style.display = "block";
        shoesGainedAutomaticallyLabel.style.display = "block";
        shoesGainedAutomaticallyElement.style.display = "block";
    }
    isInventoryOpen = (localStorage.getItem("isInventoryOpen") === "true");
    workerIterationNumber = Number(localStorage.getItem("workerIterationNumber"));
    farmIterationNumber = Number(localStorage.getItem("farmIterationNumber"));
    tentIterationNumber = Number(localStorage.getItem("tentIterationNumber"))
    shackIterationNumber = Number(localStorage.getItem("shackIterationNumber"));
    numOfWorkers = Number(localStorage.getItem("numOfWorkers"));
    hireWorkerCost = calculateWorkerCost(Number(localStorage.getItem("workerIterationNumber")));
    hireWorkerButton.innerHTML = "[x" + numOfWorkers + "] " + "Hire Worker (" + hireWorkerCost + " shoes)";
    numOfFarms = Number(localStorage.getItem("numOfFarms"));
    buyFarmCost = calculateFarmCost(Number(localStorage.getItem("farmIterationNumber")));
    numOfTents = Number(localStorage.getItem("numOfTents"));
    buyTentCost = calculateTentCost(Number(localStorage.getItem("tentIterationNumber")));
    buyTentButton.innerHTML = "[x" + numOfTents + "] " + "Buy Tent (" + buyTentCost + " shoes)";
    numOfShacks = Number(localStorage.getItem("numOfShacks"));
    buyShackCost = calculateShackCost(Number(localStorage.getItem("shackIterationNumber")));
    buyShackButton.innerHTML = "[x" + numOfShacks + "] " + "Buy Shack (" + buyShackCost + " shoes)";
    shoesGainedAutomaticallyElement.innerHTML = shoesPerSecond;
    if (tentIterationNumber >= 16) {
        buyShackButton.style.display = "block";
    }
    obtainedStatus = (localStorage.getItem("obtainedStatus") === "true");
    if (obtainedStatus == true) {
        workerStatusLabel.style.display = "block";
        workerStatusElement.style.display = "block";
        manageWorkersButton.style.display = "block";
    }
    workerStatusNumber = Number(localStorage.getItem("workerStatusNumber"));
    isWorkerPageOpen = (localStorage.getItem("isWorkerPageOpen") === "true");
    if (isInventoryOpen == true) {
        inventoryOpen();
    }
    if (isWorkerPageOpen == true) {
        workerManagementPageOpen();
    }
    totalNumOfWorkersRemaining = Number(localStorage.getItem("totalNumOfWorkersRemaining"));
    numOfWorkersAtFarm = Number(localStorage.getItem("numOfWorkersAtFarm"));
    numOfWorkersAtFarmElement.innerHTML = numOfWorkersAtFarm;
    if (numOfWorkersAtFarm > 0) {
        buyFarmButton.innerHTML = "[x" + numOfFarms + "] " + "Buy Farm (" + buyFarmCost + " shoes)" + "(+" + numOfWorkersAtFarm + " worker(s))"; 
    } else {
        buyFarmButton.innerHTML = "[x" + numOfFarms + "] " + "Buy Farm (" + buyFarmCost + " shoes)";
    }
    numOfWorkersAtTent = Number(localStorage.getItem("numOfWorkersAtTent"));
    numOfWorkersAtTentElement.innerHTML = numOfWorkersAtTent;
    numOfWorkersAtShack = Number(localStorage.getItem("numOfWorkersAtShack"));
    numOfWorkersAtShackElement.innerHTML = numOfWorkersAtShack;

}

if (localStorage.getItem("numOfShoes") == null) {
    //save, then import
    saveGame();
    importGame();
} else {
    //import, then save
    importGame();
    saveGame();
}

function appointWorkersToFarm() {

    if (totalNumOfWorkersRemaining <= 0) {
        outOfWorkersAlert.style.display = "block";
        setTimeout(() => {
            outOfWorkersAlert.style.display = "none";
        }, 1000);
    } else {
        asciiFarmOpen.style.display = "block";
        asciiFarm.style.display = "none";
        setTimeout(() => {
            if (isWorkerPageOpen == true) {
                asciiFarmOpen.style.display = "none";
                asciiFarm.style.display = "block";
            } else {
                asciiFarmOpen.style.display = "none";
                asciiFarm.style.display = "none";
            }
        }, 1000);
        totalNumOfWorkersRemaining -= 1;
        numOfWorkersAtFarm += 1;
        shoesPerSecond += 10;
        shoesGainedAutomaticallyElement.innerHTML = shoesPerSecond;
        numOfWorkersAtFarmElement.innerHTML = numOfWorkersAtFarm;
        buyFarmButton.innerHTML = "[x" + numOfFarms + "] " + "Buy Farm (" + buyFarmCost + " shoes)" + "(Boosted by " + numOfWorkersAtFarm + " workers)";
    }
  
}

function appointWorkersToTent() {

    if (totalNumOfWorkersRemaining <= 0) {
        outOfWorkersAlert.style.display = "block";
        setTimeout(() => {
            outOfWorkersAlert.style.display = "none";
        }, 1000);
    } else {
        asciiTentOpen.style.display = "block";
        asciiTent.style.display = "none";
        setTimeout(() => {
            if (isWorkerPageOpen == true) {
                asciiTentOpen.style.display = "none";
                asciiTent.style.display = "block";
            } else {
                asciiTentOpen.style.display = "none";
                asciiTent.style.display = "none";
            }
        }, 1000);
        totalNumOfWorkersRemaining -= 1;
        numOfWorkersAtTent += 1;
        numOfWorkersAtTentElement.innerHTML = numOfWorkersAtTent;
    }

}

function appointWorkersToShack() {

    if (totalNumOfWorkersRemaining <= 0) {
        outOfWorkersAlert.style.display = "block";
        setTimeout(() => {
            outOfWorkersAlert.style.display = "none";
        }, 1000);
    } else {
        asciiShackOpen.style.display = "block";
        asciiShack.style.display = "none";
        setTimeout(() => {
            if (isWorkerPageOpen == true) {
                asciiShackOpen.style.display = "none";
                asciiShack.style.display = "block";
            } else {
                asciiShackOpen.style.display = "none";
                asciiShack.style.display = "none";
            }
        }, 1000);
        totalNumOfWorkersRemaining -= 1;
        numOfWorkersAtShack += 1;
        numOfWorkersAtShackElement.innerHTML = numOfWorkersAtShack;
    }

}

function excuseWorkersFromFarm() {
    
    if (numOfWorkersAtFarm <= 0) {
        cannotExcuseWorkersAlert.style.display = "block";
        setTimeout(() => {
            cannotExcuseWorkersAlert.style.display = "none";
        }, 1000);
    } else {
        totalNumOfWorkersRemaining += 1;
        numOfWorkersAtFarm -= 1;
        numOfWorkersAtFarmElement.innerHTML = numOfWorkersAtFarm;
    }

}

function excuseWorkersFromTent() {

    if (numOfWorkersAtTent <= 0) {
        cannotExcuseWorkersAlert.style.display = "block";
        setTimeout(() => {
            cannotExcuseWorkersAlert.style.display = "none";
        }, 1000);
    } else {
        totalNumOfWorkersRemaining += 1;
        numOfWorkersAtTent -= 1;
        numOfWorkersAtTentElement.innerHTML = numOfWorkersAtTent;
    }

}

function excuseWorkersFromShack() {

    if (numOfWorkersAtShack <= 0) {
        cannotExcuseWorkersAlert.style.display = "block";
        setTimeout(() => {
            cannotExcuseWorkersAlert.style.display = "none";
        }, 1000);
    } else {
        totalNumOfWorkersRemaining += 1;
        numOfWorkersAtShack -= 1;
        numOfWorkersAtShackElement.innerHTML = numOfWorkersAtShack;
    }

}

function setShoesPerClick(value) {

    shoesPerClick = value;
    shoesPerClickElement.innerHTML = shoesPerClick;

}

function inventoryOpen() {

    isInventoryOpen = true;
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
    manageWorkersButton.style.display = "none";

    if (obtainedLuckyRing == true) {
        luckyRingInventoryText.style.display = "block";
    }

    if (obtainedAutomation == true) {
        hireWorkerButton.style.display = "none";
        buyFarmButton.style.display = "none";
        buyTentButton.style.display = "none";
        shoesGainedAutomaticallyLabel.style.display = "none";
        shoesGainedAutomaticallyElement.style.display = "none";
        if (tentIterationNumber >= 16) {
            buyShackButton.style.display = "none";
            if (obtainedStatus == true) {
                workerStatusLabel.style.display = "none";
                workerStatusElement.style.display = "none";
            }
        }
    }

}

function workerManagementPageOpen() {
    
    isWorkerPageOpen = true;
    titleHeading.style.display = "none";
    workerPageHeading.style.display = "block";
    totalNumOfWorkersElement.style.display = "block";
    totalNumOfWorkersLabel.style.display = "block";
    numOfWorkersAtFarmElement.style.display = "block";
    numOfWorkersAtFarmLabel.style.display = "block";
    numOfWorkersAtShackElement.style.display = "block";
    numOfWorkersAtShackLabel.style.display = "block";
    numOfWorkersAtTentElement.style.display = "block";
    numOfWorkersAtTentLabel.style.display = "block";
    asciiFarm.style.display = "block";
    asciiTent.style.display = "block";
    asciiShack.style.display = "block";
    appointWorkersToFarmButton.style.display = "block";
    appointWorkersToTentButton.style.display = "block";
    appointWorkersToShackButton.style.display = "block";
    excuseWorkersFromFarmButton.style.display = "block";
    excuseWorkersFromTentButton.style.display = "block";
    excuseWorkersFromShackButton.style.display = "block";
    manageWorkersButton.style.display = "none";
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
        luckyRingInventoryText.style.display = "none";
    }

    if (obtainedAutomation == true) {
        hireWorkerButton.style.display = "none";
        buyFarmButton.style.display = "none";
        buyTentButton.style.display = "none";
        shoesGainedAutomaticallyLabel.style.display = "none";
        shoesGainedAutomaticallyElement.style.display = "none";
        if (tentIterationNumber >= 16) {
            buyShackButton.style.display = "none";
            if (obtainedStatus == true) {
                workerStatusLabel.style.display = "block";
                workerStatusElement.style.display = "block";
            }
        }
    }

}

function backToHome() {

    isInventoryOpen = false;
    isWorkerPageOpen = false;
    titleHeading.style.display = "block";
    inventoryHeading.style.display = "none";
    workerPageHeading.style.display = "none";
    totalNumOfWorkersElement.style.display = "none";
    totalNumOfWorkersLabel.style.display = "none";
    numOfWorkersAtFarmElement.style.display = "none";
    numOfWorkersAtFarmLabel.style.display = "none";
    numOfWorkersAtShackElement.style.display = "none";
    numOfWorkersAtShackLabel.style.display = "none";
    numOfWorkersAtTentElement.style.display = "none";
    numOfWorkersAtTentLabel.style.display = "none";
    asciiFarmOpen.style.display = "none";
    asciiTentOpen.style.display = "none";
    asciiShackOpen.style.display = "none";
    asciiFarm.style.display = "none";
    asciiTent.style.display = "none";
    asciiShack.style.display = "none";
    appointWorkersToFarmButton.style.display = "none";
    appointWorkersToTentButton.style.display = "none";
    appointWorkersToShackButton.style.display = "none";
    excuseWorkersFromFarmButton.style.display = "none";
    excuseWorkersFromTentButton.style.display = "none";
    excuseWorkersFromShackButton.style.display = "none";
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
        unlockAutomationButton.style.display = "none";
        hireWorkerButton.style.display = "block";
        buyFarmButton.style.display = "block";
        buyTentButton.style.display = "block";
        shoesGainedAutomaticallyLabel.style.display = "block";
        shoesGainedAutomaticallyElement.style.display = "block";
        if (tentIterationNumber >= 16) {
            buyShackButton.style.display = "block";
            if (obtainedStatus == true) {
                workerStatusLabel.style.display = "block";
                workerStatusElement.style.display = "block";
                manageWorkersButton.style.display = "block";
            }
        }
    } else {
        unlockAutomationButton.style.display = "block";
    }

    backToHomeButton.style.display = "none";
    inventoryButton.style.display = "block";
}