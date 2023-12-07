# Bitcoin Price Tracker Web Application

This web application allows you to track the current Bitcoin price, view historical price data, and calculate average prices at different time intervals.

## Getting Started

These instructions will help you set up and run the Bitcoin Price Tracker on your local machine.

### Prerequisites

- A modern web browser
- Internet connection
- A code editor (optional)

### Installation

1. Clone the repository or download the source code to your local machine.

2. Open the project folder in your code editor (if you have one) or use a plain text editor.

3. Ensure you have an internet connection, as the application relies on real-time data from a public API.

### Running the Application

1. Open the project folder and locate the `index.html` file.

2. Double-click `index.html` to open the application in your web browser.

3. The application will load, and you will see the following options:

   - **Select Currency:** Choose between EUR and USD.
   - **Fetch Price:** Click this button to get the current Bitcoin price for the selected currency.
   - **Average Prices:** This section displays average Bitcoin prices at intervals of 5 minutes, 30 minutes, and 60 minutes.
   - **Price Chart:** This section visualizes the historical Bitcoin price data over the last hour.

4. To get the current Bitcoin price, follow these steps:

   - Select your desired currency (EUR or USD) from the dropdown.
   - Click the "Fetch Price" button.

5. To change the currency and refresh the data:

   - Use the dropdown to select a different currency.
   - The application will automatically update the price, averages, and chart for the new currency.

6. The application will automatically refresh the data every 1 minute, updating the current price, averages, and chart.

## Built With

- HTML, CSS, and JavaScript for the front-end.
- ApexCharts for data visualization.
- Public Coinbase API for Bitcoin price data.
