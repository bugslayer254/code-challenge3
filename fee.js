function estimateTransactionFee() {
    let amountToSend = prompt("Unatuma Ngapi? (KES):")
    let fee = (1.5 / 100) * + amountToSend


    if (fee < 10) {
        fee = 10
    }
    else if (fee > 70) {
        fee = 70
    }
    const total = (parseInt(fee) + parseInt(amountToSend))
    console.log("Sending KES " + amountToSend)
    console.log("Calculated Transaction Fee: KES " + fee)
    console.log("Total amount to be debited: KES " + total)
    console.log("\nSend Money Securely!")

}
estimateTransactionFee()