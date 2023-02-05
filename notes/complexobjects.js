// instance of a complex object data structure
// the array contains two objects 
const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }, // first object
  
    {
      'artist': 'Imagine Dragons',
      'title': 'Night Visions',
      'release_year': 2012,
      'formats': [
        'CD',
        'Mp3',
        'LP'
      ]
    } // second object
  ];

  console.log(myMusic);

  //accessing nested objects
  const myStorage = {
    'car': {
        'inside': {
            'glove box': 'maps',
            'passenger seat': 'crumbs'
        },
        'outside': {
            'trunk': 'jack'
        }
    }
  };

  const gloveBoxContents = myStorage.car.inside["glove box"];
  console.log(gloveBoxContents);

  //accessing nested arrays
  