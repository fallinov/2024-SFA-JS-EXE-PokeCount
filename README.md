Voici la fiche d'exercice mise à jour avec les explications intégrées de manière concise directement dans les consignes.

---

### **Fiche d'exercice : Développement progressif d'un compteur de Pokémon capturés**

#### **Objectif général :**
Créer une application web interactive en ajoutant progressivement des fonctionnalités avec JavaScript, en commençant par un simple affichage de "Hello World" jusqu'à la création d'un compteur de Pokémon capturés, avec une amélioration finale en utilisant des écouteurs d'événements.

---

### **Étape 1 : Liaison du JavaScript au HTML**

1. **Comprendre les fichiers de départ :**
    - **`index.html`** : Contient la structure de base de la page, mais sans aucune logique JavaScript.
    - **`style.css`** : Stylise la page avec un fond thématique Pokémon et des couleurs de boutons.

2. **Créer un fichier JavaScript et lier au HTML :**
    - **Action :** Créez un nouveau fichier nommé `script.js` dans le même dossier que `index.html`.
    - **Action :** Liez ce fichier JavaScript au fichier HTML en ajoutant la ligne suivante dans `index.html`, juste avant la fermeture de la balise `</body>` :
      ```html
      <script src="script.js"></script>
      ```

3. **Afficher un message "Hello World" :**
    - **Action :** Dans `script.js`, ajoutez le code suivant pour afficher "Hello World" dans la console du navigateur :
      ```javascript
      console.log("Hello World");
      ```
    - **Test :** Ouvrez `index.html` dans un navigateur web. Ouvrez la console du navigateur (F12 ou clic droit > Inspecter > Console) pour vérifier que le message "Hello World" s'affiche correctement.

4. **Validation de l'étape :**
    - Vous devez voir "Hello World" dans la console du navigateur, ce qui confirme que le JavaScript est correctement lié à votre fichier HTML.

---

### **Étape 2 : Manipulation du DOM pour modifier un élément**

1. **Récupérer l'élément `<h2>` et modifier son contenu :**
    - **Action :** Dans `script.js`, ajoutez du code pour récupérer l'élément `<h2>` avec l'identifiant `compteur-el` et modifiez son contenu pour qu'il affiche `10` :
      ```javascript
      document.getElementById("compteur-el").textContent = 10;
      ```
    - **Test :** Actualisez la page dans le navigateur. L'élément `<h2>` doit maintenant afficher `10`.

2. **Validation de l'étape :**
    - Le contenu de l'élément `<h2>` a été mis à jour pour afficher `10`.

---

### **Étape 3 : Création et affichage de variables**

1. **Créer une variable pour représenter l'élément `<h2>` et une pour le compteur :**
    - **Action :** Dans `script.js`, créez deux variables :
        - Une variable `compteur` pour stocker la valeur du compteur (initialement `0`).
        - Une variable `compteurEl` pour stocker la référence à l'élément `<h2>`. Utilisez `const` pour cette référence puisque l'élément ne changera pas.
      ```javascript
      let compteur = 0;
      const compteurEl = document.getElementById("compteur-el");
      ```

2. **Afficher les variables dans la console :**
    - **Action :** Ajoutez des `console.log` pour afficher les deux variables dans la console du navigateur :
      ```javascript
      console.log("Valeur du compteur :", compteur);
      console.log("Élément H2 récupéré :", compteurEl);
      ```
    - **Test :** Actualisez la page dans le navigateur et ouvrez la console. Vous devez voir la valeur du compteur (`0`) et la référence à l'élément `<h2>` affichées.

3. **Pourquoi stocker les références dans des variables ?**
    - Cela améliore les **performances** en évitant de chercher l'élément dans le DOM à chaque fois. C'est aussi plus **lisible** et **facile à maintenir** puisque vous réutilisez la même variable.

4. **Validation de l'étape :**
    - Les deux variables (`compteur` et `compteurEl`) doivent être correctement affichées dans la console du navigateur.

---

### **Étape 4 : Préparation pour la capture de Pokémon**

1. **Créer une fonction pour capturer un Pokémon :**
    - **Action :** Créez une fonction `capturer()` qui incrémente le compteur et met à jour le texte de `<h2>` avec l'identifiant `compteur-el`.
      ```javascript
      function capturer() {
          compteur += 1;
          compteurEl.textContent = compteur;
      }
      ```

2. **Lier la fonction au bouton "CAPTURER" :**
    - **Action :** Assurez-vous que le bouton "CAPTURER" dans `index.html` appelle la fonction `capturer()` :
      ```html
      <button id="capturer-btn" onclick="capturer()">CAPTURER</button>
      ```

3. **Test :** Actualisez la page dans le navigateur. Cliquez sur le bouton "CAPTURER" et vérifiez que le compteur augmente à chaque clic.

4. **Validation de l'étape :**
    - Le compteur de Pokémon doit s'incrémenter correctement lorsque le bouton "CAPTURER" est cliqué.

---

### **Étape 5 : Sauvegarde des captures**

1. **Créer une fonction pour sauvegarder les captures :**
    - **Action :** Créez une fonction `sauvegarder()` qui ajoute la valeur actuelle du compteur au paragraphe `sauvegarde-el` et réinitialise le compteur.
      ```javascript
      function sauvegarder() {
          let compteurStr = compteur + " Pokémons - ";
          document.getElementById("sauvegarde-el").textContent += compteurStr;
          compteur = 0;
          compteurEl.textContent = compteur;
      }
      ```

2. **Lier la fonction au bouton "SAUVEGARDER" :**
    - **Action :** Assurez-vous que le bouton "SAUVEGARDER" dans `index.html` appelle la fonction `sauvegarder()` :
      ```html
      <button id="sauvegarder-btn" onclick="sauvegarder()">SAUVEGARDER</button>
      ```

3. **Test :** Actualisez la page dans le navigateur. Capturez quelques Pokémon, puis cliquez sur "SAUVEGARDER". Vérifiez que les captures sont ajoutées à la liste et que le compteur se réinitialise.

4. **Validation de l'étape :**
    - Le compteur se réinitialise après la sauvegarde, et les captures sont affichées correctement.

---

### **Étape 6 : Amélioration du code avec des écouteurs d'événements**

1. **Retirer les attributs `onclick` du HTML :**
    - **Action :** Ouvrez `index.html` et retirez les attributs `onclick` des boutons "CAPTURER" et "SAUVEGARDER". Les boutons devraient ressembler à ceci :
      ```html
      <button id="capturer-btn">CAPTURER</button>
      <button id="sauvegarder-btn">SAUVEGARDER</button>
      ```

2. **Ajouter des écouteurs d'événements dans JavaScript :**
    - **Action :** Dans `script.js`, récupérez les références aux boutons et ajoutez des écouteurs d'événements pour lier les fonctions `capturer()` et `sauvegarder()` :
      ```javascript
      const capturerBtn = document.getElementById("capturer-btn");
      const sauvegarderBtn = document.getElementById("sauvegarder-btn");
 
      capturerBtn.addEventListener("click", capturer);
      sauvegarderBtn.addEventListener("click", sauvegarder);
      ```

3. **Pourquoi cette étape est-elle importante ?**
    - L'utilisation d'écouteurs d'événements améliore la **séparation des préoccupations** entre le HTML et le JavaScript. Cela rend le code plus **modulaire**, plus **facile à maintenir**, et **extensible** pour des projets plus complexes.

4. **Test :** Actualisez la page dans le navigateur. Vérifiez que le bouton "CAPTURER" incrémente toujours le compteur et que le bouton "SAUVEGARDER" sauvegarde les captures correctement.

5. **Validation de l'étape :**
    - Les boutons fonctionnent correctement avec les écouteurs d'événements, et le code JavaScript est désormais séparé de la structure HTML, ce qui améliore la maintenabilité du code.

---

### **Conclusion et validation finale :**

- **Objectif atteint :** Vous avez progressivement ajouté des fonctionnalités JavaScript pour manipuler le DOM, afficher des messages dans la console, gérer les captures de Pokémon, et finalement amélioré le code en utilisant des écouteurs d'événements.
- **Fichiers finaux attendus :**
    - `index.html` : Structure HTML de l'application, sans attributs `onclick`.
    - `style.css` : Styles appliqués à la page.
    - `script.js` : Logique JavaScript pour capturer et sauvegarder les Pokémon
