window.addEventListener('load',start)

let inputCurrentFrequency = document.querySelector('#inputCurrentFrequency')
let rangeFrequency = document.querySelector('#rangeFrequency')
let divPodcasts = document.querySelector('#divPodcasts')


function start(){
	console.log( inputCurrentFrequency) //pra testar se tá funcionando
	console.log( rangeFrequency)//pra testar se tá funcionando

    rangeFrequency.addEventListener('input', handleRangeValue)
}

function handleRangeValue(){
    inputCurrentFrequency.value = rangeFrequency.value//mostra a frequencia da radio
    findPodcast(rangeFrequency.value) //altera o dado do nosso input
}


function findPodcast(frequency){ //para mostrar se a frequencia existe ou não
	console.log(frequency) //só pra testar se a frequencia tá mostrando certinho

    let foundPodcast = null
	for(let i = 0; i < podcastsData.length; i++){ //vai percorrer o script das frequencias
		let currentPodcast = podcastsData[i]
		console.log(currentPodcast)//só pra testar
		
		if(frequency == currentPodcast.id){
			foundPodcast = currentPodcast
			console.log('encontrado' + frequency) //só pra testar
		 }
    }

    if(!!foundPodcast){
		renderItems(foundPodcast)
	} else {
		divPodcasts.innerHTML = ' '
		divPodcasts.innerHTML = '<p>Nenhum Podcast localizado nesta frequência.</p>'
	}
}

function renderItems(podcast){// recebe as informações do podcast
	// console.log(podcast) //só pra testar
	divPodcasts.innerHTML = ' ' //limpa o divPodcasts

    	
	let connect = document.createElement('h4') //criando um H4
	connect.textContent = 'Quer ter acesso ao site oficial do podcast?' //o conteúdo dentro do H4
	
	let link = document.createElement('a') //criando um link
	link.href =  podcast.link
	link.textContent = 'Clique Aqui'
	
	let img = document.createElement('img')//cria uma imagem
	img.src = 'img/' + podcast.img
	img.alt = 'Logo do Podcast: ' + podcast.title
	img.title = podcast.title
	
	let h2 = document.createElement('h2')
	h2.textContent = podcast.title
	
	let p = document.createElement('p')
	p.textContent = podcast.description
	
	divPodcasts.append(connect) //para adicionar o H4 como um elemento filho do divPodcasts
	divPodcasts.append(link)//para adicionar o link como um elemento filho do divPodcasts
	divPodcasts.append(img)
	divPodcasts.append(h2)
	divPodcasts.append(p)
}
