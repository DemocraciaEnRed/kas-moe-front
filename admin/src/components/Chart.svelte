<script>
  import Chart from 'chart.js';
  import { onMount, onDestroy } from 'svelte';

  let chart, chartElement;

  onMount(() => {
    createChart();
  });

  function createChart() {
    chart = new Chart(chartElement.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['May 1', 'May 2', 'May 3', 'May 4', 'May 5', 'May 6', 'May 7', 'May 8', 'May 9', 'May 10'],
        datasets: [
          {
            data: [200, 300, 290, 350, 150, 350, 300, 100, 125, 220],
            backgroundColor: '#377dff',
            hoverBackgroundColor: '#377dff',
            borderColor: '#377dff',
          },
          {
            data: [150, 230, 382, 204, 169, 290, 300, 100, 300, 225, 120],
            backgroundColor: '#e7eaf3',
            borderColor: '#e7eaf3',
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              gridLines: {
                color: '#e7eaf3',
                drawBorder: false,
                zeroLineColor: '#e7eaf3',
              },
              ticks: {
                beginAtZero: true,
                stepSize: 100,
                fontSize: 12,
                fontColor: '#97a4af',
                fontFamily: 'Open Sans, sans-serif',
                padding: 10,
                postfix: '$',
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                fontSize: 12,
                fontColor: '#97a4af',
                fontFamily: 'Open Sans, sans-serif',
                padding: 5,
              },
              categoryPercentage: 0.5,
              maxBarThickness: '10',
            },
          ],
        },
        cornerRadius: 2,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          prefix: '$',
          hasIndicator: true,
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
      }
    });
  }

  export let responsive = false;
  export let type, data, options, width, height;
</script>

<canvas {width} {height} bind:this={chartElement} />