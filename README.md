# SpendWise Financial Dashboard & JavaScript Foundation

## Project Overview
SpendWise is a personal finance dashboard designed to help users monitor their income, track monthly expenses, and view remaining balances.

## Features & Implementation

### 1. HTML5 & CSS Layout
- **CSS Grid Main Structure**: 2-column layout (Sidebar + Main Content Area) and a responsive category card grid.
- **Flexbox Layouts**: Used to arrange navigation elements, header user profile, and category card details.
- **CSS Custom Properties**: Theme variables defined for brand colors, backgrounds, and text styling.
- **Responsive Design**: Includes media queries (`@media (max-width: 768px)`) to adapt smoothly to mobile devices.

### 2. JavaScript Logic
- **Script Integration**: Linked `script.js` to `index.html` using the `defer` attribute.
- **Data Storage & Variables**: Declared `let` variables to represent financial data (`monthlyIncome`, `totalExpenses`, `remainingBalance`).
- **User Input Collection**: Utilized `prompt()` dialogs to collect input and `parseFloat()` for numerical conversions.
- **Calculations & Reusable Functions**: Created functions like `calculateRemainingBalance()` and `calculateExpensePercentage()` to handle budget math.
- **Console Output**: Logged dynamic financial summaries and budget warning messages to the browser console.

## Project Structure
- `index.html` - Semantic layout structure linking CSS and JS files.
- `style.css` - Grid, Flexbox, variables, and responsive styling.
- `script.js` - Application logic, variables, calculations, and console logging.
- `README.md` - Documentation explaining project structure and implementation.
