class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val()
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    //console.log(playerIndex)
    database.ref(playerIndex).set({
      name:this.name,
      distance: this.distance
    });
  }
  static getPlayerInfo(){
    var allPlayerRef = database.ref('players');
    allPlayerRef.on("value",function(data){
      allPlayers = data.val()
    });
  }
}
