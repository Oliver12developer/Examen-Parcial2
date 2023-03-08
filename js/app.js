let lista = document.getElementById("containerTeams")
let lisTeams = document.getElementById("equipos").content
let fragment = document.createDocumentFragment()
let teamsPL = []

document.addEventListener('DOMContentLoaded', () => {
    loadTeam()
})

const loadTeam = () => {
	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '746b017ff2msha0f54c52ab57ed5p16bd29jsn7110f3ecb3d8',
		'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
	}
};

	fetch('http://localhost:5050/js/equipos.json', options)
	.then(response => response.json())
	.then(response => {
		teamsPL = response.teams
		console.log(teamsPL)
		
	})
	.catch(err => console.error(err));
}

const mostrarName = () =>{
	teamsPL.forEach((busca) =>{
		lisTeams.querySelector('p').textContent = busca.name
	})
}




