# Présenration Sigaux

J'ai besoin de faire une presentation sur les signaux angular.
Elle s'inscrit dans la lignée des autres présentations, mais dans un aspect un peu plus orienté cour magistral. L'intérêt étant non pas de montrer un concept, mais de partager des bonnes pratiques à appliquer dès à présent.

Il faudra donc un peu plus illustrer chaque cas d'usage. Mais pas besoin d'intégrer une syntaxe complète de composant à chaque fois. On pourra se focus uniquement sur ce qu'on cherche à démontrer.

Libre à toi de faire une deux ou trois slides par points à aborder, suivant ce que tu juges nécessaire.

- Introduction : 
  - l'intéret de passer aux signals 
    - la fin de zone.js, les gains de perfs
    - la syntaxe rxjs qui peut etre lourde
    - plus besoin du pipe async
- Basics 
  - la syntaxe de base
    - déclarer un signal
    - computed
    - effect
    - la différence computed et effect
- Interractions
  - un exemple de rempalcement de multiple input set par un computed
  - un exemple d'effect dans un cas concret ?
- RxJS
  - toSignal toObservable
  - les opérators
- Resources 
  - Resource, RxResource, HttpResource
  - Cas complet de HttpResource avec un loading et une gestion d'erreur 
    - et comment ça s'intègre dans un projet un peu plus légacy avec un service qui utilise httpClient
- Manques par rapport à Rxjs
  - take/skip
  - withLatestFrom
  - etc.
- Arbitrage rxjs/signals
- un petit big up aux ngrx/signals
- une règle de lint pour interdire les variables non signals et le pipe async dans le template




### Update 1 
il y des choses qui vont pas 

- la toute première slide tu peux la virer 
- la 2e tu peux modifier 
  - l'exemple est pas terrible, pas besoin de foutre un service, met peut petre un petit template plutot pour montrer la diff entre avant aorès dans le template
  - précise aussi l'intéret des signaux notamment sur le rerender partiel du composant par rapport à avant
- pour la slide httpResource utilise la vraie httpResource angular (https://angular.dev/guide/http/http-resource)
- Pour la slide d'intégration legacy, tout pareil httpResource et pas rxResource stp
- Dans la slide d'arbitrage préciser que c'est ok d'utiliser rxjs mais surtiut pas dans laisser d'observable dans le template
- pour la règle de lint, tu peux juste laisser la config eslint et supprimer les 2 autres codepsan
