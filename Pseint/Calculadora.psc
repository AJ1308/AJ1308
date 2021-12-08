Funcion r<-s(n1,n2,n3,n4,n5)
	r<-n1+n2+n3+n4+n5
FinFuncion
Funcion r<-re(n1,n2,n3,n4,n5)
	r<-n1-n2-n3-n4-n5
FinFuncion
Funcion r<-m(n1,n2)
	r<-n1*n2
FinFuncion
Funcion r<-d(n1,n2)
	r<-n1/n2
FinFuncion
Funcion r<-p(n1,n2)
r<-n1^n2
FinFuncion
Algoritmo  Calculadora
	Repetir
		Escribir "¿Que operación quieres realizar?"
		Leer op
		Si op = "Suma" O op = "suma" Entonces
			Mostrar  "¿Qué numeros deseas operar?"
			Leer n1, n2, n3, n4, n5
			Mostrar "Resultado: ", s(n1,n2,n3,n4,n5)
		Fin Si
		Si op = "Resta" O op = "resta" Entonces
			Mostrar  "¿Qué numeros deseas operar?"
			Leer n1, n2, n3, n4, n5
			Mostrar "Resultado: ", re(n1,n2,n3,n4,n5)
		Fin Si
		Si op = "Multiplicacion" O op = "Multiplicación" O op = "multiplicacion" O op = "Multiplicación" Entonces
			Mostrar  "¿Qué numeros deseas operar?"
			Leer n1, n2
			Mostrar "Resultado: ", m(n1,n2)
		Fin Si
		Si  op = "Division" O op = "División" O op = "division" O op = "división" Entonces
			Mostrar  "¿Qué numeros deseas operar?"
			Leer n1, n2
			Mostrar "Resultado: ", d(n1,n2)
		Fin Si
		Si op = "Potenciacion" O op = "Potenciación" O op = "potenciacion" O op = "potenciación" Entonces
			Mostrar  "¿Qué numeros deseas operar?"
			Leer n1, n2
			Mostrar "Resultado: ", p(n1,n2)
		Fin Si
		Mostrar "Pulsa una tecla"
		Esperar Tecla 
		Borrar Pantalla
	Hasta Que n
FinAlgoritmo


