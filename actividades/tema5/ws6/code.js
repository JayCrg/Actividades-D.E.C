

window.onload = () => {
    google.charts.load('current',{packages:['corechart']});
    google.charts.setOnLoadCallback(drawChartBarra);
    google.charts.setOnLoadCallback(drawChartSector);
    google.charts.load('current', {packages:['geochart'],});
    google.charts.setOnLoadCallback(drawRegionsMap);
}

function drawChartBarra() {
    var data = google.visualization.arrayToDataTable([
        ['Partido', 'Diputados'],
        ['PSOE', 120],
        ['PP', 89],
        ['VOX', 52],
        ['Cs', 26],
        ['ERC', 10],
        ['En Comun Podem', 7],
        ['JxCat', 8],
        ['Otros', 25],
      ]);
      var options = {
        title: 'Diputados por partido en las últimas elecciones',
      };
    var chart = new google.visualization.BarChart(document.getElementById('myBarra'));
    chart.draw(data, options);
    }

function drawChartSector(){
    var data = google.visualization.arrayToDataTable([
        ['Partido', 'Diputados'],
        ['PSOE', 120],
        ['PP', 89],
        ['VOX', 52],
        ['Cs', 26],
        ['ERC', 10],
        ['En Comun Podem', 7],
        ['JxCat', 8],
        ['Otros', 25],
      ]);
      var options = {
        title: 'Diputados por partido en las últimas elecciones',
      };
    var chart = new google.visualization.PieChart(document.getElementById('mySector'));
    chart.draw(data, options);
}


  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Turists (Millions)'],
      ['France', 79.5],
      ['United States', 62.7],
      ['China', 57,6],
      ['Spain', 56.7],
      ['Italy', 46.1],
      ['Turkey', 29.3]
    ]);

    var options = {
        title: 'Turists by country',
    };

    var chart = new google.visualization.GeoChart(document.getElementById('turistas'));

    chart.draw(data, options);
  }


  function init() {
    var options = {
      width: 400,
      height: 240,
      animation:{
        duration: 1000,
        easing: 'out',
      },
      vAxis: {minValue:0, maxValue:1000}
    };
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'N');
    data.addColumn('number', 'Value');
    data.addRow(['V', 200]);

    var chart = new google.visualization.ColumnChart(
        document.getElementById('myBarra'));
    var button = document.getElementById('b1');

    function drawChart() {
      // Disabling the button while the chart is drawing.
      button.disabled = true;
      google.visualization.events.addListener(chart, 'ready',
          function() {
            button.disabled = false;
          });
      chart.draw(data, options);
    }

    button.onclick = function() {
      var newValue = 1000 - data.getValue(0, 1);
      data.setValue(0, 1, newValue);
      drawChart();
    }
    drawChart();
  }