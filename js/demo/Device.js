// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("Device");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Beamer", "TV", "Console", "PC/Laptop", "Smartphone"],
    datasets: [{
      data: [61, 71, 55, 79,59],
      backgroundColor: ['#7de209', '#228c20', '#1f8c50', '#9cfcde', '#00ff4c'],
    }],
  },
});
