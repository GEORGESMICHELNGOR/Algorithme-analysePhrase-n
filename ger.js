Algorithme analysePhrase
    
    longueurPhrase := 0
    nombreMots := 0
    nombreVoyelles := 0

    
    Afficher "Entrez une phrase se terminant par un point : "
    phrase := LirePhrase()

    
    Pour chaque caractere dans phrase faire
        
        longueurPhrase := longueurPhrase + 1

       
        Si estLettre(caractere) alors
          
            Si estVoyelle(caractere) alors
                nombreVoyelles := nombreVoyelles + 1
            Fin Si
        Fin Si

       
        Si caractere == ' ' alors
            nombreMots := nombreMots + 1
        Fin Si
    Fin Pour

   
    nombreMots := nombreMots + 1

    
    Afficher "Longueur de la phrase :", longueurPhrase
    Afficher "Nombre de mots dans la phrase :", nombreMots
    Afficher "Nombre de voyelles dans la phrase :", nombreVoyelles
Fin Algorithme

Fonction estLettre(caractere)
    
    retourner (caractere >= 'a' ET caractere <= 'z') OU (caractere >= 'A' ET caractere <= 'Z')
Fin Fonction

Fonction estVoyelle(caractere)
    
    retourner caractere == 'a' OU caractere == 'e' OU caractere == 'i' OU caractere == 'o' OU caractere == 'u' OU
            caractere == 'A' OU caractere == 'E' OU caractere == 'I' OU caractere == 'O' OU caractere == 'U'
Fin Fonction

Fonction LirePhrase()
   
    phrase := ""
    caractere := LireCaractere()

    Tant que caractere != '.' faire
        phrase := phrase + caractere
        caractere := LireCaractere()
    Fin Tant que

    
    phrase := phrase + '.'
    retourner phrase
Fin Fonction
