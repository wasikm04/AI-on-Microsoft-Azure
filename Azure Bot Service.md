# Azure Bot Service

## QnA Maker
### 1. Intro 
####  1.1. Przedstawienie serwisu
QnA Maker to jedna z usług wchodzących w skład Azure Cognitive Services Language i pozwala na zbudowanie warstwy dostępu do danych w formie czatu która jest bardziej przyjemna i intuicyjna niż długie listy pytań i odpowiedzi.
####   1.2. Opis serwisu
Usługa opiera się na tworzonej przez użytkownika bazy wiedzy która używana jest następnie do zwrócenia odpowiedzi najlepiej pasującej do zadanego przez użytkownika pytania. Im bardziej rozbudowaną bazę pytań i odpowiedzi utworzy użytkownik tym lepiej serwis dopasuje przychodzące odpowiedzi.
### 2. Use cases
Jak sama nazwa wskazuje usługa może być wykorzystywana wszędzie tam gdzie należy dać użytkownikowi dostęp do szczegółowych informacji. Przykłady:
- Rządowe strony gdzie ciężko znaleźć jednoznaczne informacje o przebiegu jakichś procesów czy składaniu wniosków. Możliwość dopytania o szczegóły mogłaby odciążyć infolinie.
- Bot ogólnego przeznaczenia służący do wskazywania prognozy pogody czy mapy z jakimś obiektem.

### 3. How to
####   3.1. Użycie serwisu
Najważniejszym etapem jest stworzenie wspomnianej bazy wiedzy gdzie możemy ręcznie dodać pytania i odpowiedzi lub importować z pliku. Taką bazę możemy testować lub użyć przycisku publikacji i utworzyć Bota wykorzystującego bazę lub wysyłać zapytania bezpośrednio. Stworzonego bota możemy wyposarzyć w dodatkowe funkcje jak np usługa LUIS i takiego bota podpiąć do jednego z kilku dostępnych kanałów jak Skype.
####   3.2. Pricing
W wersji bezpłatnej mamy do dyspozycji 3 żądania na sekundę przy 50000 zapytań miesięcznie i 3 dokumenty z pytaniami lub adresy do nich. W planie standardowym za 10$ mamy dostęp do zarządania nieograniczoną liczbą danych przy podobnej liczbie maksymalnych transakcji na minute.