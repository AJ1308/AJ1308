Algoritmo Condicional_Simple
	// ENTRADA : X -> valor numerico
	// SALIDA : F(X)
	// Inicializacion de las variables
	X <- 0
	FX <- 0
	
	Escribir 'Ingresa el valor para la variable X :'
	Leer X
	Si X>0 Entonces
		// F(X) = X al cuadrado
		// X <- X*X 
		FX <- X^2
		
	SiNo
		
		// F(X) = 0
		FX <- 0
	FinSi
	// <= ->  "<" + "="
	Escribir 'El valor de x ingresado es :',X
	Escribir 'F(X) = ',FX
FinAlgoritmo
