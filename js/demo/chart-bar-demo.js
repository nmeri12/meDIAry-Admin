// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Communicate", "Inform/Investigate", "Listen", "Watch", "Read", "Organize", "Produce/Create", "Play", "Browse", "Shop"],
    datasets: [{
      label: "",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [46, 43, 36, 43, 29, 45, 52, 11, 10, 10],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'Action Group'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 10
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 10
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
