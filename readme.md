Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede


- MILESTONE 0
    - Creo un array di oggetti. 
        Ogni oggetto corrisponde ad una persona del team.
        Ogni oggetto ha 3 chiavi (nome, ruolo e immagine).

- MILESTONE 1
    - Stampo su console tutte le informazioni dell'array

- MILESTONE 2
    - Creo una lista sul file html dandole una classe
    - Definisco la variabile della lista nel file js
    - Creo un ciclo per la stampa in pagina che:
        - Definisce la variabile del singolo oggetto dell'array
        - Definisce la variabile li creando l'elemento html
        - Definisce le variabili dell'immagine, del nome e del ruolo creando gli elementi html
        - Appende ai tre elementi html le corrispettive chiavi dell'oggetto
        - Appende ad li i tre elementi html
        - Appende alla lista l'elemento 'li'

- BONUS 1
    - Sostituisco l'elemento creato 'p' della stringa della foto con l'elemento 'img'
    - Aggiungo l'attributo .src per la ricerca del file giusto usando l'interpolazione per sfruttare la stringa = al nome del file

- BONUS 2
    - Creo direttamente nel file html un elemento 'div' con classe container
    - Definisco la variabile di 'container'
    - (Avendo creato il 'div' container adesso la lista non verrà richiamata dall'elemento esistente ma creata nel file js)
    - Nel ciclo di stampa nel file js:
        - Definisco variabile card creando l' elemento html 'div' 
        - Aggiungo una classe alla variabile 'card' che mi serirà per lo stile
        - le tre variabili delle chiavi vengono appese alla card
        - la card viene appesa all' elemento 'li'
        - appendo lista a container
    - Stilizzo tramite il file di stile css usando 'ul' come riga e 'li' come colonna