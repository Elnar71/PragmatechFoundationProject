class ID:
 ad='Elnar'
 soyad='Mammadov'
 yas=21

 def age(self):
  print(f'{self.yas}')

tlb=ID()
tlb.age()
# ---------------

class ID:
 def __init__(self,_ad,_soyad,_yas):
  self.ad=_ad
  self.soyad=_soyad
  self.yas=_yas

 def fullinfo(self):
   print(f'{self.ad} {self.soyad} {self.yas}')

 def pens(self):
  if self.yas>25:
   print('Get kef ele')
  else:
   print('Oxumaq lazim')

tlb=ID('Elnar', 'Mammadov', 21)
tlb.pens()
tlb.fullinfo()

