# Cusco 2026 – Reisekostenrechner

Kleine Website für unsere Gruppenreise **Lima → Cusco (7.–13. Dezember 2026)**.
Mit Reglern und Häkchen sieht jede:r sofort, was die Reise pro Person und für die ganze Gruppe ungefähr kostet:
Flug (inkl. Aufgabegepäck), Airbnb, Essen, Transport vor Ort und Aktivitäten.

- Sprache: Spanisch (Preise in Soles, S/) oder Deutsch (Preise in Euro, €) – Umschalter oben rechts
- Ergebnisse immer als Spanne (von – bis), gerundet auf 10 S/ bzw. 5 €
- Szenarien speichern und vergleichen, Auswahl per Link teilen

**Link:** https://USERNAME.github.io/cusco-trip-2026/

## Preise ändern

Alle Preise stehen in der Datei **`config.js`** (in Soles). Jede Zeile ist kommentiert.

1. Auf GitHub das Repository öffnen und auf `config.js` klicken.
2. Oben rechts auf das Stift-Symbol (✏️ „Edit this file“) klicken.
3. Nur die Zahlen ändern – Kommas, Klammern und Anführungszeichen stehen lassen.
   Dezimalzahlen mit Punkt schreiben, z. B. `EUR_PEN: 4.15`.
4. Unten auf **„Commit changes“** klicken.
5. Nach 1–2 Minuten ist die Seite automatisch aktualisiert (ggf. Seite neu laden).

Oder lokal mit Git:

```bash
git add config.js
git commit -m "Preise aktualisiert"
git push
```

## Dateien

- `index.html` – Seitenaufbau
- `style.css` – Design
- `app.js` – Berechnung, Sprache, Szenarien, Teilen-Link
- `config.js` – **Preise und Wechselkurs**
- `img/` – Fotos (Wikimedia Commons, Lizenzen im Footer der Seite)
