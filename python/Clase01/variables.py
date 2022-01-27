# #Reglas para definir variables
# #snake_case
# codigo_cliente = ""
# #Tipo de Datos
# edad = 28 #tipo int
# nombre = "Angel" #tipo str
# precio = 28.8 # tipo float
# estado = True #tipo bool

# print(type(edad))
# print(type(nombre))
# print(type(precio))
# print(type(estado))

# #Colecciones (Arreglos)
lista_cursos=["Python", "C++", "Php"] #listas
sueldos = (1900, 1700, 1850) #tuple #inmutables(no modificables)
empleados = {'codigo':'a100', 'codigo':'a200'} #dict
#                #clave: valor,  clave : valor
# print(type(lista_cursos))
# print(type(sueldos))
# print(type(empleados))

#palabras reservadas
# import keyword
# print(keyword.kwlist)

#conversion de datos
valor = "234"
valor2 = 100
valor3= 345.78

# print(type(int(valor))) #int devulve solo la parte entera 234
# print(type(float(valor2))) #float convierte en decimal"100.00"
# print(type(str(valor3))) #

#Ejercicios practicos
#Calcular peso de un objeto
masa = 75
gravedad = 9.81
peso = masa * gravedad
# print(peso)
# print(int(peso))

# #promedio de notas
# #funcion Input .- permitir ingresar valores por consola
# # alumno = input("Ingrese el nombre de un alumno:")
# # n_uno= float(input("Ingresa nota 1: "))
# # n_dos = float(input("Ingresa nota 2: ")) 
# promedio = ((n_uno+n_dos)/2)
#concatenación
# print("El promedio de Jan es:", promedio)
# print("El promedio de {} es {}".format(alumno, promedio))

#OPERADORES MATEMÁTICOS
# print(2+2)#4
# print(2*2)#4
# print(2-2)#0
# operacion=(5/3)#1.0
# print(5//3)#1
# print(2%2)#Para saber el residuo R//0
# print("El valor aproximado es %.2f"%operacion)#Para redondear decimales

#OPERADORES LÓGICOS
'''
> Mayor que
< Menor que
>= Mayor/igual
<= Menor/igual
! Diferente
== Igual
and = y
or = o
not = negacion
'''

#Ejercicios Format
# pago_hora = 60.00
# name = input("Ingrese el nombre del empleado: ")
# horas_trab = int(input("Ingrese las horas trabajadas: "))
# pago_jornal= horas_trab*pago_hora
# # print(name,"recibirá el monto de:",pago_jornal)
# print("{} recibira el monto de {}".format(name,pago_jornal))

# pizza= int(input("Hola, ¿Cuantás rebanadas de pizza trajiste? " ))
# comidas= int(input("¿Cuantás rebanadas se comieron? "))
# print(f'Si trajiste {pizza} rebanadas de pizza y se comieron {comidas}, quedan {pizza-comidas} rebanadas')

#Separadores, tabuladores y saltos de línea
print("Hola", "mundo", sep='<->')
print("Hola",end="")
print("mundo")
print("saltos delinea. Viene un salto \n\n")