# projet-iscod-PMT

Ce projet est une application de création de ticket pour l'iscod.
il inclut :
- La CI/CD dans .github/workflows/ci-cd.yml
- Le schema sql dans schema sql.png
- un docker compose (exclusivement pour le dev en prod)
- Un cahier des charges
- Une documentation swagger
- Un dataseeder (Pour faciliter la démo du projet j'ai préféré mettre un endpoint api même si une version .sql existe)
- Des Test unitaires

## Liens
- Site : http://pmt.jawad-ahmin.fr/
- API: http://jawad-ahmin.fr:8080/
- Doc swagger:  http://jawad-ahmin.fr:8080/swagger-ui/index.html

## Installation du projet
Par défaut le projet est configuré pour être prêt à l'emploi en mode développement afin de faciliter le correcteur.
1) git clone le projet

2) ``docker compose up``

3) une fois que le projet est entièrement redémarré executer les seeder en allant sur l'endpoint :
  http://localhost:8080/api/dataseed

4) aller sur l'app : http://localhost:4200/


## Description du déploiement
Dans un github actions : 
-> Execution des test 

-> Build de l'image docker du backend  

-> Build du front end 

-> Transfert sur le serveur l'image du backend + execution

-> Transfert du build du front
 

   
### Liste des utilisateurs par défaut pour se connecter

Admin
- User : admin@example.com
- Pass: admin123

Utilisateur 1:
- User : alice@example.com
- Pass: admin123

Utilisateur 2:
- User : bob@example.com
- Pass: admin123
