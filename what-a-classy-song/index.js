class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listeners = [];
  }

  howMany(arr) {
    let count = 0;
    arr.forEach((element) => {
      if (!this.listeners.includes(element.toLowerCase())) {
        this.listeners.push(element.toLowerCase());
        count++;
      }
    });
    console.log(count);
  }
}

const mountMoose = new Song("Mount Moose", "The Snazzy Moose");

mountMoose.howMany(["John", "Fred", "BOb", "carl", "RyAn"]);
mountMoose.howMany(["JoHn", "Luke", "AmAndA"]);
