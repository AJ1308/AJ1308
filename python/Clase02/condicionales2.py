#Dado el sueldo actual de un empleado,
#si este es el menor a Q4000 se incrementa en un 12%,
#en caso contrario es el 8%. Al final mostrar el aumento y su nuevo sueldo
# sueldo = float(input("Ingrese su sueldo: Q"))
# if sueldo < 4000:
#     aumento=sueldo*0.12
# else:
#     aumento=sueldo*0.08
# new_sueldo= sueldo+aumento
# print(f'Su sueldo aumentó= Q{aumento:.2f}. Su nuevo sueldo es: Q{new_sueldo:.2f}')
#---------------------------------------------------------
'''
Categoria ---
Recursos humanos = 3
Contabilidad = 5
Sistemas = 2
'''
codigo=input("Ingrese su código de empleado: ")
cat=int(input("Ingrese la categoria: "))
ant=int(input("Ingrese sus años de antiguedad: "))
#flag=bandera
respuesta=False 
if cat == 3 or cat == 5:
    if ant >=5:
        respuesta=True
elif cat ==2 and ant >=10:
    respuesta=True
if respuesta:
    result="reune las caracteristicas para el puesto"
else:
    result="no reune las caracteristicas para el puesto"
print(f'El empleado con código {codigo}', result)

