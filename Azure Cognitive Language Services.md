# Azure Cognitive Language Services
Azure Cognitive Services dostarczają usługi AI pozwalające na tworzenie rozwiązań poznawczych jak analiza mowy, tekstu czy obrazu. Funkcje te dzięki przyjaznemu interfejsowi i gotowym modelom dają dostęp do sztucznej inteligencji niezależnie od posiadanej wiedzy z zakresu uczenia maszynowego. Dostosowane do własnego przypadku usługi można odpytywać za pomocą SDK lub REST API dzięki czemu są dostępne niezależnie od technologii.

#
## Azure Content Moderator 
### 1. Intro 
####  1.1. Przedstawienie serwisu
Content Moderator zapewnia monitoring nad treściami aby móc wychwytywać te potencjalnie obraźliwe, wulgarne lub zawierające dane osobowe.
####   1.2. Opis serwisu
Usługa Content Moderator wchodzi w skład Decision API w Azure Cognitive Services i umożliwia obsługę niepożądanej zawartości w tekście ale również w obrazach i wideo. Po skonfigurowaniu usługi mamy dostęp do grup interfejsów API gdzie za pomocą prostych zapytań HTTP możemy wysłać tekst i w odpowiedzi otrzymać wynik klasyfikacji lub wykrytą obecność informacji takich jak numer telefonu czy adres. Dzięki temu możemy podejmować decyzję co do otrzymanej treści i blokować niechciane wpisy czy zdjęcia.
### 2. Use cases
Potencjalnych miejsc wykorzystania jest bardzo wiele. Usługę tą można wpiąć na przykład w:
  - Forum internetowe gdzie należy moderować wpisy użytkowników i blokować te obraźliwe
  - Wersje dla dzieci różnych aplikacji czy stron internetowych gdzie chcemy aby wulgarne treści nie były wyświetlane

### 3. How to
####   3.1. Użycie serwisu
Korzystanie z serwisu sprowadza się do zapoznania z wystwionym REST API i odpowiedniego wykorzystania endpointów oraz dołączeniu Subscription-Key w nagłówku zapytań. Same parametry zapytań dotyczą między innymi ustawienia klasyfikacji czy autokorekty więc również na tym polu istnieje możliwość dostosowania do potrzeb.
####   3.2. Pricing
Z usługi możemy korzystać bezpłatnie z pewnymi ograniczeniami. Możliwe jest 1 transakcja na sekundę a liczba takich bezpłatnych zapytań w miesiącu wynosi 5000. W momencie gdy jest to niewystarczające można przejść na opcje płatną gdzie tych zapytań można wysyłąć 10 na sekundę a opłata za 1000 transakcji wynosi od 0.338 do 0.844 euro.


#
## Language Understanding (LUIS) 
### 1. Intro 
####  1.1. Przedstawienie serwisu
LUIS to serwis wykorzystujący uczenie maszynowe do wyciągania istotnych informacji i znaczenia z tekstu  wypowiedzi uczestnika rozmowy aby wyznaczyć jego intencje i zwrócić te dane do dalszego procesowania.
####   1.2. Opis serwisu
Azure LUIS pozwala na stworzenie modelu i douczenie go do własnych potrzeb tak aby jak najlepiej interpretował przesłaną wiadomość. Z dostarczonego tekstu LUIS wydzieli intencje i znaczące informacje jak datę, miejsce lub wydarzenie. Zebrane informacje są oznaczane do jakiej grupy intencji zostały przyporządkowane i z jaką pewnością w skali od 0 do 1. 
### 2. Use cases
Usługa ta doskonale wpsaowuje się wszędzie tam gdzie wykorzystywane są boty na przykład:
- Sekcja FAQ dowolnej aplikacji gdzie można odczytać jakich użytkownik poszukuje informacji i dostarczyć mu je lub odesłać do zewnętrznych serwisów.
- Czat w restauracji lub sklepie gdzie usługa ta może pomóc odczytać jakie zamówienie użytkownik chce złożyć.

### 3. How to
####   3.1. Użycie serwisu
Utworzenie modelu dokonujemy w dedykowanym narzędziu gdzie dodajemy grupy intencji i oznaczamy aby udoskonalić proces uczenia. Wywołania testowe które nie są oznaczone prawidłowo możemy ręcznie poprawiać i powtarzać proces uczenia. Z tego samego serwisu możemy następnie opublikować model a następnie zintegrować go na przykład z Azure bot lub wywoływać z dowolnej aplikacji za pomocą REST API.
####   3.2. Pricing
Usługa Language Understanding jest bezpłatna przy ograniczeniach 5 transakcji na sekundę natomiast w wersji standardowej możemy wysyłać 50 zapytań na sekundę a cena za 1000 żądań tekstowych to 1,265 euro.

#
## Azure Text Analytics 
### 1. Intro 
####  1.1. Przedstawienie serwisu
Usługa Text Analytics daje możliwość przetwarzania języka naturalnego i agreguje kilka przydatnych funkcji z tym związanych tak aby wyciągać potrzebne informacje z tekstu.
####   1.2. Opis serwisu
Główne możliwości jakie daje Text Analytics to analiza uczucia jakie można odczytać z całego tekstu, czy jest on neutralny, pozytywny czy negatywny. Oprócz tego dostępna jest ekstrakcja słów kluczowych, rozpoznawanie języka tekstu oraz oznaczanie znaczących miejsc, ilości czy osób. 
### 2. Use cases
Mnogość wystwionych endpointów z różnymi funkcjami pozwala na dodanie kroku z analizą w dowolnym miejscu przez co możemy wykorzystać te usługi kategoryzowaniu tekstów po słowach kluczowych na przykład:
-  Internetowa biblioteka nieustrukturyzowanych danych jak notatki studentów.
-  Określaniu obecnych trendów po wydzielaniu miejsc czy organizacji z publicznych komentarzy.

### 3. How to
####   3.1. Użycie serwisu
Podobnie jak w innych usługach Azure Cognitive Services otrzymujemy dostęp do REST API i nasze zapytania przesyłamy w formacie JSON wewnątrz zapytania HTTP. Zwracane dane w postaci na przykład kolekcji słów kluczowych możemy dalej przetwarzać lub zapisać.
####   3.2. Pricing
 Z usług możemy bezpłatnie korzystać ale maksymalna liczba zapytań w misiącu wynosi 5000. Dostępne są również płatne plany gdzie każde 1000 transakcji w danej puli jest płatne od 1.687 do 0.211 euro lub możemy wybrać abonament z różną pulą zapytań płatnych od 210.707 do 4216.492 euro.



