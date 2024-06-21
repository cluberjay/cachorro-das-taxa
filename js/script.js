const auxiliar = document.querySelector('#auxiliar')
const backdrop = document.querySelector('.backdrop')
const   linkForm = document.querySelector('#linkForm')
const botaoDeMenu = document.querySelector('#botao-menu')
const opcoesDeCalculo = document.querySelector('#opcoes-de-calculo')
const sessaoDeCalculos = document.querySelector('#sessao-calculos')
const sessaoDeComentarios = document.querySelector('#sessao-de-comentarios')
const contDosCustos = document.querySelector('.container-dos-custos')
const calcAuto = document.querySelector('#calc-auto')
const calcMan = document.querySelector('#calc-manual')
const containerPrincipal = document.querySelector('#container-principal')
const tipoDeMotos = document.querySelector('#tipo-de-motos')
let   animacao = true
let honda150e160
let xreCb
let valorDaTaxa = document.querySelector('#taxa')
const botaDoCalculo = document.querySelector('#botao-calc-da-taxa')
let distanciaDaCorrida = document.querySelector('#distancia-da-corrida')
let eficienciaDoCombustivel       
let eficienciaDoOleo 
let eficienciaDosPneus 
let eficienciaDaRelacao 
let valorDosPneus
let valorDaRelacao  
let MediaDoCombustivel = 5.74 
let MediaDoOleo = 35
let totalDosCustos
let calculoAutomatico
const botaoDeRecalcular = document.querySelector('#botao-recalcular')
const botaoDeFecharCalculos = document.querySelector('#botao-de-fechar-calculos')

setInterval(()=> {
    linkForm.classList.remove('troca-cor-do-linkForm')
    setTimeout(()=> {
        linkForm.classList.add('troca-cor-do-linkForm')
    } , 1000)
   
} , 2000)


botaoDeMenu.addEventListener('click', ()=>{
    
    document.querySelector('.menu-mobile').classList.add('open')
    botaoDeMenu.classList.add('hidden')
    backdrop.classList.remove('hidden')
    auxiliar.classList.add('hidden')
    opcoesDeCalculo.classList.add('hidden')

})

backdrop.addEventListener('click' , ()=> {
    
    document.querySelector('.menu-mobile').classList.remove('open')
    botaoDeMenu.classList.remove('hidden')
    backdrop.classList.add('hidden')
    auxiliar.classList.remove('hidden')
    opcoesDeCalculo.classList.remove('hidden')
      
})

function calcAuto1(){ 
    
    if(xreCb === true){
        MediaDoOleo = MediaDoOleo * 2
    } 
    let custoDeCombustivel = (distanciaDaCorrida.value * MediaDoCombustivel) / eficienciaDoCombustivel
    document.querySelector('#custo-de-combustivel').innerHTML = parseFloat(custoDeCombustivel.toFixed(2))
    
    let custoDeOleo = (distanciaDaCorrida.value * MediaDoOleo) / eficienciaDoOleo
    document.querySelector('#custo-de-oleo').innerHTML = parseFloat(custoDeOleo.toFixed(2))
    
    let custoDePneu = (distanciaDaCorrida.value * valorDosPneus) / eficienciaDosPneus
    document.querySelector('#custo-de-pneu').innerHTML = parseFloat(custoDePneu.toFixed(2))
    
    let custoDeRelacao = (distanciaDaCorrida.value * valorDaRelacao) / eficienciaDaRelacao
    document.querySelector('#custo-de-relacao').innerHTML = parseFloat(custoDeRelacao.toFixed(2))
    
    let lucroReal = parseInt(valorDaTaxa.value) - (custoDeCombustivel +  custoDeOleo + custoDePneu + custoDeRelacao)
    document.querySelector('#valor-da-taxa').innerHTML = parseFloat(lucroReal.toFixed(2))
    
    totalDosCustos =  parseFloat(custoDeCombustivel.toFixed(2)) + parseFloat(custoDeOleo.toFixed(2)) + parseFloat(custoDePneu.toFixed(2)) +  parseFloat(custoDeRelacao.toFixed(2))
    document.querySelector('#total-dos-custos').innerHTML = parseFloat(totalDosCustos.toFixed(2))
}

function calcMan1(){
    
    let eficienciaDoCombustivelMan = document.querySelector('#eficiencia-do-combustivel')
    let precoDoCombustivel = document.querySelector('#combustivel')
    let precoDoOleo = document.querySelector('#oleo')
    let eficienciaDoOleoMan = document.querySelector('#eficiencia-do-oleo')
    let precoDoPneu = document.querySelector('#pneu')
    let eficienciaDoPneuMan = document.querySelector("#eficiencia-do-pneu")
    let precoDaRelacao = document.querySelector('#relacao')
    let eficienciaDaRelacaoMan = document.querySelector('#eficiencia-da-relacao')
    
    custoDeCombustivel = (parseFloat(distanciaDaCorrida.value) * parseFloat(precoDoCombustivel.value)) / parseInt(eficienciaDoCombustivelMan.value)
    document.querySelector('#custo-de-combustivel').innerHTML = parseFloat(custoDeCombustivel.toFixed(2))
    
    custoDeOleo = (parseFloat(distanciaDaCorrida.value) * parseFloat(precoDoOleo.value)) / parseInt(eficienciaDoOleoMan.value)
    document.querySelector('#custo-de-oleo').innerHTML = parseFloat(custoDeOleo.toFixed(2))
    
    custoDePneu = (parseFloat(distanciaDaCorrida.value) * parseFloat(precoDoPneu.value)) / parseInt(eficienciaDoPneuMan.value)
    document.querySelector('#custo-de-pneu').innerHTML = parseFloat(custoDePneu.toFixed(2))
    
    custoDeRelacao = (parseFloat(distanciaDaCorrida.value) * parseFloat(precoDaRelacao.value)) / parseInt(eficienciaDaRelacaoMan.value)
    document.querySelector('#custo-de-relacao').innerHTML = parseFloat(custoDeRelacao.toFixed(2))
    
    let lucroReal = parseFloat(valorDaTaxa.value) - (custoDeCombustivel +  custoDeOleo + custoDePneu + custoDeRelacao)
    document.querySelector('#valor-da-taxa').innerHTML = parseFloat(lucroReal.toFixed(2))
    
    totalDosCustos =  parseFloat(custoDeCombustivel.toFixed(2)) + parseFloat(custoDeOleo.toFixed(2)) + parseFloat(custoDePneu.toFixed(2)) +  parseFloat(custoDeRelacao.toFixed(2))
    document.querySelector('#total-dos-custos').innerHTML = parseFloat(totalDosCustos.toFixed(2))
}

calcAuto.addEventListener('click', () =>{
   
   calculoAutomatico = true
   containerPrincipal.classList.remove('hidden')
   tipoDeMotos.classList.remove('hidden')
   opcoesDeCalculo.classList.add('hidden')

})

  tipoDeMotos.addEventListener('change' , function() {

    if(this.value === 'honda-160/150'){
        honda150e160 = true
    } if(this.value === 'bross150/crosser-150' || this.value === 'factor-150') {
        honda150e160 = false
    } if(this.value === 'cb-300/xre-300') {
        xreCb = true 
    } if(this.value === 'fazer150/xre-190') {
       xreCb = false
    }
})

 calcMan.addEventListener('click' , ()=>{
    calculoAutomatico = false
    opcoesDeCalculo.classList.add('hidden')
    containerPrincipal.classList.remove('hidden')
    tipoDeMotos.classList.add('hidden')

    for (let i = 1 ; i <= 8 ; i++){
        let input = document.querySelector('#calculos .hidden')
        input.classList.remove('hidden')
    }
})

botaDoCalculo.addEventListener('click' , ()=>{
            //opcoesDeCalculo.classList.add('hidden')
            tipoDeMotos.classList.add('hidden')
            sessaoDeCalculos.classList.add('hidden')
            contDosCustos.classList.remove('hidden')
            //botaoDeFecharCalculos.classList.add('hidden')
            sessaoDeComentarios.classList.remove('hidden')
        
            if (calculoAutomatico === true) {
                
                if (honda150e160 === true) {
                    eficienciaDoCombustivel = 36
                    eficienciaDoOleo = 1000
                    eficienciaDosPneus = 20000
                    eficienciaDaRelacao = 12000 
                    valorDosPneus = 204.45
                    valorDaRelacao = 152.27
                
                }  if (honda150e160 === false) {
                    eficienciaDoCombustivel = 33
                    eficienciaDoOleo = 1000
                    eficienciaDosPneus = 30000
                    eficienciaDaRelacao = 12000 
                    valorDosPneus = 254.72
                    valorDaRelacao = 188.55
                   
                } if (xreCb === true) {
                    eficienciaDoCombustivel = 23
                    eficienciaDoOleo = 5000
                    eficienciaDosPneus = 36000  
                    eficienciaDaRelacao = 12000
                    valorDosPneus = 326.86
                    valorDaRelacao = 250
                
                } if (xreCb === false) {
                    eficienciaDoCombustivel = 40
                    eficienciaDoOleo = 1000
                    eficienciaDosPneus = 32000  
                    eficienciaDaRelacao = 13000
                    valorDosPneus = 254.72
                    valorDaRelacao = 188.55
                }
                
                calcAuto1()
            
            } else {
                
                calcMan1()
            
            }
})

botaoDeRecalcular.addEventListener('click' , ()=>{
    
    contDosCustos.classList.add('hidden')
    sessaoDeCalculos.classList.remove('hidden')
    tipoDeMotos.classList.remove('hidden')
    botaoDeFecharCalculos.classList.remove('hidden')
    
    if(calculoAutomatico === false){
        tipoDeMotos.classList.add('hidden')
    }
})

botaoDeFecharCalculos.addEventListener('click' , ()=> location.reload())