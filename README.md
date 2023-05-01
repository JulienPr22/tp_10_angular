# Tp 10 Angular

## Page d'accueil :

- liste des tickets en base rangés en fontion de leur statut(TODO, In Progress ou Closed) dans 3 colonnes, pour cela on effectue une requête GET qui nous return l'ensemble des résumés des tickets (SummaryTicketDTO)

- au clique sur un ticket, on accède au détail tu ticket, on récupère un detailTicketDTO en fonction de l'id du ticket

- Boutton "ajouter", qui permet d'accéder à la page de création de ticket

## Détail ticket :

- De cette page on a alors plus d'informations sur le ticket comme la description complète

- On peux également accéder au menu de modification de ticket

- Il y a aussi un boutton "supprimer" qui ouvre un dialog de confirmation pour supprimer le ticket (la suppression ne fonctionne pas, problème de droit ?)

## Création/modification ticket :

- Les pages de création et de suppression de ticket sont semblable à la ifférence que le menu d'edit prérempli les champs du formulaire avec les données du ticket en modification

- A la confimation du formulaire, le ticket est créé ou modifier et on est redirigé vers la page d'accueil
