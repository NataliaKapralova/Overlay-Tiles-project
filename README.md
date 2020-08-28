# Tiles / detail overlay

Opdracht:
Maak een app die een lijst van 'tegels' (learnings) weergeeft. Wanneer je op een tegel klikt opent een overlay van rechts waarin je verdere details over de learning.

- Een Learning kan 2 types hebben: 'video' en 'text'. Elk type heeft weer eigen details: een 'video' heeft een videoUrl, maar 'tekst' heeft dit niet. Check voor de exacte structuur in de data.json
- Elke learning heeft een progress van 0 tot 100. Als progress 0 is ben je dus nog niet begonnen in moet er op de tegel komen te staan: 'nog niet begonnen'. Als progress 100 is heb je de learning afgerond en moet er op de tegel komen te staan: 'Afgerond' + een vink-icoontje. Als het niet 0 of 100 is, moet er ergens het percentage op de tegel getoond worden
- Verder wil ik graag op de tegel kunnen zien wat voor type learning het is (video of text), een image, en wie de aanbieder is (supplier)/

Je mag de tegel zelf maken als je wilt. Zie plaatje voor inspirate.

Overlay:
Een overlay is binnen Hubper een soort view wat geanimeerd van recht in het scherm schuift, en wat 'bovenop' de huidige view licht.
Zie filmpje voor inspiratie. 

Data:
Ik heb al 2 endpoints klaargezet, en een voorbeeld hoe je deze endpoints gebruikt in 'App.js' gezet.