Algoritmo Repetitivas_Num_primos
	// Entrada: Cantidad de numeros = 50
	// Salida: Numeros primos menores a 100
	// Inicializar
	cant_no <- 50
	num <- 1
	//               V               V
	Repetir  //= V
//		Cant_no <- cant_no - 1
		
		num_div <- 0
		divisor <- 1
		//Verificación de que un numero se divide
		//Entre 1 y si mismo ?
		Mientras (divisor <= num)
			
			Si(num % divisor = 0) 
				// Contabilizar el numero de divisiones
				num_div <- num_div + 1
			FinSi
			divisor <- divisor + 1
		FinMientras

		Si (num_div <= 2)
			//Muestro por pantalla el número primo
			Mostrar "Es un numero primo ", num
			//Contabilizar el número de impresiones en pantalla
			Cant_no <- cant_no - 1
		FinSi
		num <- num + 1
	Hasta Que (cant_no = 0)
FinAlgoritmo
