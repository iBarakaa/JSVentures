// Record Updater 
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  

  function updateRecords(records, id, prop, value) {
    // checks is value is empty and if so the property is deleted
    if (value === "") {
      delete records[id][prop];
    } 
    
    // if property is no tracks and value not empty, prop is set to the provided value
    else if (prop !== "tracks" && value !== "") {
      records[id][prop] = value;
    } 
  
    // if prop is tracks and value not empty, and records have no track array
    else if (prop === "tracks" && value !== "") {
      if (records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = []; 
      }
      // value pushed onto tracks array
      records[id][prop].push(value);
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');