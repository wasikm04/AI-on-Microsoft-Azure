# Vision Report

Demo: https://youtu.be/Lx_47ILHqlw

Kod: https://github.com/wasikm04/AI-on-Microsoft-Azure/tree/master/vision/ReadService/read-service
#

## 1. Scenariusz
Głównym scenariuszem przygotowanej aplikacji jest udostępnienie możliwości optycznego rozpoznawania znaków ze zdjęć dla wszystkich zainteresowanych lecz główną grupą docelową są nauczyciele mający na co dzień do czynienia z dużą ilością ręcznie pisanych dokumentów jak sprawdziany czy wypracowania. Zwłaszcza przy obecnej nauce zdalnej i przesyłanych zdjęciach prac można spróbować częściowo zautomatyzować proces sprawdzania i wspomagać się odczytywaniem nawet słabo oświetlonych i niewyraźnych napisów.

## 2. Architektura serwisu oraz wymagane kroki do zreprodukowania usługi
Serwis zbudowany jest z dwóch cześci. Pierwszą jest Computer Vision Api które udostępnia wykorzystywane funkcje OCR oraz asynchronicznego odczytu dla większych plików. Drugą częścią jest interfejs użytkownika napisany w React.js jako Single Page Application który komunikuje się z API i pozwala na porównanie wyników rozpoznawnia znaków z obu usług.

Do zreprodukowania usługi należy wykonać następujące kroki:

- Stworzenie zasobu Computer Vision z Cognitive Services za pomocą przygotowanych template i zapisanie jednego z kluczy służących do autoryzacji zapytań. 
- Pobranie z Computer Vision API 3.0 scieżek zapytań odpowiednich dla wybranych usług i regionu utworzonego zasobu oraz wymagane nagłówki i paramtery.
- Utworzenie nowego interfejsu użytkownika lub pobranie istnejącego kodu
- Przygotowanie pliku config.js i utworzenie w nim stałych:
    - AUTH_KEY, zawierający klucz pobrany z zasobu Computer Vision
    - OCR_ENDPOINT, zawierający punkt końcowy do usługi OCR
    - ANALYZE_ENDPOINT, zawierający punkt końcowy do usługi wykonującej operację odczytu
    - READ_ENDPOINT, zawierający punkt końcowy do usługi pobierającej wynik odczytu. Parametr ID ustawiany jest z nagłówka "apim-request-id" odpowiedzi na zapytanie z odczytem.
- Ewentualna instalacja npm w celu instalacji zależności z package.json wymaganych do działania interfejsu użytkownika.
- Uruchomienie na przykład za pomocą npm start i weryfikacja działania komunikacji z API.

 