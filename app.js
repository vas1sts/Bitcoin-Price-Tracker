// Initialize variables
const currencySelect = document.getElementById('currency-select');
const fetchButton = document.getElementById('fetch-price');
const priceValue = document.getElementById('price-value');
const average5Min = document.getElementById('average-5min');
const average30Min = document.getElementById('average-30min');
const average60Min = document.getElementById('average-60min');
const chart = document.getElementById('chart');

// Initialize variables for data and chart
let bitcoinData = [];
let chartData = [];
let chartInstance = null; // Store chart instance
// Function to fetch Bitcoin price
const fetchBitcoinPrice = async () => {
    try {
        const currency = currencySelect.value;
        const response = await fetch(`https://api.coinbase.com/v2/prices/spot?currency=${currency}`);
        const data = await response.json();
        const price = parseFloat(data.data.amount);

        // Update the UI with the current price
        priceValue.textContent = `${price} ${currency}`;
        bitcoinData.push(price);

        // Update the chart data
        chartData.push({ x: new Date(), y: price });

        // Clear the chart and reinitialize it
        if (chartInstance) {
            chartInstance.destroy();
        }

        // Update the chart
        updateChart(chartData);

        // Calculate and display averages
        updateAverages();
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
    }
};

// Function to calculate average
const calculateAverage = (data, minutes) => {
    const values = data.slice(-minutes);
    const sum = values.reduce((acc, val) => acc + val, 0);
    return (sum / values.length).toFixed(2);
};

// Function to update the chart
const updateChart = (data) => {
    const options = {
        series: [
            {
                name: 'Bitcoin Price',
                data: data,
            },
        ],
        chart: {
            type: 'line',
            height: 350,
        },
        xaxis: {
            type: 'datetime',
        },
    };

    chartInstance = new ApexCharts(chart, options);
    chartInstance.render();
};

// Function to update the averages and time-based display
const updateAverages = () => {
    average5Min.textContent = `Average (5 Min): ${calculateAverage(bitcoinData, 5)}`;
    average30Min.textContent = `Average (30 Min): ${calculateAverage(bitcoinData, 30)}`;
    average60Min.textContent = `Average (60 Min): ${calculateAverage(bitcoinData, 60)}`;

};

// Automatically refresh data every 1 minute
setInterval(fetchBitcoinPrice, 60000);

// Event listener for the fetch button
fetchButton.addEventListener('click', fetchBitcoinPrice);

// Event listener for currency change
currencySelect.addEventListener('change', () => {
    // Clear existing data and reset the UI
    bitcoinData = [];
    chartData = [];
    fetchBitcoinPrice();

    // Clear and reinitialize the chart
    if (chartInstance) {
        chartInstance.destroy();
    }
    updateChart([]);
});

// Fetch Bitcoin price initially
fetchBitcoinPrice();
