Algoritmo mayorque_menorque
	Escribir "Escriba 3 Números"
	Leer A, B, C
	Segun A, B, C Hacer
		A>B Y B>C:
			Imprimir A
			Imprimir B
			Imprimir C
//		opcion_2:
//			secuencia_de_acciones_2
//		opcion_3:
//			secuencia_de_acciones_3
//		De Otro Modo:
//			secuencia_de_acciones_dom
	Fin Segun
	Si A>B Y B>C Entonces
			Imprimir A
			Imprimir B
			Imprimir C
		FinSi
		Si A<B Y B>C Y A>C Entonces
				Imprimir B
				Imprimir A
				Imprimir C
		FinSi
		Si A<B Y B>C Y A>C Entonces
			Imprimir B
			Imprimir A
			Imprimir C
		FinSi
FinAlgoritmo
