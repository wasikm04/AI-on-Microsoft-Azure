# Computer Vision

## Computer Vision Api
### 1. Intro 
####  1.1. Przedstawienie serwisu
Serwis Computer Vision to zbiór rozwiązań dających dostęp do zaawansowanych algorytmów przetwarzania obrazów. Pozwala bez specjalistycznej wiedzy wykorzystać różne mechanizmy i wydobyć interesujące nas informacje które możemy dalej przetwarzać lub wykorzystać w dowolnym celu.
####   1.2. Opis serwisu
Najbardziej znaczące usługi do jakich dostajemy dostęp za pośrednictwem tego serwisu to optyczne rozpoznawanie znaków (OCR) na dokumentach drukowanych jak i pismach odręcznych. Mamy możliwość również detekcji obiektów na obrazie, ich oznaczeniu, otagowaniu lub opisie na podstawie tych cech. Równie istotna jest funkcja rozpoznawania twarzy i oceny wyrażanych przez nie emocji.
### 2. Use cases
Computer Vision poprzez cały wachlarz funkcji zapewnia ogrom możliwości do wykorzystania w projektach informatycznych i nie tylko. Przykładowe zastosowania:

- Aplikacja do prostej obróbki zdjęć gdzie na przykład zamazywane są obszary w których rozpoznano ludzką twarz
- System do zbierania statystyk na temat zainteresowania widowni daną prezentacją lub filmem i jak ich emocje zmieniały się w trakcie aby móc lepiej dostosować zawartość pod dane grupy społeczne lub wiekowe.
   
### 3. How to
####   3.1. Użycie serwisu
Tak jak w przypadku usług Cognitive Services tu również mamy dostęp do dedykowanych SDK w najpopularniejszych językach. Oprócz tego możemy wykorzystać REST API i używanie go jest niewiele trudniejsze od SDK gdyż do korzystania z Computer Services potrzebujemy jedynie Subscription Key oraz sam endpoint z odpowiednią usługą oraz regionem. Dzięki temu możemy korzystać z dowolnego narzędzia które może wysyłać zapytania HTTP z własnymi nagłówkami.
####   3.2. Pricing
W wersji F0 mamy darmowy dostęp do 5000 transakcji miesięcznie. W planie S1 przy dostępie zarówno poprzez internet jak i kontener otrzymujemy możliwość wysyłania do 10 zapytań na sekundę płatnych od 0.844 do 0,549 euro za 1000 transakcji w zależności od progów ilości transakcji. 
#
## Custom Vision
### 1. Intro 
####  1.1. Przedstawienie serwisu
Azure Custom Vision to usługa pozwalająca na budowanie własnych modeli służących do rozpoznawania obiektów na obrazie lub klasyfikacji. 
####   1.2. Opis serwisu
Serwis ten udostępnia algorytmy które możemy wykorzystać w celu douczenia modelu na podstawie dostarczonej przez nas bazy obrazów oraz ich oznaczeń. Przygotowany model możemy wykorzystać do klasyfikacji lub detekcji i oznaczenia obiektu na obrazie, dzięki temu otrzymujemy etykiety dla danego przyporządkowania. Przygotowanie modelu może trwać bardzo krótko a rezultaty testów będą zadowalające, przy kilkunastu oznaczonych obrazach dla danej kategorii możemy rozpocząć uczenie choć taki model nie pozwoli to na wykrywanie drobnych różnic w obrazach.
### 2. Use cases
- Aplikacja dokonująca detekcji anomalii lub schematów charakteryzujących dane skały wraz z oznaczeniem na zdjęciu w celu zbudowania jak największej bazy wiedzy przez zwykłych użytkowników nie mających specjalstycznej wiedzy z dziedziny Petrografii lub Geologii pozwalającej na samodzielną analizę. 
- Aplikacja mobilna dla entuzjastów zielarstwa aby za pomocą wysłanych zdjęć otrzymywali podpowiedzi co do gatunku danej rośliny 
### 3. How to
####   3.1. Użycie serwisu
Custom Service możemy wykorzystywać poprzez dedykowane SDK lub serwis internetowy. SDK pozwala między innymi na automatyzację procesu uczenia dla wielkich zbiorów obrazów natomiast za pomocą serwisu możemy na przykład wygodnie testować już wytrenowany model. W większości przypadków lepszym rozwiązaniem jest wykorzystanie SDK dostępnego dla kilku języków programowania gdyż zapewnia wszystkie potrzebne funkcje do budowy i rozwoju modelu a w przypadku serwisu sprawdzi się on dla niewielkich projektów.
####   3.2. Pricing
Dostępne są dwie wersje, darmowe F0 oraz standardowe S0. Darmowy plan posiada ograniczenia w postaci limitu 5000 obrazów na projekt oraz 10000 zapytań o analizę obrazu miesięcznie. W przypadku S0 wszelkie limity są wielokrotnie większe lub całkiem zniesione lecz za to pobierane są opłaty w wysokości 16.866 euro za godzinę uczenia modelu, 0.591 euro za 1000 przechowywanych obrazów oraz 1.687 euro za 1000 wykonanych transakcji.
#
## Video Indexer
### 1. Intro 
####  1.1. Przedstawienie serwisu
Serwis ten dostarcza rozwiązania analizy wideo na podstawie obrazu i dźwięku. Możemy dzięki temu rozpoznawać twarze osób, tekst czy obiekty na filmie oraz oznaczać poszczególne klatki. Ponadto przesłane filmy są dzielone na sceny oraz ujęcia na podstawie obrazu. Oprócz tego dokonywana jest analiza audio, w tym rozpoznanie emocji, języka mówionego, transkrypcja czy techniczne operacje jak redukcja szumu. 
####   1.2. Opis serwisu
Video Indexer pozwala podobnie jak w przypadku usług Cognitive Services na wykorzystanie możliwości modeli uczenia maszynowego bez ich znajomości oraz bez znajmości programowania. Usługa ta łączy w sobie wiele funkcji zaczerpniętych zarówno z usług analizy obrazu jak i audio co razem daje tak rozbudowane narzędzie że sama lista funkcji przytłacza nie wspominając o używaniu ich w różnych kombinacjach aby osiągnąć jakiś cel.
### 2. Use cases
- Możliwość podziału na sceny i ujęcia pozwala na stworzenie inteligentnego moderatora treści udostępnianych na przykład na YouTube gdzie chcemy pominąć statyczne, nudne sceny lub oczekujemy przedstawienia tylko tych części wideo które dotyczą wyszukanego przez nas tematu.
- Aplikacja pomagająca w zwiększeniu dostępności wideo poprzez dodanie transkrypcji oraz opisów sceny, wydarzeń, kolorystyki czy emocji. Oprócz tego wycinanie elementów nieodpowiednich, uznanych za powielanie nieprawdy lub szerzących nienawiść. 
### 3. How to
####   3.1. Użycie serwisu
Udostępniony serwis pozwala na ręczne dodawanie wideo i poddawanie go analizie. Oprócz tego dostępne jest REST API pozwalające na automatyzację wszystkich operacji i włączenie nowych funkcjonalności w istneijące aplikacje. Aby rozpocząć pracę należy utworzyć konto połączone z subskrypcją Azure a następnie stworzyć Storage w którym przechowywane będą pliki wideo. Po zaindeksowaniu pliku możemy przyjrzeć się wszystkim kategoriom analizy elementów oraz obejrzeć wydzielone części wideo. W przypadku API możemy pobrać cały dokument JSON lub wybrane artefakty analizy z wyszczególnieniem czasu występowania danego elementu na wideo.
####   3.2. Pricing
Dla bezpłatnej wersji próbnej dostępne jest 10 godzin wideo do indeksowania za pośrednictwem witryny a dla użytkowników API jest to 40 godzin. W wersji płatnej dostępne są trzy plany S1, S2 i S3 które definiują przede wszystkim w jakiej rozdzielczości filmy możemy przetwarzać i jakie wówczas występują mnożniki ceny również z rozdziałem na obraz i audio. Cennik jest bardzo rozbudowany o usługi przesyłu na żywo lub z wielu urządzeń jednocześnie dlatego wyszczególnione zostaną tylko podstawowe usługi i tak za minutę analizy wideo płacimy 0.127 a za audio 0.034 euro.