// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("Intention");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["For Studies", "Private", "Work"],
    datasets: [{
      data: [115, 106, 104],
      backgroundColor: ['#dca735', '#ffef3d', '#e8e797'],
    }],
  },
});
