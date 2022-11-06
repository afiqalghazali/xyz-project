/**
 * /* Chart JS
 *
 * @format
 */

const ctx = $("#myChart");
const myChart = new Chart(ctx, {
	type: "bar",
	data: {
		labels: ["January", "February", "March", "April", "Mei", "Juny"],
		datasets: [
			{
				label: "Men",
				data: [73, 40, 68, 76, 68, 72],
				backgroundColor: "rgba(54, 162, 235, 1)",
			},
			{
				label: "Women",
				data: [73, 52, 58, 100, 70, 68],
				backgroundColor: "rgba(255, 99, 132, 1)",
			},
		],
	},
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: "right",
			},
			scales: {
				x: {
					title: {
						display: true,
						text: "Month",
					},
				},
				y: {
					title: {
						display: true,
						text: "Value",
					},
					min: 0,
					max: 100,
					ticks: {
						// forces step size to be 50 units
						stepSize: 20,
					},
				},
			},
		},
	},
});
