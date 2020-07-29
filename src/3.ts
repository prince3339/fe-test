// Here I'm using Singleton design pattern under the Creation desgin pattern category
// As only one player instance will be available when we instantiate the player

interface IPlayer {
  play(): void;
  forward(time: number): void;
  rewind(time: number): void;
}

class Player implements IPlayer {
  public play() {}
  public forward(time: number) {}
  public rewind(time: number) {}
}

class VideoPlayer extends Player {
  // Assuming there is video tag with id 'playerId' in the document
  public mediaPlayer: HTMLVideoElement = document.getElementById('playerId') as HTMLVideoElement;

  play() {
    this.mediaPlayer.play();
  }
  forward(time: number) {
    this.mediaPlayer.currentTime += time; // time in seconds
  }
  rewind(time: number) {
    this.mediaPlayer.currentTime -= time; // time in seconds
  }
}