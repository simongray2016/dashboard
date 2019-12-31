
var data = [{
	name: 'Dakota Rice',
	country: 'Niger',
	city: 'Oud-Turnhout',
	salary: '$36,738'
}, 
{
	name: 'Dakota Rice',
	country: 'Niger',
	city: 'Oud-Turnhout',
	salary: '$36,738'
},
{
	name: 'Minerva Hooper',
	country: 'Curaçao',
	city: '	Sinaai-Waas',
	salary: '$23,789'
},
{
	name: 'Minerva Hooper',
	country: 'Curaçao',
	city: '	Sinaai-Waas',
	salary: '$23,789'
},
{
	name: 'Minerva Hooper',
	country: 'Curaçao',
	city: '	Sinaai-Waas',
	salary: '$23,789'
},
{
	name: 'Minerva Hooper',
	country: 'Curaçao',
	city: '	Sinaai-Waas',
	salary: '$23,789'
},
{
	name: 'Minerva Hooper',
	country: 'Curaçao',
	city: '	Sinaai-Waas',
	salary: '$23,789'
},
{
	name: 'Minerva Hooper',
	country: 'Curaçao',
	city: '	Sinaai-Waas',
	salary: '$23,789'
}
];
var table = document.querySelector('.table__content');
var content = '';
var addContent = data.map(data => content += `
	<tr>
		<td>${data.name}</td>
		<td>${data.country}</td>
		<td>${data.city}</td>
		<td>${data.salary}</td>
	</tr>
`)

table && (table.innerHTML = content);


var ch = document.getElementById('chartHour');
var ce = document.getElementById('chartEmail');
var cp = document.getElementById('chartSpeed');
var chartHour = new Chart(ch, {
	type: 'line',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
		datasets: [
			{
				data: [40, 20, 10, 16, 24, 38, 74, 90, 85, 110],
				borderColor: "#6BD098",
				backgroundColor: '#6BD098',
				fill: true
			},
			{
				data: [90, 170, 178, 190, 185, 244, 255, 234, 250, 277],
				borderColor: "#F17E5D",
				backgroundColor: '#F17E5D',
				fill: true
			},
			{
				data: [282, 290, 280, 300, 330, 333, 367, 350, 345, 390],
				borderColor: "#FCC468",
				backgroundColor: '#FCC468',
				fill: true,
			},
		]
	}
});

var chartEmail = new Chart(ce, {
	type: 'pie',
	data: {
		labels: ["Opened", "Read", "Delete", "Unopened"],
		datasets: [{
			backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
			data: [2478, 5267, 734, 454]
		}]
	},
})

var chartSpeed = new Chart(cp, {
	type: 'line',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
		datasets: [
			{
				data: [0, 10, 15, 17, 20, 25, 24, 30, 32, 40],
				borderColor: "#6BD098",
				backgroundColor: '#6BD098',
				fill: false
			},
			{
				data: [0, 20, 17, 25, 24, 30, 37, 40, 60, 80],
				borderColor: "#F17E5D",
				backgroundColor: '#F17E5D',
				fill: false
			},
		]
	}
})


