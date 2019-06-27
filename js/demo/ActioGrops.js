// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("C");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["E-mail", "Community/Forum", "Messenger", "(Video-)Phone-Call", "Social-Media"],
    datasets: [{
      data: [16, 9, 9, 8,4],
      backgroundColor: ['#b0ef02', '#80ef02', '#aae3ba', '#d4fcec', '#1a7d29'],
    }],
  },
});


var ctx = document.getElementById("I");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Encyclopedia", "News", "Learning-Platform", "Online-Search", "Social-Media"],
    datasets: [{
      data: [9, 9, 8, 13,4],
      backgroundColor: ['#91e6e1', '#ccfffc', '#2d6663', '#3babc4', '#3fbcf2'],
    }],
  },
});

var ctxxx = document.getElementById("L");
var myPieChart = new Chart(ctxxx, {
  type: 'pie',
  data: {
    labels: ["Music", "Podcast", "Audiobook", "Lecture-Recording"],
    datasets: [{
      data: [9, 9, 9, 9],
      backgroundColor: ['#f23f99', '#cf7e99', '#913977', '#e81e61'],
    }],
  },
});





var ctxxx = document.getElementById("W");
var myPieChart = new Chart(ctxxx, {
  type: 'pie',
  data: {
    labels: ["Social-Media", "Film/Serie", "Video(-Stream)", "Presentation ", "Lecture-Recording" ],
    datasets: [{
      data: [10, 8, 8, 7, 10],
      backgroundColor: ['#e8801e', '#e6c09c', '#fffca6', '#ffa21f', '#70460b'],
    }],
  },
});






var ctxxx = document.getElementById("R");
var myPieChart = new Chart(ctxxx, {
  type: 'pie',
  data: {
    labels: ["eBook", "Lecture-Notes", "Office-Document"],
    datasets: [{
      data: [7, 13, 9],
      backgroundColor: ['#f5b6ab', '#f03211', '#f0977d'],
    }],
  },
});



var ctxxx = document.getElementById("O");
var myPieChart = new Chart(ctxxx, {
  type: 'pie',
  data: {
    labels: ["Calendar/Tasks", "Files/Software ", "Cloud-Storage", "Navigation/GPS", "Smart Home"],
    datasets: [{
      data: [9, 12, 9, 7, 8],
      backgroundColor: ['#159936', '#67e086', '#acf2be', '#e8faed'],
    }],
  },
});





var ctxxx = document.getElementById("PL");
var myPieChart = new Chart(ctxxx, {
  type: 'pie',
  data: {
    labels: ["Games"],
    datasets: [{
      data: [10],
      backgroundColor: ['#c4aa17'],
    }],
  },
});

var ctxxx = document.getElementById("B");
var myPieChart = new Chart(ctxxx, {
  type: 'pie',
  data: {
    labels: ["Internet"],
    datasets: [{
      data: [10],
      backgroundColor: ['#bffcff'],
    }],
  },
});
var ctxxx = document.getElementById("S");
var myPieChart = new Chart(ctxxx, {
  type: 'pie',
  data: {
    labels: ["Online-Shop "],
    datasets: [{
      data: [10],
      backgroundColor: ['#c6abf5'],
    }],
  },
});

var ctxxx = document.getElementById("P");
var myPieChart = new Chart(ctxxx, {
  type: 'pie',
  data: {
    labels: ["OD(Offline)", "OD(Online)", "Programming", "Audio/Video", "Others", "Drawing"],
    datasets: [{
      data: [7, 5,9, 9, 13, 9],
      backgroundColor: ['#08ffc5', '#b6fcec', '#1ed4cb', '#6f94a3', '#e5df61', '#87aeed'],
    }],
  },
});

