let nombre = true
let pregunta = true
let puntaje = 0   
let telefono 

while (nombre){ 
nombre = prompt("Bienvenido al cuestionario de los ocho escalones del millón. Responda preguntas y sume 1 punto por cada respuesta correcta. Ingrese su nombre.")     
telefono = prompt("Ingrese un teléfono de contacto.") 
    if (isNaN(telefono)){
        alert("Ingrese un número válido.")
        continue           
    } else{
        alert("Sus datos han sido registrados con éxito.")
    }       
    while (pregunta) {
        pregunta = prompt("Pregunta N° 1. ¿Cuál es la capital de Nicaragua? a. Managua b. Tegucigalpa")
        if ((pregunta == "a")) {
            alert("¡Respuesta correcta! Usted suma 1 punto.")
            puntaje++
        } else if ((pregunta == "b")){
            alert("Respuesta incorrecta. Usted no suma puntos.")
        } else {
            alert("Ingrese una opción válida entre a o b.")    
            continue            
        } 
        while (pregunta){
            pregunta = prompt("Pregunta N° 2. ¿Cómo se denomina al proceso por el cual la materia pasa de estado sólido a líquido? a. Sublimación b. Fusión")  
            if ((pregunta == "b")) {
                alert("¡Respuesta correcta! Usted suma 1 punto.")
                puntaje++                
            } else if ((pregunta == "a")){
                alert("Respuesta incorrecta. Usted no suma puntos.")
            } else {
                alert("Ingrese una opción válida entre a o b.")    
                continue            
            } 
            while (pregunta){
                pregunta = prompt("Pregunta N° 3. ¿Qué actor protagonizó la película Bloodsport? a. Jean Claude Van Damme b. Brad Pitt")  
                if ((pregunta == "a")) {
                    alert("¡Respuesta correcta! Usted suma 1 punto.")
                    puntaje++                
                } else if ((pregunta == "b")){
                    alert("Respuesta incorrecta. Usted no suma puntos.")
                } else {
                    alert("Ingrese una opción válida entre a o b.")    
                    continue            
                }  
                while (pregunta){
                    pregunta = prompt("Pregunta N° 4. ¿Qué tipo de animal es una tijereta? a. Pájaro b. Insecto")  
                    if ((pregunta == "b")) {
                        alert("¡Respuesta correcta! Usted suma 1 punto.")
                        puntaje++                
                    } else if ((pregunta == "a")){
                        alert("Respuesta incorrecta. Usted no suma puntos.")
                    } else {
                        alert("Ingrese una opción válida entre a o b.")    
                        continue            
                    }  
                    while (pregunta){
                        pregunta = prompt("Pregunta N° 5. ¿Cuál es el ingrediente principal del tradicional Onigiri japonés? a. Salmón rosado b. Arroz")  
                        if ((pregunta == "b")) {
                            alert("¡Respuesta correcta! Usted suma 1 punto.")
                            puntaje++
                        } else if ((pregunta == "a")){
                            alert("Respuesta incorrecta. Usted no suma puntos.")
                        } else {
                            alert("Ingrese una opción válida entre a o b.")    
                            continue            
                        }  
                        while (pregunta){
                            pregunta = prompt("Pregunta N° 6. ¿Qué significa la letra R en la sigla RAM, que define a un componente de hardware utilizado en computadoras? a. Random b. Route")  
                            if ((pregunta == "a")) {
                                alert("¡Respuesta correcta! Usted suma 1 punto.")
                                puntaje++               
                            } else if ((pregunta == "b")){
                                alert("Respuesta incorrecta. Usted no suma puntos.")
                            } else {
                                alert("Ingrese una opción válida entre a o b.")    
                                continue            
                            }  
                            while (pregunta){
                                pregunta = prompt("Pregunta N° 7. ¿En qué parte del cuerpo humano se encuentra el hueso radio? a. Brazo b. Cadera")  
                                if ((pregunta == "a")) {
                                    alert("¡Respuesta correcta! Usted suma 1 punto.")
                                    puntaje++                
                                } else if ((pregunta7 == "b")){
                                    alert("Respuesta incorrecta. Usted no suma puntos.")
                                } else {
                                    alert("Ingrese una opción válida entre a o b.")    
                                    continue            
                                }  
                                while (pregunta){
                                pregunta = prompt("Pregunta N° 8. ¿Qué tipo de prenda es un mitón? a. Sombrero b. Guante")  
                                    if ((pregunta == "b")) {
                                        alert("¡Respuesta correcta! Usted suma 1 punto.")
                                        puntaje++                
                                    } else if ((pregunta == "a")){
                                        alert("Respuesta incorrecta. Usted no suma puntos.")
                                    } else {
                                        alert("Ingrese una opción válida entre a o b.")    
                                        continue            
                                    }  
                                    alert('Cuestionario finalizado con éxito. Usted ha sumado '+puntaje+' puntos.')                                      
                                    while (puntaje){                                        
                                            if ((puntaje <= "6")) {
                                                alert('Lo sentimos, '+nombre+'. Su puntaje no es suficiente para entrar al programa. inténtelo nuevamente.')  
                                                break                                                            
                                            } else if ((puntaje >= "7")){
                                                alert('¡Felicidades, '+nombre+'! Usted ha obtenido el puntaje mínimo para entrar al programa. Nos comunicaremos con usted a la brevedad al '+telefono+'.')
                                                break
                                            }         
                                            break                                   
                                        } 
                                    break
                                }  
                                break 
                            } 
                            break                                   
                        } 
                        break
                    }                                    
                    break 
                }  
                break                                  
            }  
            break                                  
        }                                    
        break
    }
    break  
}
