    const form = document.querySelector('#form')
    
    const validarNome = /[a-z A-Z]{7,30}/
    
    const validarDataDeNasc = /[0-9]{2}[/][0-9]{2}[/][1-9]{4}/ 
    
    const validarCpf = /\d{3}\.\d{3}\.\d{3}\-\d{2}/ 
    
    const validarEmail = /\w+\@\w+.com|.com.br/ 
    
    const validarWhatsapp = /\(\d{2}\)\d{5}[-]\d{4}/
    
    const validarEndereco = /\w+\s\d+/
    
    const validarComplemento = /\w{1,2}\s?\w{2,3}/
    
    const validarBairro = /[a-z A-Z]{3,25}/
    
    const validarCep = /\d{5}\-\d{3}/
    
    const validarCidade = /[a-z A-Z]{3,20}/

    validando = [ /[a-z A-Z]{5,30}/, /[0-9]{2}[/][0-9]{2}[/][1-9]{4}/ , /\d{3}\.\d{3}\.\d{3}\-\d{2}/ , /\w+\@\w+.com|.com.br/ , /\(\d{2}\)\d{5}[-]\d{4}/ , /\w+\s\d+/  , /\w{1,2}\s?\w{2,3}/ , /[a-z A-Z]{3,25}/ , /\d{5}\-\d{3}/ , /[a-z A-Z]{3,20}/]
    console.log(validando)


    setTimeout(()=>{
        form.addEventListener('submit' , (e)=> {
            e.preventDefault()
    
            for(let i = 0 ; i <= 9 ; i++){
                let input = document.querySelector('.input')
                input.classList.remove('input')
                console.log(validando[i].test(input))
                  
            }
        })
    },5000)
    
    