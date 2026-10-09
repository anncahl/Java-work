// Store Application Data
let monthlyIncome = $3000
let totalExpenses = $1800
let remainingBalance = 0;

// Reusable Functions
function calculateRemainingBalance(income, expenses) {
    return income - expenses;
}

function calculateExpensePercentage(expenses, income) {
    if (income === 0) {
        return 0;
    }
    return (expenses / income) * 100;
}

// Main Function
function runSpendWiseTracker() {
    console.log("=== SpendWise Financial Tracker Initialized ===");

    // Collect User Input
    let incomeInput = prompt("Enter your total monthly income ($):", "3000");
    let expenseInput = prompt("Enter your total monthly expenses ($):", "1800");

    // Convert input strings to numbers
    monthlyIncome = parseFloat(incomeInput) || 0;
    totalExpenses = parseFloat(expenseInput) || 0;

    // Perform Calculations
    remainingBalance = calculateRemainingBalance(monthlyIncome, totalExpenses);
    let spentPercentage = calculateExpensePercentage(totalExpenses, monthlyIncome);

    // Display Results in Console
    console.log("Monthly Income: $" + monthlyIncome.toFixed(2));
    console.log("Total Expenses: $" + totalExpenses.toFixed(2));
    console.log("Remaining Balance: $" + remainingBalance.toFixed(2));
    console.log("Budget Used: " + spentPercentage.toFixed(1) + "%");

    if (remainingBalance > 0) {
        console.log("Status: You are within your budget! Great job saving.");
    } else if (remainingBalance === 0) {
        console.log("Status: You have used exactly 100% of your budget.");
    } else {
        console.log("Status: Warning! You are over budget.");
    }
    console.log("=============================================");
}

// Execute tracker on load
runSpendWiseTracker();
