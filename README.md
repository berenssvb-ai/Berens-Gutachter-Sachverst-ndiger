# Website Gutachterbüro Berens

## 1. Bilder ergänzen
Legen Sie Ihre Bilder unter `assets/images/` genau mit diesen Dateinamen ab, dann werden die Platzhalter automatisch durch die echten Bilder ersetzt:

| Datei | Verwendung | Empfohlenes Format |
|---|---|---|
| `assets/images/logo.png` | Logo im Header (alle Seiten) | quadratisch, PNG mit transparentem Hintergrund |
| `assets/images/hero-spielplatz.jpg` | Startseite, großes Bild rechts oben | Hochformat, ca. 800×1000 px |
| `assets/images/leistung-spielplatz.jpg` | Leistungsseite, Spielplatzkontrolle | Querformat, ca. 1000×750 px |
| `assets/images/leistung-gutachten.jpg` | Leistungsseite, Gutachten GaLaBau | Querformat, ca. 1000×750 px |
| `assets/images/leistung-baumschaden.jpg` | Leistungsseite, Baumschaden | Querformat, ca. 1000×750 px |
| `assets/images/philipp-berens.jpg` | Über mich, Porträtfoto | Hochformat, ca. 900×1200 px |

Solange eine Datei fehlt, zeigt die Seite automatisch einen Platzhalter mit dem erwarteten Dateinamen an – nichts geht kaputt.

## 2. Texte anpassen
Auf der Seite `ueber-mich.html` gibt es zwei mit `[Platzhalter: ...]` markierte Absätze für Ihren Werdegang und Ihre Qualifikationen. Bitte ersetzen Sie diese durch Ihre eigenen Angaben.

## 3. Kontaktformular aktivieren
Das Formular auf `kontakt.html` ist für den kostenlosen Dienst **Formspree** vorbereitet:
1. Auf https://formspree.io kostenlos registrieren.
2. Ein neues Formular mit Ihrer E-Mail-Adresse anlegen.
3. Die erhaltene Formular-URL in `kontakt.html` anstelle von `https://formspree.io/f/DEIN-FORMULAR-CODE` eintragen.

Alternativ funktioniert die Seite auch ganz ohne diesen Schritt – Besucher können Sie weiterhin direkt per Telefon-Link oder E-Mail-Link erreichen.

## 4. Veröffentlichen mit GitHub Pages
1. Ein neues Repository auf GitHub anlegen (z.&nbsp;B. `gutachterbuero-berens`).
2. Alle Dateien aus diesem Ordner in das Repository hochladen (per GitHub-Weboberfläche "Add file → Upload files" oder per Git).
3. Im Repository unter **Settings → Pages** als Quelle den Branch `main` und den Ordner `/ (root)` auswählen.
4. Nach ein bis zwei Minuten ist die Seite unter `https://IHR-BENUTZERNAME.github.io/gutachterbuero-berens/` erreichbar.
5. Optional: eigene Domain (z.&nbsp;B. `gutachterbuero-berens.de`) unter Settings → Pages → Custom domain hinterlegen und beim Domain-Anbieter die passenden DNS-Einträge setzen.

## 5. Für Google auffindbar machen
- Sobald die Seite online ist, bei der **Google Search Console** (search.google.com/search-console) anmelden, die Domain bestätigen und `sitemap.xml` einreichen.
- Ein kostenloses **Google-Unternehmensprofil** (google.com/business) mit Adresse, Telefonnummer und Öffnungszeiten anlegen – das ist für die lokale Auffindbarkeit oft wichtiger als die Website selbst.
- Alle Meta-Angaben in den HTML-Dateien enthalten bereits `https://www.gutachterbuero-berens.de/` als Platzhalter-Domain. Sobald Sie eine eigene Domain nutzen (oder dauerhaft bei der GitHub-Pages-Adresse bleiben), diesen Wert in allen Dateien durch die tatsächliche Adresse ersetzen (Suchen &amp; Ersetzen).

## 6. Rechtliches
Impressum und Datenschutzerklärung sind als Vorlage auf Basis Ihrer Angaben vorbereitet, ersetzen aber keine individuelle Rechtsberatung – bitte vor Veröffentlichung prüfen lassen (Hinweise dazu stehen direkt auf den jeweiligen Seiten).
