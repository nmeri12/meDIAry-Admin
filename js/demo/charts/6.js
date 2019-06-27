var ctx = document.getElementById("mymy");
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [ 'Games'],
    datasets: [{
      label: '# of Tomatoes',
      data: [10],
      backgroundColor: [
        'rgba(255, 99, 122, 0.2)',
        
      ],
      borderColor: [
        'rgba(255,99,132,1)',
       
      ],
      borderWidth: 1
    }]
  },
  options: {
   	cutoutPercentage: 40,
    responsive: false,

  }
});