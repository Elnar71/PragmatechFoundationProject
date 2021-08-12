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
2cisi ise eyni qayda da ona gederek ozunu dolgun ifadelerle ifade elemek meselcun yasadiginiz xos gunleri bir birinize ne qeder aid oldugunu ve saire xatirlatmaq 
 en sonda evlilik teklifini dile getirmekdi (Imperative)
bu zaman saydigimiz iki yolun 1cisi declerative 2cisi ise impertaive language adlanir
Daha aydin desek Declerative dillerde biz bir basa ne istediyimizi edirik.
Imperative de ise bu meselenin backgrounduna ve bir sira diger amillere nezer saldiqdan sonra yerine yetiririk