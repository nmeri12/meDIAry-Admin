// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("Location");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Campus", "On The Way", "At Home", "At Work"],
    datasets: [{
      data: [93, 77, 81,74],
      backgroundColor: ['#ff002a', '#a83044', '#723b3b', '#ef9eab'],
    }],
  },
});
