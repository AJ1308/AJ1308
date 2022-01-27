'''
for.- Cuando se conoce el número de veces que se repetirá el bucle
while. Cuando el bucle termina cuando sucede un valor True
'''

# cont=0
# acumu=0
# for x in range(1,5):
#     sueldo=float(input(f'Ingrese sueldo {x}: '))
#     cont=cont+1
#     acumu=acumu+sueldo
#     prom_sueldo=acumu/cont
# print(f'La cantidad de empleados es {cont}')
# print(f'El total de sueldos es {acumu}')
# print(f'El promedio de sueldos es {prom_sueldo:.2f}')
# print("Fin del bucle")

#Break essalir del bucle
#Continue es seguir con la secuencia del bucle

# for i in range (1,10):
#     if i==7:
#         break
#     else:
#         print(i)
#     continue

# i=0
# suma=0
# while i<=99:
#     i=i+1
#     suma=suma+i
#     print(i)
# print(f'La suma de los numeros es {suma}')

#Escribir un programa que solicite la constraseña para ingresar al sistema
#Si la contraseña es errada deberá intenrarla "n" veces
# contra = "python"
# user=input("Ingrese el nombre de usuario: ")
# cont = 3
# while True:
#     con=input("Ingrese la contraseña: ")
#     if con==contra:
#         print(f'Acceso aprobado, bienvenido {user}')
#         break #True
#     else:
#         cont-=1
#         print(f'Acceso denegado, quedan {cont} intentos')
#         if cont == 0:
#             print("Supero el limite de intentos, intentelo mas tarde")
#             break

#Es
# import random
# secret_num=random.randint(1,10)
# intentos=0
# while True:
#     num=int(input("¿Cuál es el número secreto? "))
#     intentos=intentos+1
#     if num==secret_num:
#         print("¡Acertaste!")
#         print(f'Numero de intentos {intentos} ')
#         break
#     else:
#         if secret_num>num:
#             print(f'El numero secreto es mayor que {num}')
#         else:
#             print(f'Elnumero secreto es menor que {num}')

#Challenge 1
#Escribir un programa que solicite ingresar 10 notas de alumnos y nos informe
#¿Cuántos notas mayores o iguales a 17 y cuantos menores?
#Utilizar while

# notas_mayores_17=0
# notas_menores_17=0
# i=1
# while i<=10:
#     notas=float(input(f'Ingrese nota {i}: '))
#     if notas>=17:
#         notas_mayores_17=notas_mayores_17+1
#     else:
#         notas_menores_17=notas_menores_17+1
#     i +=1
# print(f'La cantidad de estudiantes mayores a 17 en su nota {notas_mayores_17}')
# print(f'La cantidad de estudiantes menores a 17 en su nota {notas_menores_17}')

#Challenge 2
#Hacer un programa que simule lo que debo pagar en una tienda online
#Debe pedir el nombre de producto, su precio y cantidad
#Podemos hacer "n" compras hasta que yo le indique en el mensaje desea seguir
sumtotal=0
while True:
    product = input("Ingrese el producto a comprar: ")
    precio=float(input("Ingrese el precio del producto Q"))
    cant=int(input("Ingrese la cantidad a comprar: "))
    subtotal=precio*cant
    sumtotal=sumtotal+subtotal
    #Acumula todas las compras realizadas
    #Todo lo que esta en la cesta del carrito
    msj=input("¿Deseas seguir comprando?: ")
    if msj.upper() == "NO":
        print(f'Total a pagar Q{sumtotal}')
        break
