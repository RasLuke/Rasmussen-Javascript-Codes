function verifyServiceQuality(quality) {
    return (quality === "great" || quality === "ok" || quality === "poor");
}

function verifyServiceAmount(amount) {
    return (amount >= 5 && amount <= 500);
}

function calculateTip(amount, quality) {
    if (quality === "great") {
        return amount * 0.2;
    } else if (quality === "ok") {
        return amount * 0.15;
    } else if (quality === "poor") {
        return amount * 0.1;
    }
}

function calculateAndDisplayTip() {
    var serviceAmount = parseFloat(document.getElementById("serviceAmount").value);
    var serviceQuality = document.getElementById("serviceQuality").value.toLowerCase();

    if (!verifyServiceAmount(serviceAmount)) {
        alert("Please enter a valid service amount between $5.00 and $500.00.");
        return;
    }

    if (!verifyServiceQuality(serviceQuality)) {
        alert("Please enter a valid service quality: great, ok, or poor.");
        return;
    }

    var tipAmount = calculateTip(serviceAmount, serviceQuality);
    var tipMessage = "For a service of $" + serviceAmount.toFixed(2) + ", ";

    if (serviceQuality === "great") {
        tipMessage += "a 20% tip is recommended for great service, totaling $" + tipAmount.toFixed(2) + ".";
    } else if (serviceQuality === "ok") {
        tipMessage += "a 15% tip is recommended for ok service, totaling $" + tipAmount.toFixed(2) + ".";
    } else if (serviceQuality === "poor") {
        tipMessage += "a 10% tip is recommended for poor service, totaling $" + tipAmount.toFixed(2) + ".";
    }

    alert(tipMessage);
}
