# Bot Report

Demo: https://youtu.be/Z5rf_1bp_yg
#

## 1. Scenariusz
Stworzony bot ma wypełniać dwa główne scenariusze. W głównej mierze ma on informować o pandemii wirusa i zagrożeniu które z tego wynika dlatego odpowiada na pytania o podstawowe kwestie takie jak sposoby przenoszenia wirusa, rodzaje testów, grupy ryzyka czy objawy choroby wywoływanej przez wirusa. Oprócz tego ma być informatorem dla osób na kwarantannie w związku z tym zawiera odpowiedzi również na pytania związane z przebywaniem w izolacji a także pozwala na przesłanie zdjęcia w celu potwierdzenia obecności na kwarantannie. Dodane zdjęcie z wykrytą twarzą można przesłać na dowolny serwer i osoba uprawniona może oceniać takie zdjęcia albo możemy jeszcze bardziej zautomatyzować ten proces. 

## 2. Wykonane kroki do zbudowania bota
Bot został utworzony z wykorzystaniem Bot Framework Composer w głównym dialogu dodanych zostało wiele wyzwalaczy które uruchamiane są na podstawie odczytanych intencji użytkownika. Usługa odpowiedzialna za ocenę i przyporządkowanie kwestii użytkownika do triggerów to Language Understanding.  Oprócz tego usługa wykorzystywana jest to również do wyznaczania słów kluczowych tam gdzie oczekiwana jest odpowiedź użytkownika na pytanie.

Z głównego dialogu za pomocą wspomnianych wyzwalaczy możemy przechodzić do różnych dialogów tematycznych gdzie zadawane są użytkownikowi dodatkowe pytania i jest on prowadzony tak aby odnalazł oczekiwane informacje lub wykonał jakąś akcje dlatego aby ułatwić interakcje dodane zostały również karty z obrazami, adresami do stron i opisami.

Dodatkowe wyzwalacze pokrywają przypadki gdy intencja nie została przyporządkowana do jakiejś ścieżki lub w ogóle rozpoznana. Do tego dodana została obsługa pewnych słów kluczowych jak 'help' czy 'quit' aby móc w każdym momencie przerwać interakcje, zacząć od nowa lub znaleźć opis możliwości bota.

Do obsługi bazy wiedzy dodana została integracja z QnA Maker gdzie znajdują się podstawowe pytania i odpowiedzi. Aby nie dochodziło do konfliktów kiedy jednocześnie rozpoznana zostanie intencja przez Luis oraz pytanie przez QnA dodany został wyzwalacz dokonujący wyboru na podstawie uzyskanej oceny. 

Ostatnią wykorzystaną usługą jest Content Moderator dla obrazów gdzie za pomocą REST API i klucza autoryzującego wysyłane są zdjęcia do sprawdzenia obecności twarzy a następnie to samo zdjęcie jest wysyłane do Azure Functions gdzie jest pobierane i dalej zapisane w Storage.

## 3. Architektura bota oraz wymagania do zreprodukowania usługi
Architektura bota opiera się o Language Understanding oraz Language Generation. Dzięki temu możemy obsługiwać to co wpisuje użytkownik i produkować odpowiednie odpowiedzi związane z kontekstem pytania. Aby odtworzyć bota i jego funkcjonalności należy pobrać Bot Framework Composer i wybrać odpowiedni szablon aplikacji. Obok głównego dialogu możemy przygotować inne dialogi w których zawarty zostanie cały przepływ i logika. Następnie należy określić wyzwalacze od zdarzeń, intencji lub warunków. Istotne jest również korzystanie z parametrów konwersacji aby zapisywać wybory użytkownika lub odpowiedzi. Same odpowiedzi są w przypadku Composera przechowywane w plikach .lg gdzie określamy parametryzowalne szablony. Jeśli chodzi o definiowanie fraz które mają być rozpoznawane to określamy je w plikach .lu gdzie również możemy wplatać nazwy zmienny aby wstawiać w nie słowa kluczowe. Tak przygotowane szablony zasilają usługę Luis.

Do pełnego działania bota należy utworzyć zasoby Luis, QnA Maker a następnie wpisać w appsettings.json odpowiednie klucze i adresy pochodzące z zasobów. Content Moderator również wymaga utworzenia w Azure Portal a komunikacje z tą usługą jak i Azure Functions możemy wykonać za pomocą zapytań HTTP jako kroki w Composerze. 