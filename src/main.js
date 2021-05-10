import App from './components/App.js';

document.getElementById('root').appendChild(App());

var gameCardsContainer = document.querySelector('#gameCards');
var resetButton = document.querySelector('#reset-button');
var modal = document.querySelector('.modal-container');
var modalText = document.querySelector('.modal-text');

var firstCardClicked = null;
var secondCardClicked = null;
var firstCardClasses = null;
var secondCardClasses = null;

var maxMatches = 9;
var matches = 0;

var attempts = 0;
var gamesPlayed = 0;

// Dynamic Card Shuffle

var cardFrontDeck = [
    'card-front-1',
    'card-front-2',
    'card-front-3',
    'card-front-4',
    'card-front-5',
    'card-front-6',
    'card-front-7',
    'card-front-8',
    'card-front-9',
    'card-front-1',
    'card-front-2',
    'card-front-3',
    'card-front-4',
    'card-front-5',
    'card-front-6',
    'card-front-7',
    'card-front-8',
    'card-front-9'
]
