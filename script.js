var campo = document.getElementById('entrada')

document.addEventListener('click', function(event) {
    if (event.target.value === '9') {
      
      campo.value += event.target.value 
    }
    else if (event.target.value === '8') {
      
        campo.value += event.target.value 
      }
    else if (event.target.value === '7') {
      
        campo.value += event.target.value 
      }
    else if (event.target.value === '6') {
    
        campo.value += event.target.value 
    }
    else if (event.target.value === '5') {
    
        campo.value += event.target.value 
    }    
    else if (event.target.value === '4') {
      
        campo.value += event.target.value 
      }
    else if (event.target.value === '3') {
        
        campo.value += event.target.value 
        }
    else if (event.target.value === '2') {
        
        campo.value += event.target.value 
        }
    else if (event.target.value === '1') {
      
        campo.value += event.target.value 
      }
    else if (event.target.value === '0') {
      
        campo.value += event.target.value 
      }  
    else if (event.target.value === '.') {
      
        campo.value += event.target.value 
      }  

    else if (event.target.value === '=') {
        // Use the eval() function to evaluate the expression in the input field
        campo.value = eval(campo.value)
    
  } } )

function limpar() {
    campo.value = ''
}

function multiplicar() {
    campo.value += '*'
}
