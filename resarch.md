<!-- Sizə görə layihələrdə ortaq classlar təyin edərkən nələrə diqqət olunmalıdır? -->
-Zənnimcə, ortaq classlar yaradan zaman ilk öncə diqqət olunmalı məqam odur ki- həqiqətən də mi, həmin classlardakı taglar bizim hər hansı layihə içərisində bir neçə dəfə  köməyimizə çatacaq? Əgər bu sualın cavabı "hə"dirsə deməli ortaq class yaratmaq mütləqdir:))
-Bundan başqa DRY qanununa əsasən ortaq classlardan istifadə zamanı təkrarçılıqdan istifadə minimuma endirilir.
-Ortaq classların ən diqqətəlayiq cəhətlərindən biri də onların idarəbilən hesab
olunmasıdır.Belə ki istədiyimiz zaman istədiyimiz yerdə kodlarda asanlıqla dəyişiklik edə
bilərik.
-Başqa bir diqqət olunmalı məqam isə odur ki, classlara verdiyimiz ad konkret olmamalıdır.Yəni, ad, verdiyimiz dizaynla bir başa əlaqəli olmasın.Çünki, dizaynı
nə vaxtsa dəyişdirə bilərik və bu zaman əlaqəli(eyni) ad bizə qarışıqlıq yaratmış olar.


<!-- DIFFERENCE BETWEEN COMPILER AND INTERPRETER -->
Bildiyimiz kimi yaddashdan istifadeye gore diller 2 yere ayrilir.
Ilk olaraq qeyd elemeliyemki bunlar her ikisi translatordu ve verilenleri komputerin basa duseceyi dile cevirir.ILk olaraq INTERPRETERIN nece islediyine baxaq -
<!-- Eger biz ozumuzu (program), ustani (interpreter), masinimizi- (computer) adlandirsaq onda- -->
Meselen bizim maşinimiz xarab olur ve biz(program) maşinimizi(computerimiz) temir edecek ustaya(interpreter) masini temir ede bilmesi ucun bir sira telimatlar veririk.Hemin usta bu telimatlari 1-1 oxuyur ve her birini ayri ayriliqda oxuduqca masinimiza tetbiq(translate) eleyir.Ve butun bu muddet erzinde usta bizimle beraber olur.Bu biraz uzun vaxt aparir cunki usta yeni(interpreter)bizim telimatlarimizi sirali olaraq ona demeyimizi gozleyir.Amma eyni zamanda  bizim elediyimiz sehvleri duzeltmeyimize imkan yaranir.Eger her hansi bir telimati sehv ve ya yerini qarişiq vermişikse bunu usta bize bildirir ve biz telimatda düzəliş ede bilerik.

<!-- Compilere geldikde ise- -->
<!-- Eger biz ozumuzu (program), ustani (compiler), masinimizi- (computer) adlandirsaq onda- --> -->
Bu zaman usta bir basa olaraq bizden(programdan) butun telimatlari goturur.Ve bir basa olaraq hamisini butovlukde masinimiza(komputere) tetbiq(translate) eleyir.Işini bitirdikden sonra maşini bize tehvil verir ve pulunu alaraq bizden ayrilir).Ve butun bunlar cox qisa zamanda baş verir cunki bu zaman usta butun telimatlari ozu bildiyi ucun gozlemeye duşmur ve hamisini oz başina tetbiq eleyir.Bunun pis terefi ondadirki eger usta maşinimiz uzerinde her hansi bir sehv iş gorurse biz bunu hemin anda duzelde ve ya gore bilmirik.

Demeli Interpreter : 1)Yavaş isleyir
2)Bize her bir neticeni yazdıqca gormeye imkan verir
3)Bir basa olaraq ise başlayir(telimatlari onun ucun biz oxuyuruq)

Compiler ise: 1)Cox suretli işleyir
2)Neticeni yalniz iş bitdikden sonra gore bilerik
3)Ise başlamagi biraz zaman alir(cunki telimatlari ozu oxuyur)



<!-- Imperative and Declerative Languages-->
Imperative language- bize kodu nece yazacagimizi gosterir
Declerative- ise yazdigimiz kodun qarsiliginda ne netice alacagimizi gosterir.(yeni bizim eslinde ne elediyimizi)

Meselen biz gedib sevdiyimiz qadina evlilik teklifi eden zaman bunu bir nece yolla ede bilerik gelin 2 yola baxaq.

1ci yol odurki hemin qadinin qarsisina gederek bir basa evlilik teklifi etmek qisa sozlerle( Declerative)

2cisi ise eyni qayda da ona gederek ozunu dolgun ifadelerle ifade elemek meselcun yasadiginiz xos gunleri bir birinize ne qeder aid oldugunu ve saire xatirlatmaq en sonda evlilik teklifini dile getirmekdi (Imperative)

bu zaman saydigimiz iki yolun 1cisi declerative 2cisi ise impertaive language adlanir
Daha aydin desek Declerative dillerde biz bir basa ne istediyimizi edirik.
Imperative de ise bu meselenin backgrounduna ve bir sira diger amillere nezer saldiqdan sonra yerine yetiririk





<!-- Function Declarationd and Function Assignment(also called as Function Expression) -->
    Differences -->

 1)1ci ferq SINTAKSIS ferqidir 
 <!-- // Function Declaration -->
function hello(){}

<!-- // Function Assignment -->
let hello=function(){}




2) Function Assignment her hansi bir deyisene(variable) teyin olunmus  ANONIM funksiyadir.
amma Function Declerationun ise ozune variable teyin edirik
 For example  






3)Daha bir ferq bu funksiyalarin cagirilmasi ile baglidir.
Meselen : 
```
<!-- hello()
function hello(){
 console.log('Hello')
} -->
```

Bu zaman biz netice olaraq 'Hello' alacagiq cunki Function Declaration oxunmasi ucun default olaraq her zaman seyfenin ve ya scriptin yuxarisina qaldirilir(it is hoisted) demeli biz bu functionu
hem ozunden evvel hem ozunden sonra cagira bilerik.


Function Assigmente geldikde ise o yalniz ozunden sonra cagirilmish adlari oxuyur.Eger biz bu funksiyanin adini ozunden evvel cagirsaq bu zaman o REFERENCE ERROR verecek.


Meselen :
```
<!-- hello()
let hello=function(){
 console.log('Hello')
} --> 

```

3cu meselenin helli

```
function Foo() {
 let a = 5
 return a
}

function Bar() {
 let a=Foo()
 console.log(a)
}
Bar()
```
<!-- netice olaraq 5 alacagiq -->



                 <!-- DOM -->
1)Attribute object --> ```attributes.name``` property
a)Bu metod bize atributun adini gosterir
d)Argument teleb etmir bir basa ad gosterir

2)Attribute object --> ```attributes.length``` property
a)bu metod bize nodemap icerisindeki attributlarin sayini gosterir
d)Argument teleb etmir bir basa reqem gosterir

3)Document object --> ```document.createComment``` method
a)bu metod bize istediyimiz kommenti yaratmaga imkan verir
b)return hesab olunur
c)Object tip melumat qaytarir
d)String formali 'Data' argumenti qebul edir 

4)Document object --> ```document.lastModified``` property
a)Dokuemntde en son ne zaman deisiklik oldugu gun ve zamani gosterir
b)Argument teleb etmir

5)Location object--> ```location.replace()``` method
a)Cari dokumenti yeni dokumentle evez edir
b)void hesab olunur
d) String formali 'URL' argumenti teleb edir 

7)Navigator object--> ```navigator.javaEnabled()``` method
a)Browserin Java erisimli olub olmadigini yoxlayir. Eledirse 'True' deilse 'False' gosterir
b)return hesab olunur
c)Boolean tip melumat qaytarir
d)Argument teleb etmir

8)Window object--> ```windows.scrollTo()``` method
a)Dokumenti verdiyimiz deyer qeder ufuqi veya saquli olaraq surusdurur.
b)void hesab olunur
d)number formada 2 eded 'x' ve' y' argumenti teleb edir

9)Window object--> ```windows.outerHeight/outerWidth``` property
a)Toolbars ve Scrollbars daxil olmaqla browserin uzunlugunu ve enini gosterir
b)Argument teleb etmir

10)Style object--> ```object.style.clip()``` property
a)Elementin hansi hissesinin gorunub gorunmeyeceyini teyin edir
b)'String' formada (auto(default) rect(top right bottom left) initial ve inherit ) argumenti qebul edir

      
                         /* Python */
Pythonda asagida gosterilen 7 data type var ve her data type de ozluyunde cesidlere bolunur.Ve bunlardan 'JAVASCRIPT'LE ad olaraq ortaq olan yalniz Boolean ve Numericdir.Bundan bashqa javascriptde data typlerin ozluyunde cesidlere bolunmesi (mes:Numeric Types:int, float, complex) yox idi.  ->
```
Text Type:	str
Numeric Types:	int, float, complex
Sequence Types:	list, tuple, range
Mapping Type:	dict
Set Types:	set, frozenset
Boolean Type:	bool
Binary Types:	bytes, bytearray, memoryview
```

Pythonda asagidaki operatorlar var.Bunlardan Identity ve Membership operatorlari 'JAVASCRIPTDE'olmayan bizim ucun yeni operatorlardir. ->
```
Arithmetic operators
Assignment operators
Comparison operators
Logical operators
Identity operators
Membership operators
Bitwise operators
```


                  Data Type Conversion
Data tip cevirmek ucun biz 'Implicit'(gizli) data tip cevirmeden istifade ede bilerik.
Bu o demekdirki bu tip cevrilme bir basha PYTHONun ozu terefinden biz kodumuzu run zaman avtomatik olaraq edilir.BAxacagimiz numunede netice 'float typene'   cevrilecek.
1)
```
a=3
b=3.4
c=a+b
print(c)
```

Bashqa bir cevrilme metodu 'Explicit'(ashkar,aciq) cevrilme metoudur.Bu zaman biz cevirmek istediyimiz metodu daxil edirik. Meselen int() float() str() ve s
2)
```
a=123
b='456'
b=int(b)
c=a+b
print(c)

```

3) 
```
a = [1, 2, 3, 4, 5, 6]
b = (7, 9, 9, 10)
print(tuple(a))
print(list(b))
```

4)
```
a=21
bin_a=bin(a)
print(bin_a)

```
5)
```
fruit = 'Orange'
print(set(fruit))
fruit_list = list(fruit)
fruit_list.append('s')
print(fruit_list)

```

                     Function

b)1)                  
Parameter deyilende nezerde tutulan odurki biz funksiyani teyin eden zaman morterizeler icinde yazdigimiz variabledir. Meselen->
```
def myfunc(a): /*bu halda a bizim 'parameterimiz' hesab olunur.*/
```
b)2)
Argument ise funksiyani cagiran zaman bu parametrin yerine yazidigimiz valuedir ->
```
def myfunc(a):
    print(a)
myfunc(5)  /*bu halda yazdigimiz 5 bizim 'argumentimiz' hesab olunur. */
```

c)1)Arbitrary Arguments, *args bu o demekdirki biz eger argumentimizin sayini deqiq bilmirikse o zaman parametri teyin eden zaman qarwisina * isaresini qoyuruq.Ve daha sonra print etdikde istediyimiz argumenti cagirmaq ucun onun indeks nomresinden istifade edirik.Numuneye baxsaq:
```
def myfunc(*names):
    print('My name is '+ names[1]) /* bu halda 'My name is Ramin'*/ olacaq

myfunc('Elnar', 'Ramin', 'Nofel')
```

c)2)
Keyword Arguments bu zaman biz her bir argumentin hansi parametere aid oldugunu elle daxil edirik. Meselen:

```
def myfunc(fruit1,fruit2,fruit3):
    print('My lovely fruit is '+ fruit2)  /* bize netice olaraq 'My lovely fruit is berry' verecek */
myfunc(fruit1='apple', fruit2='berry', fruit3='banana') 
```

c)3)Arbitrary Keyword Arguments, **kwargs Eger biz keyword argumentlerimizin sayini bilmirikse bu zaman double ** dan istifade edirik

```
def myfunc(**key):
    print('Her surname is '+ key['adios'])
myfunc(adios='Chio', patos='Mia')    
```


c)4)
Default Parameter Value bu o demekdirki biz funksiyani cagiran zaman ona argument vermirikse o oz default verilen argumentinden istifade edecek numuneye baxaq:
```
def myfunc(car='Honda')
    print('My lovely car is ' + car)
myfunc()      /* yalniz bu halda o 'Honda' stringini qebul edecek. */
myfunc('BMW')
myfunc('MERCEDES')
myfunc('SUPRA')
```


Key Differences Between Python and JavaScript

1) Javascript de yeni bir deyisen ve ya ifade teyin elemek daha dogru desek: bir verileni digerinden ferqlendirmek ucun ' ; ' istifade edilir.Python da ise eynisini elemek ucun sadece yeni setirden yazmagimiz kifayet edir.
2) Python istifadeci terefinden asan idare olunmasi ucun daha yaxsi dizayn edilib.Ancaq Pythonla muqayisede Javascript daha az keyfiyyetli programlasdirma dilidir.
3) JavaScript mobil development ucun yaxsi oldugu halda, Python o qeder de yaxsi hesab olunmur.
4) Pyhtonun isleme sureti Javascriptle muqayisede daha yavasdir.
5) Pythonun Javascriptle muqayisede daha zengin kitabxanasi var
6) Pythonun elmi hesablama, data analitikasi ve maschine learning ucun bir cox kitabxanasi oldugu halda Javascriptin yoxdur
7) JavaScript hem browserde hemde serverde isleyir.Ancaq Python esasen server yonumlu programlasdirmada istifade olunur.
8) Daha oncede qeyd elediyim kimi Python data analitikasi ve machine learning ucun ideal oldugu halda, JAvascriptden esasen web seyfelerin dizayn olunmasi ucun istifade olunur
9) Pythonun reqemsal data tipi ucun int, float, fixed-point decimal kimi novleri var.JAvascript de ise esasen floating-point variablesden istifade olunur
10) Pythonda deyisken ve deyisken olmayan data tipi anlayisi var.Meselen set(mutable) list ise(immutable) hesab olunur.Ancaq Javascriptde bele bir anlayish yoxdur.
11) Pythonda REPL(Read Evaluate Print and Loop)anlayisi var. Yeni yazilan kodu run elemek ucun ozune mexsus bir nece softwaresi movcuddur.Javascript ise xususi bir software istifade elemir. Adeten browser uzerinden run olunur.Ancaq node.js texnologiyasini yukleyerek javascripti onun uzerinden de run elemek olar.