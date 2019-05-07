var GameBoard = {};
var MapInfo = {};
var MapNode = {};

GameBoard.prototype.constructor = function(battleId) {
    this.currentTurn = 0;
    this.mapInfo = new MapInfo(battleId);
    this.characters = [];
};

GameBoard.prototype.isGameEnded = function() {
    return false;
}

MapInfo.prototype.constructor = function(battleId) {
    this.battleId = battleId;
    this.map = [[]];
    this.size = {
        x: 0,
        y: 0,
        h: 0
    };
};

MapInfo.prototype.loadMap = function() {

};

MapNode.prototype.constructor = function(id, traversable) {
    this.id = id;
    this.traversable = traversable;
    this.
};



