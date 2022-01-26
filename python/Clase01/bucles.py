# for x in range(10):
#     print(x, "Hola mundo")

# for x in range(2,8,2):
#     print(x,)
# i=0
# while i<=100:
#     print(i)
#     i=i+1



contra= "cisco"
cont=3
while True:
    con=input("Contraseña: ")
    if con==contra:
        print("Acceso aprobado")
        break
    else:
        cont-=1
        print("Acceso denegado, quedan",cont,"intentos")
        if cont ==1:
            print("Acceso denegado, quedan",cont,"intento")
        if cont == 0:
            print("Supero el limite de intentos, intentelo mas tarde")
            break