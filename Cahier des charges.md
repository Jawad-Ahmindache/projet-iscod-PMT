# Cahier des charges : Project Management Tool (PMT)

## Contexte
- **Entreprise** : Code Solutions
- **Projet** : PMT (Project Management Tool)
- **Objectif** : Fournir une plateforme collaborative de gestion de projet destinée aux équipes de développement logiciel, permettant la planification, le suivi et la collaboration.

---

## Fonctionnalités détaillées

### 1. Gestion des utilisateurs
- **Inscription** :
  - Permettre à un visiteur de s'inscrire avec :
    - Nom d’utilisateur.
    - Adresse e-mail.
    - Mot de passe.
  - **API** :
    - `POST /api/auth/register` : Crée un nouveau compte utilisateur.
  - **Pages** :
    - `/register` : Formulaire d’inscription avec validation des champs.

- **Connexion** :
  - Permettre à un utilisateur inscrit de se connecter avec :
    - Adresse e-mail.
    - Mot de passe.
  - **API** :
    - `POST /api/auth/login` : Authentifie l'utilisateur et retourne un jeton de session.
  - **Pages** :
    - `/login` : Formulaire de connexion avec gestion des erreurs (ex. : mot de passe incorrect).

- **Gestion du profil utilisateur** :
  - Permettre la mise à jour des informations personnelles (nom, mot de passe, e-mail).
  - **API** :
    - `GET /api/users/me` : Récupère les informations du profil utilisateur connecté.
    - `PATCH /api/users/:id` : Met à jour les informations de l'utilisateur.
  - **Pages** :
    - `/profile` : Formulaire de mise à jour du profil.

---

### 2. Gestion des projets
- **Création de projets** :
  - Permettre à un utilisateur de créer un projet avec :
    - Nom du projet.
    - Description.
    - Date de début.
  - **API** :
    - `POST /api/projects` : Crée un nouveau projet.
  - **Pages** :
    - `/projects/new` : Formulaire de création de projet.

- **Visualisation des projets** :
  - Voir la liste des projets auxquels un utilisateur participe.
  - Voir les détails d’un projet.
  - **API** :
    - `GET /api/projects` : Récupère la liste des projets de l'utilisateur.
    - `GET /api/projects/:id` : Récupère les détails d’un projet.
  - **Pages** :
    - `/projects` : Affiche tous les projets de l'utilisateur.
    - `/projects/:id` : Affiche les détails d’un projet spécifique.

- **Gestion des membres** :
  - Permettre à l’administrateur d’un projet d’inviter des membres via leur e-mail.
  - Permettre de retirer des membres d’un projet.
  - **API** :
    - `POST /api/projects/:id/members` : Ajoute un membre au projet.
    - `DELETE /api/projects/:id/members/:userId` : Retire un membre d’un projet.
  - **Pages** :
    - `/projects/:id/members` : Interface pour inviter ou gérer les membres d’un projet.

- **Gestion des rôles** :
  - Permettre à l’administrateur de modifier les rôles des membres (administrateur, membre, observateur).
  - **API** :
    - `PATCH /api/projects/:id/members/:userId` : Met à jour le rôle d’un membre dans un projet.
  - **Pages** :
    - `/projects/:id/settings` : Interface pour gérer les rôles des membres.

---

### 3. Gestion des tâches
- **Création de tâches** :
  - Les administrateurs et membres peuvent ajouter des tâches avec :
    - Nom.
    - Description.
    - Date d’échéance.
    - Priorité.
  - **API** :
    - `POST /api/projects/:id/tasks` : Crée une tâche pour un projet.
  - **Pages** :
    - `/projects/:id/tasks/new` : Formulaire de création de tâche.

- **Assignation de tâches** :
  - Assigner une tâche à un ou plusieurs membres.
  - **API** :
    - `PATCH /api/tasks/:id/assign` : Assigne une tâche à un utilisateur.
  - **Pages** :
    - `/projects/:id/tasks/:taskId/assign` : Interface pour assigner des membres.

- **Mise à jour des tâches** :
  - Modifier les informations d’une tâche ou ajouter une date de fin.
  - **API** :
    - `PATCH /api/tasks/:id` : Met à jour une tâche existante.
  - **Pages** :
    - `/projects/:id/tasks/:taskId/edit` : Formulaire pour modifier une tâche.

- **Visualisation des tâches** :
  - Afficher la liste des tâches par statut ou voir une tâche individuelle.
  - **API** :
    - `GET /api/projects/:id/tasks` : Récupère les tâches d’un projet.
    - `GET /api/tasks/:id` : Récupère les détails d’une tâche.
  - **Pages** :
    - `/projects/:id/tasks` : Tableau de bord des tâches.
    - `/projects/:id/tasks/:taskId` : Vue détaillée d’une tâche.

- **Notifications par e-mail** :
  - Notifier les utilisateurs lorsqu'une tâche leur est assignée.
  - **API** :
    - Service SMTP intégré pour gérer l’envoi des e-mails de notification.

- **Suivi des modifications** :
  - Suivre l’historique des modifications d’une tâche.
  - **API** :
    - `GET /api/tasks/:id/history` : Récupère l’historique des modifications d’une tâche.
  - **Pages** :
    - `/projects/:id/tasks/:taskId/history` : Historique détaillé d’une tâche.

---

### 4. Tableau de bord
- Visualisation des tâches par statut (à faire, en cours, terminé).
- Affichage de statistiques comme le nombre total de tâches ou le pourcentage terminé.
- **API** :
  - `GET /api/projects/:id/dashboard` : Récupère les statistiques et le résumé des tâches d’un projet.
- **Pages** :
  - `/projects/:id/dashboard` : Vue récapitulative des tâches et statistiques d’un projet.

---

## Architecture

### Frontend
- **Framework** : Angular
- **Pages** :
  - `/register`, `/login`, `/profile`.
  - `/projects`, `/projects/new`, `/projects/:id`.
  - `/projects/:id/tasks`, `/projects/:id/tasks/new`, `/projects/:id/tasks/:taskId`.

### Backend
- **Endpoints principaux** :
  - Authentification :
    - `POST /api/auth/register` : Inscription.
    - `POST /api/auth/login` : Connexion.
    - `GET /api/users/me` : Profil utilisateur.
  - Projets :
    - `POST /api/projects` : Créer un projet.
    - `GET /api/projects` : Liste des projets.
    - `GET /api/projects/:id` : Détails d’un projet.
    - `POST /api/projects/:id/members` : Ajouter des membres.
    - `DELETE /api/projects/:id/members/:userId` : Supprimer un membre.
    - `PATCH /api/projects/:id/members/:userId` : Modifier un rôle.
  - Tâches :
    - `POST /api/projects/:id/tasks` : Créer une tâche.
    - `GET /api/projects/:id/tasks` : Liste des tâches.
    - `GET /api/tasks/:id` : Détails d’une tâche.
    - `PATCH /api/tasks/:id` : Modifier une tâche.
    - `PATCH /api/tasks/:id/assign` : Assigner une tâche.
    - `GET /api/tasks/:id/history` : Historique des modifications.

---
### Permissions
| Action                          | Administrateur | Membre | Observateur |
|---------------------------------|----------------|--------|-------------|
| Ajouter des membres au projet   | ✔              |        |             |
| Créer une tâche                 | ✔              | ✔      |             |
| Assigner une tâche              | ✔              | ✔      |             |
| Mettre à jour une tâche         | ✔              | ✔      |             |
| Visualiser une tâche unitaire   | ✔              | ✔      | ✔           |
| Visualiser le tableau de bord   | ✔              | ✔      | ✔           |
| Être notifié                    | ✔              | ✔      | ✔           |
| Voir l’historique des tâches    | ✔              | ✔      | ✔           |

---
