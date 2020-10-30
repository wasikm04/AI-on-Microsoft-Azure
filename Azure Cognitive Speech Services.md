# Azure Cognitive Speech Services

## Speech-to-Text
### 1. Intro 
####  1.1. Przedstawienie serwisu
Usługa pozwala na przekształcanie lub tłumaczenie strumienia audio z mową na tekst w czasie rzeczywistym.
####   1.2. Opis serwisu
Rozpoznawanie mowy w czasie rzeczywistym lub z plików audio daje duże możliwości w kontekście podejmowania decyzji na podstawie przekazywanych informacji. W połączeniu z innymi usługami poznawczymi można wskazywać intencje oraz główne informacje i w czasie rzeczywistym dokonywać działań. 
### 2. Use cases
Przede wszystkim usługa posiada duży potencjał szkoleniowy. Można na przykład stworzyć:
- Aplikacje nauki języków ze sprawdzaniem wymowy i mając kontekst zdania również gramatyki.
- Wszelkiego rodzaju maszyny czy sprzęt AGD mógłby mieć opcje przejścia na tryb słuchania gdzie z mowy przekształconej w tekst można byłoby przekazywać polecenia. 

### 3. How to
####   3.1. Użycie serwisu
Dzięki dostępnemu SDK i REST API korzystanie jest bardzo proste i nie wymaga samodzielnej nauki modelu. Dostępne formaty audio to WAV i OGG a w odpowiedzi otrzymujemt rozpoznany tekst oraz dane takie jak poziom szczegółowości i ocena.
####   3.2. Pricing
W wersji bezpłatnej dostępnych jest 5 godzin audio miesięcznie. W wersji standardowej płacimy 0,844 euro za godzinę audio.

#
## Text-to-Speech
### 1. Intro 
####  1.1. Przedstawienie serwisu
Usługa Text-to-Speech daje możliwość zamiany tekstu na mowę. Do wyboru jest wiele głosów dzięki czemu słyszane wiadomości są przekazywane ludzkim głosem.
####   1.2. Opis serwisu
Serwis ten zapewnia syntetyzowanie głosu i dzięki wielu usprawnieniom na przestrzeni lat dżwięki te brzmią mniej sztucznie a zawierają również pewne charakterystyczne cechy ludzkiego głosu jak na przykład akcentowanie. Dostępne są Standard voices oraz Neural voices, w drugiej opcji wykorzystywane są głębokie sieci neuronowe przez co wspomniana intonaczja czy inne cechy zostają zaaplikowane przy odczycie.
### 2. Use cases
W głównej mierze usługi zamiany tekstu na mowę znajdują zastosowanie wszędzie tam gdzie potrzebna jest lepsza dostępność na przykład dla osób niewidomych. Przykładowe zastosowania to:
- Moduł powtarzający przekazane dane lub polecania do programu czy urządzenia tak aby osoby niewidome mogły upewnić się że urządzenie wykonuje to czego się oczekuje.
- Opiekun osoby chorej lub starszej który w bardziej intuicyjny i przyjazny sposób mógłby przypominać o lekach lub co ustalony czas zbierać informacje o samopoczuciu.

### 3. How to
####   3.1. Użycie serwisu
Podobnie jak w przypadku usługi Speech-to-Text tu również mamy dostępne SDK jak i REST API dzięki czemu wysyłanie tekstu jest proste. Oprócz tego mamy do dyspozycji wiele wartości konfiguracyjnych dzięki którym możemy dostosowywać głos który zostanie użyty do odczytania tekstu. W przypadku dużych dokumentów tekstowych możemy wykorzystać Long Audio Api przez co po przetworzeniu pobieramy gotowy plik audio. 
####   3.2. Pricing
W planie bezpłatnym możemy miesięcznie przetworzyć na mowę standardową 5 milionów znaków a na mowę wzbogaconą przez sieci neuronowe 0.5 miliona znaków. W płatnym planie standardowym opłaty za te usługi wycenione są odpowiednio na 3.374 euro za 1 milion znaków oraz 12,493 euro za jeden milion znaków.

#
## Speech Translation
### 1. Intro 
####  1.1. Przedstawienie serwisu
Usługa Speech Translation zapewnia tłumaczenie strumieni audio pomiędzy wieloma językami w czasie rzeczywistym.
####   1.2. Opis serwisu
Rozwiązanie to jest napędzane przez Statistical Machine Translation oraz Neural Machine Translation przez co otrzymujemy równocześnie najbardziej pasującą translacje na podstawie kontekstu przy jednoczesnym dostosowaniu najlepiej brzmiących translacji dzięki sieciom neuronowym.
### 2. Use cases
Możliwość tłumaczenia w czasie rzeczywistym pomiędzy różnymi językami mogłaby posłużyć do stworzenia komunikatora który sam rozpozna język mówcy i przetłumaczy wypowiedź pozostałym słuchaczom w ich własnych językach.

Przydatną funkcją byłaby również możliwość dodawania do filmów, programów, seriali nakładki tłumaczącej automatycznie, wówczas oglądanie zagranicznych telewizji na przykład w hotelu byłoby znacznie prostsze.

### 3. How to
####   3.1. Użycie serwisu
Do dyspozycji dostajemy SDK które w głównej mierze za nas dokonuje połączenia oraz uwierzytelnienia a następnie gotowymi metodami możemy przesyłać nagranie audio i odebrać tłumaczenie w wybranym języku lub językach. W przypadku braku dostępności SDK dla naszej technologii możemy wykorzystać REST API i wysyłać nasze zapytania za pomocą metod HTTP.
####   3.2. Pricing
Dostępna jest wersja darmowa jak w przypadku innych usług z Azure Cognitive Services i w tym przypadku możemy wykorzystać 5 godzin audio miesięcznie. W wersji Standard jest to płatne 2,11 euro za godzinę audio.