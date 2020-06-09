import React, { Component } from 'react';

import './App.css';
import Mask from './Mask';
import Button from './Button';

const BUTTONS = [];
const LETTERS = [..."abcdefghijklmnopqrstuvwxyz".toUpperCase()];
const WORDS = ["bleu", "super", "autre", "bizarre", "difficile", "drole", "etrange", "facile", "grave", "impossible", "jeune", "juste", "libre", "malade", "meme", "pauvre", "possible", "propre", "rouge", "sale", "simple", "tranquille", "triste", "vide", "bonne", "toute", "doux", "faux", "francais", "gros", "heureux", "mauvais", "serieux", "vieux", "vrai", "ancien", "beau", "blanc", "certain", "chaud", "cher", "clair", "content", "dernier", "desole", "different", "droit", "entier", "fort", "froid", "gentil", "grand", "haut", "humain", "important", "joli", "leger", "long", "meilleur", "mort", "noir", "nouveau", "pareil", "petit", "plein", "premier", "pret", "prochain", "quoi", "seul", "tout", "vert", "vivant", "aide", "chef", "enfant", "garde", "gauche", "geste", "gosse", "livre", "merci", "mort", "ombre", "part", "poche", "professeur", "tour", "fois", "madame", "paix", "voix", "affaire", "annee", "arme", "armee", "attention", "balle", "boite", "bouche", "carte", "cause", "chambre", "chance", "chose", "classe", "confiance", "couleur", "cour", "cuisine", "dame", "dent", "droite", "ecole", "eglise", "envie", "epaule", "epoque", "equipe", "erreur", "espece", "face", "facon", "faim", "famille", "faute", "femme", "fenetre", "fete", "fille", "fleur", "force", "forme", "guerre", "gueule", "habitude", "heure", "histoire", "idee", "image", "impression", "jambe", "joie", "journee", "langue", "lettre", "levre", "ligne", "lumiere", "main", "maison", "maman", "maniere", "marche", "merde", "mere", "minute", "musique", "nuit", "odeur", "oreille", "parole", "partie", "peau", "peine", "pensee", "personne", "peur", "photo", "piece", "pierre", "place", "police", "porte", "presence", "prison", "putain", "question", "raison", "reponse", "robe", "route", "salle", "scene", "seconde", "securite", "semaine", "situation", "soeur", "soiree", "sorte", "suite", "table", "terre", "tete", "verite", "ville", "voiture", "avis", "bois", "bras", "choix", "corps", "cours", "gars", "mois", "pays", "prix", "propos", "sens", "temps", "travers", "vieux", "accord", "agent", "amour", "appel", "arbre", "argent", "avenir", "avion", "bateau", "bebe", "besoin", "bonheur", "bonjour", "bord", "boulot", "bout", "bruit", "bureau", "cafe", "camp", "capitaine", "chat", "chemin", "cheri", "cheval", "cheveu", "chien", "ciel", "client", "cœur", "coin", "colonel", "compte", "copain", "cote", "coup", "courant", "debut", "depart", "dieu", "docteur", "doigt", "dollar", "doute", "droit", "effet", "endroit", "ennemi", "escalier", "esprit", "etat", "etre", "exemple", "fait", "film", "flic", "fond", "francais", "frere", "front", "garcon", "general", "genre", "gout", "gouvernement", "grand", "groupe", "haut", "homme", "honneur", "hotel", "instant", "interet", "interieur", "jardin", "jour", "journal", "lieu", "long", "maitre", "mari", "mariage", "matin", "medecin", "metre", "milieu", "million", "moment", "monde", "monsieur", "mouvement", "moyen", "noir", "nouveau", "numero", "oeil", "oiseau", "oncle", "ordre", "papa", "papier", "parent", "passage", "passe", "patron", "pere", "petit", "peuple", "pied", "plaisir", "plan", "point", "pouvoir", "premier", "present", "president", "prince", "probleme", "quartier", "rapport", "regard", "reste", "retard", "retour", "reve", "revoir", "salut", "sang", "secret", "seigneur", "sentiment", "service", "seul", "siecle", "signe", "silence", "soir", "soldat", "soleil", "sourire", "souvenir", "sujet", "telephone", "tout", "train", "travail", "trou", "truc", "type", "vent", "ventre", "verre", "village", "visage", "voyage", "fils", "gens", "abandonner", "accepter", "accompagner", "acheter", "adorer", "agir", "aider", "aimer", "ajouter", "aller", "amener", "amuser", "annoncer", "apercevoir", "apparaitre", "appeler", "apporter", "apprendre", "approcher", "arranger", "arreter", "arriver", "asseoir", "assurer", "attaquer", "atteindre", "attendre", "avancer", "avoir", "baisser", "battre", "boire", "bouger", "bruler", "cacher", "calmer", "casser", "cesser", "changer", "chanter", "charger", "chercher", "choisir", "commencer", "comprendre", "compter", "conduire", "connaitre", "continuer", "coucher", "couper", "courir", "couvrir", "craindre", "crier", "croire", "danser", "decider", "decouvrir", "degager", "demander", "descendre", "desoler", "detester", "detruire", "devenir", "deviner", "devoir", "dire", "disparaitre", "donner", "dormir", "echapper", "ecouter", "ecrire", "eloigner", "embrasser", "emmener", "empecher", "emporter", "enlever", "entendre", "entrer", "envoyer", "esperer", "essayer", "etre", "eviter", "excuser", "exister", "expliquer", "faire", "falloir", "fermer", "filer", "finir", "foutre", "frapper", "gagner", "garder", "glisser", "habiter", "ignorer", "imaginer", "importer", "inquieter", "installer", "interesser", "inviter", "jeter", "jouer", "jurer", "lacher", "laisser", "lancer", "lever", "lire", "maintenir", "manger", "manquer", "marcher", "marier", "mener", "mentir", "mettre", "monter", "montrer", "mourir", "naitre", "obliger", "occuper", "offrir", "oser", "oublier", "ouvrir", "paraitre", "parler", "partir", "passer", "payer", "penser", "perdre", "permettre", "plaire", "pleurer", "porter", "poser", "pousser", "pouvoir", "preferer", "prendre", "preparer", "presenter", "prevenir", "prier", "promettre", "proposer", "proteger", "quitter", "raconter", "ramener", "rappeler", "recevoir", "reconnaitre", "reflechir", "refuser", "regarder", "rejoindre", "remarquer", "remettre", "remonter", "rencontrer", "rendre", "rentrer", "repeter", "repondre", "reposer", "reprendre", "ressembler", "rester", "retenir", "retirer", "retourner", "retrouver", "reussir", "reveiller", "revenir", "rever", "revoir", "rire", "risquer", "rouler", "sauter", "sauver", "savoir", "sembler", "sentir", "separer", "serrer", "servir", "sortir", "souffrir", "sourire", "souvenir", "suffire", "suivre", "taire", "tendre", "tenir", "tenter", "terminer", "tirer", "tomber", "toucher", "tourner", "trainer", "traiter", "travailler", "traverser", "tromper", "trouver", "tuer", "utiliser", "valoir", "vendre", "venir", "vivre", "voir", "voler", "vouloir"]
	.map(word => word.toUpperCase());

class App extends Component {
	state = {
		counter: 0,
		word: WORDS[Math.floor(Math.random() * WORDS.length)],
		mask: ""
	}
	UNSAFE_componentWillMount() {
		for(const index in LETTERS) {
			let button = `button${index}`;
			button = React.createRef();
			BUTTONS.push(button);
		}
		this.setState(
			(state) => ({
				mask: state.word.replace(/\w/g, "_")
			})
		);
	}
	verify = letter => {
		if (!this.state.mask.includes("_")) {
			return;
		}
		if (this.state.word.includes(letter)) {
			let arr = Array.from(this.state.word);
			let index = [];
			let ind = arr.indexOf(letter);
			while (ind !== -1) {
  				index.push(ind);
  				ind = arr.indexOf(letter, ind + 1);
			}
			for (const position of index) {
				this.setState(
					(state) => ({
						mask: state.mask.substr(0, position) + letter + state.mask.substr(position + letter.length)
					})
				);
			}
		}
		else {
			this.setState(
				(state) => ({
					counter: state.counter + 1
				})
			);
		}
	}
	resetWord = () => {
		this.setState(
			(state) => ({
				counter: 0,
				word: WORDS[Math.floor(Math.random() * WORDS.length)],
				mask: state.word.replace(/\w/g, "_")
			})
		);
		for(const i in LETTERS) {
			BUTTONS[i].current.reinitialize();
		}
	}
	render() {
		return (
			<div className="App">
				{Array.from(this.state.mask).map((letter, index) => <Mask
					key={index}
					letter={letter}
				/>)}
				<hr />
				{LETTERS.map((letter, index) => <Button
					key={index}
					ref={BUTTONS[index]}
					counter={this.state.counter}
					letter={letter}
					verify={this.verify}
				/>)}
				{this.state.counter >= 1 && this.state.counter < 11 ?
					<div>
						<img
							src={`img/${this.state.counter}.png`}
							title="Bientôt pendu !"
							alt="Bientôt pendu !"
						/>
					</div> :
					<div></div>
				}
				{this.state.counter >= 11 ?
					<div>
						<img
							src="img/11.png"
							title="Pendu !"
							alt="Pendu !"
						/>
						<span className="lose">PEN(R)DU !!! </span>
					</div> :
					<div></div>
				}
				{!this.state.mask.includes("_") ?
					<span className="win">GAGNÉ !!! </span> :
					<div></div>
				}
				{this.state.counter >= 11 || !this.state.mask.includes("_") ?
					<button onClick={this.resetWord}>Un autre !</button> :
					<div></div>
				}
			</div>
		);
	}
}

export default App;
