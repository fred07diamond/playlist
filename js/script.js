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
    'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/76/b6/e4/76b6e4e2-5d85-1d5c-d524-c3b1f9cb8f8f/093624906407.jpg/268x0w.jpg',
    'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/76/b6/e4/76b6e4e2-5d85-1d5c-d524-c3b1f9cb8f8f/093624906407.jpg/268x0w.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51cF-s0FDqL._SY355_.jpg',
    'https://musicrow.com/wp-content/uploads/2018/04/unnamed-7.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/91%2B5lQW3TqL._SY355_.jpg',
    'https://countrymusictattletale.com/wp-content/uploads/2018/09/Jimmie-Allen-500x500.jpg',
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
    'http://bit.ly/2Fm1L7Q'
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

    links.forEach(function(links) {
        $("#links").append("<a href='" + links + "'> Listen </a>"); 
    });
}

// function emptySongInfo(){
//     $("#images").empty();
//     $("#songs").empty();
//     $("#artists").empty();
//     $("#lengths").empty();
//     $("#links").empty();
// }

$("#add").click(function() {
    var songName = $("#song").val();
    var imageUrl = $("#image").val();
    var artistName = $("#artist").val();
    var songLength = $("#length").val();
    var link = $("#link").val();

    songs.push(songName);
    artists.push(artistName);
    images.push(imageUrl);
    lengths.push(songLength);
    links.push(link);

    displaySongInfo();
});

displaySongInfo();

console.log(links);
