
var FRIEND_NAME = ['bryan', 'korbin', 'steven', 'fetcher', 'sunny'];

var LOCATION_NAME = ['kroger', 'publix', 'ingles', 'aldi', 'lydl',
    'quality', 'target', 'Dollar General', 'piggly wiggly', 'racetrack'];

var WEAPON_NAME = ['bread', 'eggs', 'milk', 'cheese', 'cherrys',
    'cream cheese', 'cereal', 'pretzles', 'oranges', 'zuccini', 'mushroom',
    'jam', 'almond milk', 'steak', 'seasonings', 'pan', 'ice', 'drinks',
    'toast', 'almonmds'];


document.addEventListener('DOMContentLoaded', function () {

    for (var c = 0; c < 100; c++) {

        var h3Element = document.createElement('h3');
        var h3ElementText = document.createTextNode('Accusation ' + (c + 1));
        h3Element.appendChild(h3ElementText);
        document.body.appendChild(h3Element);
        
        h3Element.addEventListener('click', clueSelector(c));

    }

    

})

function clueSelector(c){

    var friendNum = FRIEND_NAME[c % 5];
    var locationNum = LOCATION_NAME[c % 10];
    var weaponNum = WEAPON_NAME[c % 20];

    return function(){

        console.log(this.textContent + ': I accuse ' + friendNum + 
        ', with the ' + weaponNum + ' in the ' + 
        locationNum + '!');

    }

}