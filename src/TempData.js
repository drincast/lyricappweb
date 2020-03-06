let song = {
    by: 'Michael Jackson',
    lyric: [],
    title: 'beat it',
};

let sp1 = [];
sp1.push("They told him don't you ever come around here");
sp1.push("Don't want to see your face, you better disappear");
sp1.push("The fire's in their eyes and their words are really clear");
sp1.push("So beat it, just beat it");

let sp2 = [];
sp2.push("You better run, you better do what you can");
sp2.push("Don't want to see no blood, don't be a macho man");
sp2.push("You want to be tough, better do what you can");
sp2.push("So beat it, but you want to be bad");

let sp3 = [];
sp3.push("Just beat it, beat it, beat it, beat it");
sp3.push("No one wants to be defeated");
sp3.push("Showin' how funky and strong is your fight");
sp3.push("It doesn't matter who's wrong or right");

song.lyric.push(sp1);
song.lyric.push(sp2);
song.lyric.push(sp3);

let lstSongs = [];
lstSongs.push(song);

export default function GetSongs(){
    return lstSongs;
}

