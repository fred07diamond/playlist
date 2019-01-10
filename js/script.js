/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [
    'Speecheless',
    'Tequila', 
    'Meant To Be',
    'She Got The Best of Me',
    'Lose It',
    'Best Shot'
    ];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artists = [
    'Dan and Shay',
    'Dan and Shay',
    'Florida Georgia Line',
    'Luke Combs',
    'Kane Brown',
    'Jimmie Allen',
    ];

var images = [
    'http://bit.ly/2H4tTy2',
    'http://bit.ly/2SKpXDP',
    'http://bit.ly/2M1TfLF',
    'http://bit.ly/2H3VEa2',
    'http://bit.ly/2CYOW0H',
    'http://bit.ly/2FoErFx',
    ];

var lengths = [
    '3:33',
    '3:16',
    '2:43',
    '3:03',
    '3:01',
    '3:16',
    ];
var links = [
    'http://bit.ly/2FjDEqy',
    'http://bit.ly/2QxOF8x',
    'http://bit.ly/2AEVVum',
    'http://bit.ly/2H53VdB',
    'http://bit.ly/2Fm1L7Q',
    ];


    // BELOW Use forEach Loop to display the data from each of your array's in the correct div



function displaySongInfo(){
    images.forEach(function(image) {
        $("#images").append("<img src='" + image + "'>");   
    });

    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });

    artists.forEach(function(artist) {
        $("#artists").append("<p> By: " + artist + "</p>");   
    });

    lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>"); 
    });

    links.forEach(function(link) {
        $("#links").append("<a href='" + link + "'> Listen </a>"); 
    });
}

function emptySongInfo(){
    $("#images").empty();
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}

$("#add").click(function() {
    var songName = $("#song").val();
    var imageUrl = $("#image").val();
    var artistName = $("#artist").val();
    var songLength = $("#length").val();
    var link = $("#links").val();

    songs.push(songName);
    artists.push(artistName);
    images.push(imageUrl);
    lengths.push(songLength);
    links.push(link);

    emptySongInfo()
    displaySongInfo();
});

displaySongInfo();
