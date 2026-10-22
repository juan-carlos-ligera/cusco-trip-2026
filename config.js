/* =====================================================================
   PREISE & EINSTELLUNGEN  –  hier kannst du alles ändern.
   Alle Preise sind in PERUANISCHEN SOLES (PEN / S/).
   Nur Zahlen ändern, Kommas und Klammern stehen lassen.
   Dezimalzahlen mit Punkt schreiben (z. B. 4.15, nicht 4,15).
   ===================================================================== */

window.CONFIG = {

  // Wechselkurs: 1 Euro = so viele Soles
  EUR_PEN: 4.0,

  // Hin- und Rückflug Lima–Cusco, nur Handgepäck, pro Person
  FLIGHT_PER_PERSON: { min: 400, max: 480 },

  // Aufpreis für ein aufgegebenes Gepäckstück (10 kg), pro Person die eins mitnimmt
  CHECKED_BAG: 60,

  // Airbnb: Preis pro NACHT für die GANZE Gruppe, je nach Personenzahl
  // (aus Angeboten für 2 Nächte geteilt durch 2)
  AIRBNB_PER_NIGHT: {
    3: { min: 120, max: 200 },   // 3 Personen
    4: { min: 140, max: 250 }    // 4 Personen
  },

  // Essen: pro Person und Tag
  FOOD_PER_DAY: { min: 100, max: 280 },

  // Lokaler Transport (Taxis, Transfers): pro Person und Tag
  TRANSPORT_PER_DAY: { min: 20, max: 50 },

  // Regler-Grenzen
  PEOPLE: { min: 3, max: 4, start: 4 },
  NIGHTS: { min: 2, max: 3, start: 3 },

  // Rundung der Ergebnisse
  ROUND_PEN: 10,   // auf 10 Soles
  ROUND_EUR: 5     // auf 5 Euro
};
