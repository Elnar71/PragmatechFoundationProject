from os import write


def foo():
    x = 6
    print(x)

    def bar():
        a = 5
        print(a)


def cond():
    if(6 > 4):
        print('Yes')
    else:
        print('Nope')


def sth(a, b):
    print(a-b)


print(sth(5, 2))

#  /* Ders1 */
ad = input('Adin ne ? ')
soyad = input('Soyadınız ? ')
adam = f'{ad} {soyad} \n'
file = open('data.txt', 'a')
file.write(adam)
