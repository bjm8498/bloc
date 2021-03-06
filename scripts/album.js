var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        {title: 'Blue', duration: '4:26'},
        {title: 'Green', duration: '3:14'},
        {title: 'Red', duration: '5:01'},
        {title: 'Pink', duration: '3:21'},
        {title: 'Magenta', duration: '2:15'}
    ]
};

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
    ]
};

var albumMe = {
    title: 'Too Little Fun',
    artist: 'Brian Moore',
    label: 'Job guarentee',
    year: '2017',
    albumArtUrl: 'assets/images/album_covers/16.png',
    songs: [
        {title: "C'mon DOM", duration: "2 weeks"},
        {title: "Callback blues", duration: "painstakingly long"},
        {title: "Git in my files", duration: "Save me mentor!"},
        {title: "The Muse is gone", duration: "I'm out of ideas."},
        {title: "Don't look up the answer", duration: "infinity"}
    ]
}

var createSongRow = function(songNumber, songName, songLength) {
    var template = 
        '<tr class = "album-view-song-item">'
<<<<<<< HEAD
    + '<td class = "song-item-number" >' + songNumber + '</td>'
=======
    + '<td class = "song-item-number">' + songNumber + '</td>'
>>>>>>> 11-DOM-Scripting-Album
    + '<td class = "song-item-title">' + songName + '</td>'
    + '<td class = "song-item-duration">' + songLength + '</td>'
    + '</tr>'
    ;
    
    return template;
};

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0]
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0]

var setCurrentAlbum = function (album) {
    

    
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    
    albumSongList.innerHTML = '';
    
    for(var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

<<<<<<< HEAD
var songListContainer = document.getElementsByClassName('album-view-song-list')[0]

var songRows = document.getElementsByClassName('album-view-song-item');

var playButtonTemplate = '<a class== "album-song-button"><span class="ion-play"></span></a>';

window.onload = function() {
    setCurrentAlbum(albumPicasso);

    
    

=======


window.onload = function() {
    setCurrentAlbum(albumPicasso);
    
>>>>>>> 11-DOM-Scripting-Album
    var albumarray = [albumPicasso, albumMarconi, albumMe];
    var index = 1;
    albumImage.addEventListener('click', function (event) {
        setCurrentAlbum(albumarray[index]);
        index++;
        if(index == albumarray.length){
            index = 0;
        }
    })
<<<<<<< HEAD
    
    songListContainer.addEventListener('mouseover', function(event) {
        if (event.target.parentElement.className === 'album-view-song-item') {
          // Change the content from the number to the play button's HTML//
            event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
        }
    });
    
        for(var i = 0; i < songRows.length; i++) {
        songRows[i].addEventListener('mouseLeave', function(event) {
            
            this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
            
        });
    }
    
=======
>>>>>>> 11-DOM-Scripting-Album
};



