# Ghibli · Memory Match Game

## Índice

* [1. Tecnologías/Herramientas utilizadas](#1-tecnologías/herramientas-usadas)
* [2. Live Demo](#2-live-demo)
* [3. Preview](#3-preview)
* [4. Definición del producto](#4-definición-del-producto)
* [5. Historias de usuario/Features](#5-historias-de-usuario/features)
* [6. Prototipo](#6-prototipo)
* [7. Test de usabilidad](#7-test-de-usabilidad)

***

## 1. Tecnologías/Herramientas usadas

- HTML
- CSS
- Javascript
- Github
- Node.js 

## 2. Live Demo

Puedes probar el juego en https://valeriavidelam.github.io/SCL016-memory-match-game/src/index.html

## 3. Preview

 <img src="./src/assets/images/readme/memorymatchpreview.gif" alt="Preview" class="Preview">


## 4. Definición del producto

_**Ghibli Memory Match**_ es una versión web del clásico juego de memorice con una versión especial inspirada en las películas del estudio japonés de animación Ghibli. El proyecto está pensado como una página con interfaz rápida para proporcionar a un jugador una partida rápida mientras tiene un tiempo libre frente a su dispositivo.

El _**público objetivo**_ pensado para este proyecto abarca personas entre 25 - 35 años, conocedoras _en su mayoría_ sobre la temática del mundo Ghibli, que cuentan con un rato libre mientras están trabajando o haciendo algo frente a los dispositivos. Sin embargo, se considera un público objetivo de rebote entre los 50 - 60 que sean asiduos a los juegos interactivos de fácil interpretación y que les guste pasar tiempo libre frente a sus dispositivos electrónicos.
Está pensando en inglés de manera de hacerlo más universal; de igual manera no maneja mucho texto por lo que no es imprescindible manejar el idioma por completo.


La modalidad de juego consta en iniciar la página, hacer click al botón **"Click to start"**, el que te llevará a una página donde aparecen 16 cartas y una música alusiva a alguna película de Ghibli te invita a jugar. El jugador deberá hacer click a cada carta hasta lograr hacer match en un tiempo establecido de 50 segundos.
Al ser un prototipo inicial básico, el juego solo consta de una partida, sin niveles de dificultad ni incrementación o disminución de tiempo, ya que como bien se menciona al inicio, está pensado para ser un juego rápido de paso que puedes repetir cuantas veces quieras al día mientras esperas que cargue una página, o que te atiendan en algún lugar.

## 5. Historias de usuario/FEATURES

Se realizó una encuesta a personas que integraran el grupo etario clasificado como público objetivo, definiendo así las historias de usuario para dar inicio al prototipo y creación del proyecto.

### HU 1. COMO USUARIO QUIERO VISUALIZAR EL JUEGO DE MANERA RÁPIDA DESDE CUALQUIER DISPOSITIVO ELECTRÓNICO.
_FEATURES: User can view the game. / El usuario debe ser capaz de poder cargar y visualizar el juego en diferentes dispositivos._
- El prototipo de fidelidad debe ser amigable con todos los usarios y debe priorizar un juego ágil y rápido.
- Debe tener una página de inicio con un index básico en HTML que me lleve al juego.
- Debe ser responsive para que se adapte a cualquier dispositivo electrónico.

### HU 2. COMO USUARIO QUIERO PODER JUGAR MÁS DE UNA PARTIDA SIN REPETIR CARTAS.
_FEATURES: User can refresh the page and play again with random cards. / El usuario debe ser capaz de refrescar la página y jugar indefinidamente siempre con baraja nueva._
- Las cartas tienen que barajarse cada vez que abra la página
- Darle una opción de 'play again' cada vez que gane o pierda el juego.

### HU3. COMO JUGADOR QUIERO IR VIENDO SI HAGO MATCH.
_FEATURES: User can select cards and view their flips. User cand match 2 cards. / El usuario puede ser capaz de seleccionar una carta y hacer match en caso de que coincidan. Las cartas se deben girar en caso contrario_
- Hacer flipcard con todas las cartas.
- Hacer una función que llame a dos cartas iguales a quedarse congeladas y hacer match. En caso contrario, deben volver a girarse y quedar boca abajo.

### HU4. COMO BUEN COMPETIDOR QUIERO QUE EL JUEGO ME INDIQUE SI GANÉ O PERDÍ LA PARTIDA.
_FEATURES: User can win the game. User can lose the game / El jugador tiene que recibir un anuncio en que avise si ganó o perdió la partida._
- Crear un alert o un div que contenga un mensaje que diga que ganó o perdió el juego. Otorgarle la función en caso de que haga match con todas las cartas o en caso contrario.

### HU5. COMO USUARIO QUIERO ESCUCHAR MÚSICA DE LA PELÍCULA MIENTRAS JUEGO PARA HACERLO MÁS ENTRETENIDO.

_FEATURES: User can listen ghibli's soundtrack while their play the game. / El usuario puede escuchar música de Ghibli mientras está jugando._ 
- Crear una función que llame a activar música al iniciar la partida.
- Crear una función que active sonidos cada vez que el usuario hace match o hace girar las cartas.
- Crear una función que active un sonido de victoria si el jugador gana la partida.
- Crear una función que active un sonido de game over en caso de que el jugador no logre completar las cartas.


## 6. Prototipo

### Diseño de baja fidelidad

<img src="./src/assets/images/readme/prototipo1.jpg" alt="Prototipo-baja-fidelidad"/>

### Diseño de alta fidelidad

<img src="./src/assets/images/readme/Figma1.png" alt="Prototipo-alta-fidelidad"/>
<img src="./src/assets/images/readme/Figma2.png" alt="Prototipo-alta-fidelidad"/>

<a href="https://www.figma.com/proto/Xv0RGO1ZEFsL9VgDukciNR/Untitled?node-id=23%3A2&scaling=min-zoom&page-id=0%3A1" rel="nofollow">Click aquí para ver el prototipo completo.</a>

### Diseño final

- Versión Desktop
<img src="./src/assets/images/readme/desktop2.png" alt="Versión-final-desktop"/> 
<img src="./src/assets/images/readme/desktop1.png" alt="Versión-final-desktop"/>

- Versión Móvil

<img src="./src/assets/images/readme/movil.png" alt="Versión-final-movil"/> 



## 7. Test de usabilidad

<img src="./src/assets/images/readme/Testdeusabilidad.png" alt="Test-de-usabilidad" class="Test-de-usabilidad"/>
