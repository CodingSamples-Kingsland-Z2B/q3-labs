// Create a Song class/template 
class Song {
    constructor(typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }
}

function main(arr) {
    // get the first element in the array 'songs number in n'
    let n = arr.shift();

    // get the typeList of songs 
    let playList = arr.pop();

    // Create empty array to store my songs in it 
    let songs = [];

    // Iterate through the input array to create the songs objects 
    // And store them in the songs Array
    arr.forEach((song) => {
        // Create an Array for each song from a string seprared by '_'
        let songArr = song.split('_');
        // Get the song name, time and typeList 
        let [typeList, name, time] = songArr;
        // Create a song object using the Song Class and push it inside songs array 
        songs.push(new Song(typeList, name, time));
    });

    // If the playlist is all
    if (playList == 'all') {
        // Print all the song names inside the songs array 
        songs.forEach(song => console.log(song.name));
    } else {
        // If the playlist has a specific playlist to play 
        // Search and filter this playlist songs 
        let filteredList = songs.filter(song => song.typeList == playList)
            // Print all filtered playlist songs 
        filteredList.forEach(song => console.log(song.name))
    }

}

main([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'favourite'
])