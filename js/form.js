    // regExp = [ /[a-z A-Z]{5,30}/ , /[0-9]{2}[/][0-9]{2}[/][1-9]{4}/ , /\d{3}\.\d{3}\.\d{3}\-\d{2}/ , /\w+\@\w+.com|.com.br/ , /\(\d{2}\)\d{5}[-]\d{4}/ , /\w+\s\d+/ , /\w{1,2}\s?\w{2,3}/ , /[a-z A-Z]{3,25}/ , /\d{5}\-\d{3}/ , /[a-z A-Z]{3,20}/]
    
    const form = document.querySelector('#form')
    const botao = document.querySelector('#botao-form-sorteio')
    
    regExp = [/^[A-Za-z]{3}/ , /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/ , /[0-9]{2}\/\d{2}|[A-Za-z]\/[0-9]{2}/ , /[A-Za-z0-9.-_]@\w+\.com|com.br/ , /\(?\d{2}\)?\d{5}-?\d{4}/ , /[A-Za-z]\s+\d{2,5}/ , /[A-Za-z0-9]{1,4}\s+[0-9]{1,4}/ , /^[A-Za-z]\s?/ , /^[0-9]{5}-?[0-9]{3}$/ , /[A-Za-z]\s?$/]
    validando = []
    
    setTimeout(()=>{
        botao.addEventListener('click' , ()=> {
    
            for(let i = 0 ; i <= 9 ; i++){
                
                let input = document.querySelector('.input')
                let inputValue = document.querySelector('.input').value
                input.classList.remove('input')

                if(inputValue === ''){
                    alert('Preencha todos os campos.')
                    return
                } 
                
                let retornoDaRegExp = regExp[i].test(inputValue)
                validando[i] = retornoDaRegExp

                if(validando[i] === false) {
                    if(i === 0){
                        alert('Preencha seu nome completo somente com letras sem acento e sem numeros.')
                        return
                    }

                    if(i === 1){
                        alert('Seu cpf deve conter somente numeros com no minino 11 digitos.')
                        return
                    }

                    if(i === 2){
                        alert('Preencha assim : dia/mês/ano.')
                        return
                    }

                    if(i === 3){
                        alert('Prencha com um email válido.')
                        return
                    }

                    if(i === 4){
                        alert('Verifique se está faltando o DDD ou algum número do seu contato.')
                        return
                    }

                    if(i === 5){
                        alert('Preencha a rua e o número do imovel.')
                        return
                    }

                    if(i === 6){
                        alert('Preencha somente o número do Bl e do Ap.')
                        return
                    }

                    if(i === 7){
                        alert('Preencha somente o nome do bairro.')
                        return
                    }

                    if(i === 8){
                        alert('Preencha somente com números 4.')
                        return
                    }

                    if(i === 9){
                        alert('Preencha o nome de sua cidade somente com letras.')
                        return
                    }
                }
            }

            if (validando[0] && validando[1] && validando[2] && validando[3] && validando[4] &&
                validando[5] && validando[6] && validando[7] && validando[8] && validando[9] === true    
            ){
               form.submit()
            }

            
        })
    },5000)
    
    