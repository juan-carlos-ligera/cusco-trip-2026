(function () {
  'use strict';

  var C = window.CONFIG;
  var KEY_LANG = 'cuscoTrip.lang';
  var KEY_SC = 'cuscoTrip.scenarios';

  // Activity ids (also used in share links)
  var ACTS = ['mp', 'rm', 'lh', 'vs', 'bt', 'sm'];

  var T = {
    es: {
      docTitle: 'Cusco 2026 · Calculadora de viaje',
      kicker: 'Lima → Cusco · 7–13 dic 2026',
      title: 'Calculadora de viaje a Cusco',
      lead: 'Mueve los controles y mira cuánto cuesta el viaje para cada uno y para el grupo.',
      inputsTitle: 'Datos del viaje',
      people: 'Número de personas',
      nights: 'Noches',
      days: '{d} días de viaje',
      flight: 'Vuelo ida y vuelta Lima–Cusco',
      flightNote: 'Solo equipaje de mano: {range} por persona.',
      bags: 'Personas con maleta facturada (10 kg)',
      bagsNote: '+{fee} por maleta, repartido entre todos: +{pp} por persona.',
      stay: 'Airbnb (todo el grupo)',
      stayNote: '{range} por noche para {p} personas · {n} noches: {total} · por persona: {pp}',
      food: 'Comida',
      foodNote: '{range} por persona y día · {d} días: {total} por persona',
      transport: 'Transporte local (taxis, traslados)',
      transportNote: '{range} por persona y día · {d} días: {total} por persona',
      acts: 'Actividades',
      actsHint: 'Marca una actividad e ingresa su precio por persona.',
      actPrice: 'Precio por persona ({cur})',
      results: 'Resultado',
      perPerson: 'Por persona',
      groupTotal: 'Total del grupo',
      breakdown: 'Desglose por persona',
      cat_flight: 'Vuelo', cat_stay: 'Alojamiento', cat_food: 'Comida', cat_transport: 'Transporte', cat_acts: 'Actividades',
      rateNote: 'Montos redondeados a S/ 10. Tipo de cambio fijo: 1 € = S/ {rate}.',
      scName: 'Nombre del escenario',
      scNamePh: 'p. ej. 4 personas + Machu Picchu',
      save: 'Guardar escenario',
      share: 'Compartir',
      saved: 'Escenario guardado.',
      needName: 'Escribe un nombre para el escenario.',
      noStorage: 'Tu navegador no permite guardar: el escenario se pierde al cerrar la página.',
      copied: '¡Enlace copiado!',
      copyManual: 'Copia este enlace:',
      scenarios: 'Escenarios guardados',
      noScenarios: 'Aún no hay escenarios guardados.',
      load: 'Cargar', del: 'Eliminar', loaded: 'Escenario cargado.',
      sc_people: 'Personas', sc_nights: 'Noches', sc_bags: 'Maletas', sc_pp: 'Por persona', sc_total: 'Total',
      noActs: 'Sin actividades',
      disclaimer: 'Precios estimados, sin garantía. Los precios reales pueden variar.',
      photos: 'Fotos',
      act_mp: 'Machu Picchu', act_rm: 'Montaña de Colores (Vinicunca)', act_lh: 'Laguna Humantay',
      act_vs: 'Valle Sagrado', act_bt: 'Boleto Turístico', act_sm: 'Salineras de Maras'
    },
    de: {
      docTitle: 'Cusco 2026 · Reisekostenrechner',
      kicker: 'Lima → Cusco · 7.–13. Dez. 2026',
      title: 'Reisekostenrechner Cusco',
      lead: 'Bewege die Regler und sieh, was die Reise pro Person und für die Gruppe kostet.',
      inputsTitle: 'Reisedaten',
      people: 'Anzahl Personen',
      nights: 'Nächte',
      days: '{d} Reisetage',
      flight: 'Hin- und Rückflug Lima–Cusco',
      flightNote: 'Nur Handgepäck: {range} pro Person.',
      bags: 'Personen mit Aufgabegepäck (10 kg)',
      bagsNote: '+{fee} pro Koffer, auf alle verteilt: +{pp} pro Person.',
      stay: 'Airbnb (ganze Gruppe)',
      stayNote: '{range} pro Nacht für {p} Personen · {n} Nächte: {total} · pro Person: {pp}',
      food: 'Essen',
      foodNote: '{range} pro Person und Tag · {d} Tage: {total} pro Person',
      transport: 'Transport vor Ort (Taxis, Transfers)',
      transportNote: '{range} pro Person und Tag · {d} Tage: {total} pro Person',
      acts: 'Aktivitäten',
      actsHint: 'Hake eine Aktivität an und trage den Preis pro Person ein.',
      actPrice: 'Preis pro Person ({cur})',
      results: 'Ergebnis',
      perPerson: 'Pro Person',
      groupTotal: 'Gesamt für die Gruppe',
      breakdown: 'Aufschlüsselung pro Person',
      cat_flight: 'Flug', cat_stay: 'Unterkunft', cat_food: 'Essen', cat_transport: 'Transport', cat_acts: 'Aktivitäten',
      rateNote: 'Beträge auf 5 € gerundet. Fester Wechselkurs: 1 € = S/ {rate}.',
      scName: 'Name des Szenarios',
      scNamePh: 'z. B. 4 Personen + Machu Picchu',
      save: 'Szenario speichern',
      share: 'Teilen',
      saved: 'Szenario gespeichert.',
      needName: 'Gib dem Szenario einen Namen.',
      noStorage: 'Dein Browser erlaubt kein Speichern: Das Szenario geht beim Schließen verloren.',
      copied: 'Link kopiert!',
      copyManual: 'Kopiere diesen Link:',
      scenarios: 'Gespeicherte Szenarien',
      noScenarios: 'Noch keine Szenarien gespeichert.',
      load: 'Laden', del: 'Löschen', loaded: 'Szenario geladen.',
      sc_people: 'Personen', sc_nights: 'Nächte', sc_bags: 'Koffer', sc_pp: 'Pro Person', sc_total: 'Gesamt',
      noActs: 'Keine Aktivitäten',
      disclaimer: 'Geschätzte Preise ohne Gewähr. Die echten Preise können abweichen.',
      photos: 'Fotos',
      act_mp: 'Machu Picchu', act_rm: 'Regenbogenberg (Vinicunca)', act_lh: 'Laguna Humantay',
      act_vs: 'Heiliges Tal (Valle Sagrado)', act_bt: 'Boleto Turístico', act_sm: 'Salzterrassen von Maras'
    }
  };

  // ---------- Storage (never required for the page to work) ----------
  var storage = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  };

  // ---------- State ----------
  var lang = 'es';
  var state = defaultState();
  var scenarios = [];

  function defaultState() {
    var acts = {};
    ACTS.forEach(function (id) { acts[id] = { on: false, pen: 0 }; });
    return { people: C.PEOPLE.start, nights: C.NIGHTS.start, bags: 0, acts: acts };
  }

  function clamp(v, min, max) {
    v = Math.round(Number(v));
    if (!isFinite(v)) v = min;
    return Math.min(max, Math.max(min, v));
  }

  function normalize(s) {
    var out = defaultState();
    out.people = clamp(s.people, C.PEOPLE.min, C.PEOPLE.max);
    out.nights = clamp(s.nights, C.NIGHTS.min, C.NIGHTS.max);
    out.bags = clamp(s.bags, 0, out.people);
    ACTS.forEach(function (id) {
      var a = s.acts && s.acts[id];
      if (a) {
        var pen = Number(a.pen);
        out.acts[id] = { on: !!a.on, pen: isFinite(pen) && pen > 0 ? pen : 0 };
      }
    });
    return out;
  }

  // ---------- Calculation (everything in PEN) ----------
  function airbnbFor(p) {
    if (C.AIRBNB_PER_NIGHT[p]) return C.AIRBNB_PER_NIGHT[p];
    var keys = Object.keys(C.AIRBNB_PER_NIGHT).map(Number).sort(function (a, b) { return a - b; });
    var best = keys[0];
    keys.forEach(function (k) { if (Math.abs(k - p) < Math.abs(best - p)) best = k; });
    return C.AIRBNB_PER_NIGHT[best];
  }

  function compute(s) {
    var P = s.people, N = s.nights, D = N + 1;
    var bagPP = s.bags * C.CHECKED_BAG / P;
    var air = airbnbFor(P);
    var acts = 0;
    ACTS.forEach(function (id) { if (s.acts[id].on) acts += s.acts[id].pen; });

    var cats = {
      flight: [C.FLIGHT_PER_PERSON.min + bagPP, C.FLIGHT_PER_PERSON.max + bagPP],
      stay: [air.min * N / P, air.max * N / P],
      food: [C.FOOD_PER_DAY.min * D, C.FOOD_PER_DAY.max * D],
      transport: [C.TRANSPORT_PER_DAY.min * D, C.TRANSPORT_PER_DAY.max * D],
      acts: [acts, acts]
    };
    var pp = [0, 0];
    Object.keys(cats).forEach(function (k) { pp[0] += cats[k][0]; pp[1] += cats[k][1]; });
    return { cats: cats, pp: pp, total: [pp[0] * P, pp[1] * P], bagPP: bagPP, air: air, days: D };
  }

  // ---------- Formatting ----------
  function t(key, vars) {
    var str = (T[lang] && T[lang][key]) || T.es[key] || key;
    if (vars) Object.keys(vars).forEach(function (k) { str = str.split('{' + k + '}').join(vars[k]); });
    return str;
  }
  function isEur() { return lang === 'de'; }
  function cur() { return isEur() ? '€' : 'S/'; }
  function toCur(pen) { return isEur() ? pen / C.EUR_PEN : pen; }
  function fromCur(v) { return isEur() ? v * C.EUR_PEN : v; }

  function fmtNum(n, decimals) {
    var thou = isEur() ? '.' : ',';
    var dec = isEur() ? ',' : '.';
    var fixed = Math.abs(n).toFixed(decimals);
    var parts = fixed.split('.');
    var int = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thou);
    return (n < 0 ? '-' : '') + int + (parts[1] ? dec + parts[1] : '');
  }
  // Rounded result amount (10 PEN / 5 EUR)
  function rounded(pen) {
    var step = isEur() ? C.ROUND_EUR : C.ROUND_PEN;
    return Math.round(toCur(pen) / step) * step;
  }
  function money(pen) { return cur() + ' ' + fmtNum(rounded(pen), 0); }
  function range(r) {
    var a = rounded(r[0]), b = rounded(r[1]);
    return a === b ? cur() + ' ' + fmtNum(a, 0) : cur() + ' ' + fmtNum(a, 0) + ' – ' + fmtNum(b, 0);
  }
  // Exact amount (for the price info lines), up to 2 decimals
  function exact(pen) {
    var v = Math.round(toCur(pen) * 100) / 100;
    return cur() + ' ' + fmtNum(v, v % 1 === 0 ? 0 : 2);
  }
  function exactRange(a, b) {
    var x = exact(a), y = exact(b);
    return x === y ? x : x + ' – ' + y.replace(cur() + ' ', '');
  }

  // ---------- DOM ----------
  var $ = function (id) { return document.getElementById(id); };
  var el = {
    people: $('people'), nights: $('nights'), bags: $('bags'),
    peopleOut: $('peopleOut'), nightsOut: $('nightsOut'), bagsOut: $('bagsOut'),
    daysNote: $('daysNote'), flightNote: $('flightNote'), bagsNote: $('bagsNote'),
    stayNote: $('stayNote'), foodNote: $('foodNote'), transportNote: $('transportNote'),
    actList: $('actList'), ppRange: $('ppRange'), totalRange: $('totalRange'),
    breakdown: $('breakdown'), rateNote: $('rateNote'), stickyRange: $('stickyRange'),
    stickyBar: $('stickyBar'), scName: $('scName'), saveBtn: $('saveBtn'), shareBtn: $('shareBtn'),
    status: $('status'), shareUrl: $('shareUrl'), scList: $('scList'), scEmpty: $('scEmpty')
  };

  el.people.min = C.PEOPLE.min; el.people.max = C.PEOPLE.max;
  el.nights.min = C.NIGHTS.min; el.nights.max = C.NIGHTS.max;

  // Build activity rows once
  var actEls = {};
  ACTS.forEach(function (id) {
    var row = document.createElement('div');
    row.className = 'act';
    row.innerHTML =
      '<label class="act-check"><input type="checkbox" id="chk-' + id + '"><span></span></label>' +
      '<div class="act-price" hidden><label for="amt-' + id + '"></label>' +
      '<input type="number" id="amt-' + id + '" min="0" step="any" inputmode="decimal"></div>';
    el.actList.appendChild(row);
    var a = {
      row: row,
      chk: row.querySelector('input[type="checkbox"]'),
      name: row.querySelector('.act-check span'),
      box: row.querySelector('.act-price'),
      label: row.querySelector('.act-price label'),
      amt: row.querySelector('input[type="number"]')
    };
    a.chk.addEventListener('change', function () {
      state.acts[id].on = a.chk.checked;
      syncActRow(id);
      if (a.chk.checked) a.amt.focus();
      update();
    });
    a.amt.addEventListener('input', function () {
      var v = parseFloat(String(a.amt.value).replace(',', '.'));
      state.acts[id].pen = isFinite(v) && v > 0 ? fromCur(v) : 0;
      update();
    });
    actEls[id] = a;
  });

  function syncActRow(id) {
    var a = actEls[id];
    a.chk.checked = state.acts[id].on;
    a.box.hidden = !state.acts[id].on;
    a.row.classList.toggle('on', state.acts[id].on);
  }

  // Write state + language into all inputs and static texts
  function renderAll() {
    document.documentElement.lang = lang;
    document.title = t('docTitle');
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (n) {
      n.textContent = t(n.getAttribute('data-i18n'));
    });
    Array.prototype.forEach.call(document.querySelectorAll('.lang button'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    el.scName.placeholder = t('scNamePh');

    el.people.value = state.people;
    el.nights.value = state.nights;
    el.bags.max = state.people;
    el.bags.value = state.bags;

    ACTS.forEach(function (id) {
      var a = actEls[id];
      a.name.textContent = t('act_' + id);
      a.label.textContent = t('actPrice', { cur: cur() });
      var pen = state.acts[id].pen;
      a.amt.value = pen > 0 ? String(Math.round(toCur(pen) * 100) / 100) : '';
      syncActRow(id);
    });
    update();
    renderScenarios();
  }

  // Recalculate and show results (called on every change)
  function update() {
    var r = compute(state);
    var P = state.people, N = state.nights;

    el.peopleOut.textContent = P;
    el.nightsOut.textContent = N;
    el.bagsOut.textContent = state.bags;
    el.daysNote.textContent = t('days', { d: r.days });

    el.flightNote.textContent = t('flightNote', { range: exactRange(C.FLIGHT_PER_PERSON.min, C.FLIGHT_PER_PERSON.max) });
    el.bagsNote.textContent = t('bagsNote', { fee: exact(C.CHECKED_BAG), pp: exact(r.bagPP) });
    el.stayNote.textContent = t('stayNote', {
      range: exactRange(r.air.min, r.air.max), p: P, n: N,
      total: exactRange(r.air.min * N, r.air.max * N),
      pp: exactRange(r.cats.stay[0], r.cats.stay[1])
    });
    el.foodNote.textContent = t('foodNote', {
      range: exactRange(C.FOOD_PER_DAY.min, C.FOOD_PER_DAY.max), d: r.days,
      total: exactRange(r.cats.food[0], r.cats.food[1])
    });
    el.transportNote.textContent = t('transportNote', {
      range: exactRange(C.TRANSPORT_PER_DAY.min, C.TRANSPORT_PER_DAY.max), d: r.days,
      total: exactRange(r.cats.transport[0], r.cats.transport[1])
    });

    el.ppRange.textContent = range(r.pp);
    el.totalRange.textContent = range(r.total);
    el.stickyRange.textContent = range(r.pp);
    el.rateNote.textContent = t('rateNote', { rate: fmtNum(C.EUR_PEN, C.EUR_PEN % 1 === 0 ? 0 : 2) });

    var maxVal = 0;
    Object.keys(r.cats).forEach(function (k) { maxVal = Math.max(maxVal, r.cats[k][1]); });
    el.breakdown.innerHTML = '';
    Object.keys(r.cats).forEach(function (k) {
      var c = r.cats[k];
      var li = document.createElement('li');
      var minW = maxVal ? (c[0] / maxVal * 100) : 0;
      var maxW = maxVal ? (c[1] / maxVal * 100) : 0;
      li.innerHTML = '<div class="bd-row"><span></span><span></span></div>' +
        '<div class="bar"><i class="bar-max" style="width:' + maxW.toFixed(1) + '%"></i>' +
        '<i class="bar-min" style="width:' + minW.toFixed(1) + '%"></i></div>';
      var spans = li.querySelectorAll('span');
      spans[0].textContent = t('cat_' + k);
      spans[1].textContent = range(c);
      el.breakdown.appendChild(li);
    });
  }

  // ---------- Inputs ----------
  el.people.addEventListener('input', function () {
    state.people = clamp(el.people.value, C.PEOPLE.min, C.PEOPLE.max);
    el.bags.max = state.people;
    if (state.bags > state.people) { state.bags = state.people; }
    el.bags.value = state.bags;
    update();
  });
  el.nights.addEventListener('input', function () {
    state.nights = clamp(el.nights.value, C.NIGHTS.min, C.NIGHTS.max);
    update();
  });
  el.bags.addEventListener('input', function () {
    state.bags = clamp(el.bags.value, 0, state.people);
    update();
  });

  Array.prototype.forEach.call(document.querySelectorAll('.lang button'), function (b) {
    b.addEventListener('click', function () {
      lang = b.getAttribute('data-lang');
      storage.set(KEY_LANG, lang);
      el.status.textContent = '';
      renderAll();
    });
  });

  // ---------- Scenarios ----------
  function loadScenarios() {
    try {
      var list = JSON.parse(storage.get(KEY_SC) || '[]');
      if (!Array.isArray(list)) return [];
      return list.filter(function (x) { return x && typeof x.name === 'string' && x.s; })
        .map(function (x) { return { id: String(x.id), name: x.name, s: normalize(x.s) }; });
    } catch (e) { return []; }
  }
  function saveScenarios() { return storage.set(KEY_SC, JSON.stringify(scenarios)); }

  function renderScenarios() {
    el.scList.innerHTML = '';
    el.scEmpty.hidden = scenarios.length > 0;
    scenarios.forEach(function (sc) {
      var r = compute(sc.s);
      var card = document.createElement('article');
      card.className = 'sc-card';
      card.innerHTML = '<h3></h3><dl></dl><p class="sc-acts"></p>' +
        '<div class="sc-btns"><button type="button" class="btn small primary"></button>' +
        '<button type="button" class="btn small"></button></div>';
      card.querySelector('h3').textContent = sc.name;
      var dl = card.querySelector('dl');
      [['sc_pp', range(r.pp)], ['sc_total', range(r.total)], ['sc_people', sc.s.people],
       ['sc_nights', sc.s.nights], ['sc_bags', sc.s.bags]].forEach(function (row) {
        var dt = document.createElement('dt'); dt.textContent = t(row[0]);
        var dd = document.createElement('dd'); dd.textContent = row[1];
        dl.appendChild(dt); dl.appendChild(dd);
      });
      var names = ACTS.filter(function (id) { return sc.s.acts[id].on; }).map(function (id) {
        return t('act_' + id) + ' (' + money(sc.s.acts[id].pen) + ')';
      });
      card.querySelector('.sc-acts').textContent = names.length ? names.join(', ') : t('noActs');
      var btns = card.querySelectorAll('button');
      btns[0].textContent = t('load');
      btns[1].textContent = t('del');
      btns[0].addEventListener('click', function () {
        state = normalize(JSON.parse(JSON.stringify(sc.s)));
        renderAll();
        el.status.textContent = t('loaded');
        document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      btns[1].addEventListener('click', function () {
        scenarios = scenarios.filter(function (x) { return x.id !== sc.id; });
        saveScenarios();
        renderScenarios();
      });
      el.scList.appendChild(card);
    });
  }

  el.saveBtn.addEventListener('click', function () {
    var name = el.scName.value.trim();
    if (!name) { el.status.textContent = t('needName'); el.scName.focus(); return; }
    scenarios.push({ id: String(Date.now()), name: name, s: JSON.parse(JSON.stringify(state)) });
    var ok = saveScenarios();
    el.scName.value = '';
    el.status.textContent = ok ? t('saved') : t('noStorage');
    renderScenarios();
  });

  // ---------- Share link ----------
  function shareLink() {
    var q = new URLSearchParams();
    q.set('p', state.people);
    q.set('n', state.nights);
    q.set('b', state.bags);
    var acts = ACTS.filter(function (id) { return state.acts[id].on; }).map(function (id) {
      return id + '-' + (Math.round(state.acts[id].pen * 100) / 100);
    });
    if (acts.length) q.set('a', acts.join('_'));
    q.set('l', lang);
    return location.origin + location.pathname + '?' + q.toString();
  }

  function readLink() {
    var q = new URLSearchParams(location.search);
    if (!q.has('p') && !q.has('n') && !q.has('l')) return false;
    var s = defaultState();
    if (q.has('p')) s.people = q.get('p');
    if (q.has('n')) s.nights = q.get('n');
    if (q.has('b')) s.bags = q.get('b');
    (q.get('a') || '').split('_').forEach(function (part) {
      var m = /^([a-z]{2})-(\d+(?:\.\d+)?)$/.exec(part);
      if (m && s.acts[m[1]]) s.acts[m[1]] = { on: true, pen: parseFloat(m[2]) };
    });
    state = normalize(s);
    if (T[q.get('l')]) lang = q.get('l');
    return true;
  }

  el.shareBtn.addEventListener('click', function () {
    var url = shareLink();
    function manual() {
      el.shareUrl.hidden = false;
      el.shareUrl.value = url;
      el.shareUrl.focus();
      el.shareUrl.select();
      el.status.textContent = t('copyManual');
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(url).then(function () {
        el.shareUrl.hidden = false;
        el.shareUrl.value = url;
        el.status.textContent = t('copied');
      }, manual);
    } else {
      manual();
    }
  });

  // ---------- Sticky bar: hide while the results box is on screen ----------
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      el.stickyBar.classList.toggle('hide', entries[0].isIntersecting);
    }, { threshold: 0.15 }).observe(document.getElementById('results'));
  }

  // ---------- Start ----------
  var storedLang = storage.get(KEY_LANG);
  if (T[storedLang]) lang = storedLang;
  readLink();
  scenarios = loadScenarios();
  renderAll();
})();
