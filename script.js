const estudiosoDiv = document.querySelector('.estudioso')
const visionarioDiv = document.querySelector('.visionario')
const apaixonadoDiv = document.querySelector('.apaixonado')
const empreendedorDiv = document.querySelector('.empreendedor')
const containerEscolha = document.querySelector('.container-escolha')
const escolhaH1 = document.querySelector('.escolha-h1')
const escolhaP = document.querySelector('.escolha-p')
const imagemEscolha = document.querySelector('.imagem-escolha')

function estudioso() {

    estudiosoDiv.classList.add('activatedE')
    
    if(visionarioDiv.classList.contains('activatedV') || apaixonadoDiv.classList.contains('activatedA') || empreendedorDiv.classList.contains('activatedEm')){
        visionarioDiv.classList.remove('activatedV')
        apaixonadoDiv.classList.remove('activatedA')
        empreendedorDiv.classList.remove('activatedEm')
    }

    escolhaH1.innerText = "O Estudioso Dedicado"

    escolhaP.innerText = "Esse aluno é conhecido por sua dedicação aos estudos e busca constante pelo conhecimento. Ele escolhe a Etec Camargo Aranha para aprimorar suas habilidades e ampliar seu conhecimento em uma área específica, como ciência da computação, engenharia ou saúde."

    imagemEscolha.src = 'Group48.svg'

}

function visionario() {
    visionarioDiv.classList.add('activatedV')

    if(estudiosoDiv.classList.contains('activatedE') || apaixonadoDiv.classList.contains('activatedA') || empreendedorDiv.classList.contains('activatedEm')){
        estudiosoDiv.classList.remove('activatedE')
        apaixonadoDiv.classList.remove('activatedA')
        empreendedorDiv.classList.remove('activatedEm')
    }

    escolhaH1.innerText = "O Visionário em Tecnologia:"

    escolhaP.innerText = "Este aluno ingressante busca a Etec Camargo Aranha com a visão de se tornar um líder na área de tecnologia. Ele está motivado a aprimorar suas habilidades técnicas, desenvolver novas competências e inovar em sua carreira. Sua meta é se destacar no mercado de trabalho, contribuir para avanços tecnológicos e alcançar o sucesso profissional na indústria da tecnologia."

    imagemEscolha.src = 'Group64.svg'

}

function apaixonado() {
    apaixonadoDiv.classList.add('activatedA')

    if(visionarioDiv.classList.contains('activatedV') || estudiosoDiv.classList.contains('activatedE') || empreendedorDiv.classList.contains('activatedEm')){
        visionarioDiv.classList.remove('activatedV')
        estudiosoDiv.classList.remove('activatedE')
        empreendedorDiv.classList.remove('activatedEm')
    }

    escolhaH1.innerText = "O Apaixonado por Ciências Exatas:"

    escolhaP.innerText = "Esse aluno tem uma paixão pelas ciências exatas, como matemática e física. Ele escolhe a Etec Camargo Aranha para aprofundar seu conhecimento nessas áreas e aplicá-lo a desafios práticos. Seu objetivo é se tornar um especialista em ciências exatas e contribuir para projetos e pesquisas inovadoras em setores como engenharia, física ou matemática aplicada."

    imagemEscolha.src = 'Group65.svg'

}

function empreendedor() {
    empreendedorDiv.classList.add('activatedEm')

    if(visionarioDiv.classList.contains('activatedV') || apaixonadoDiv.classList.contains('activatedA') || estudiosoDiv.classList.contains('activatedE')){
        visionarioDiv.classList.remove('activatedV')
        apaixonadoDiv.classList.remove('activatedA')
        estudiosoDiv.classList.remove('activatedE')
    }

    escolhaH1.innerText = "O Empreendedor em Ascensão:"

    escolhaP.innerText = "Esse aluno empreendedor vê a Etec Camargo Aranha como uma plataforma para aprimorar suas habilidades de gestão e negócios. Ele busca conhecimento em áreas como administração e empreendedorismo para lançar e expandir seus próprios empreendimentos. Seu objetivo é alcançar o sucesso como empresário e contribuir para o crescimento econômico da região."

    imagemEscolha.src = 'Group66.svg'

}