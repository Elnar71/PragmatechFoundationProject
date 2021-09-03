class User:
 def __init__(self,_ad,_soyad,_email,_phone): 
     self.ad=_ad
     self.soyad=_soyad
     self.email=_email
     self.phone = _phone

 def showuserData(self):
  print(f'{self.ad} {self.soyad} {self.email} {self.phone}')

users=[]
# Functions
def addUser():
 while True:
  ad = input('Ad : ')
  soyad = input('Soyad : ')
  email = input('Email : ')
  phone = input('Phone : ')
  user =User(ad,soyad,email,phone)
  users.append(user)
  emr=input('Yeni telebe elave etmek isteyirsinizmi? ')
  if emr=='No':
   break
 
def showallUsers():
  for user in users:
      user.showuserData()

def updateUser():
 print('Update User')

def deleteUser():
 print('Delete')

 #Program Flow
while True:
 print("""
-Yeni istifadeci elave etmek ucun 1 duymesine basin
-Butun istifadecileri gore bilmek ucun 2 duymesine basin
-Istifadeci melumatlarini deyismek ucun 3 duymesine basin
-Istifadeci silmek ucun 4 dumesine basin
-Programdan cixmaq ucun 5 duymesine basin
""")

 order = input('Istediyiniz emelyat nomresini daxil edin : ')
 if order == '1':
    addUser()
 elif order=='2':
    showallUsers()
 elif order=='3':
    updateUser()
 elif order=='4':
    deleteUser()
 elif order=='5':
    break
