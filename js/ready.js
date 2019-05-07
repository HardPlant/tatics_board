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


MapNode.prototype = {};

MapNode.prototype.loadFromJson = function() {
    this[0] = {
        height: 0,
        traversable: false
    };
}

MapNode.prototype.constructor = function(id, height) {
    this.id = id;
    this.height = height + MapNode.getHeight(id);
    this.traversable = MapNode.isTraversable(id);
};

MapNode.prototype.getHeight = function(id) {
    return MapNode.prototype[id].height;
};

MapNode.prototype.isTraversable = function(id) {
    return MapNode.prototype[id].traversable;
};


MapInfo.prototype.constructor = function(battleId) {
    this.battleId = battleId;
    this.mapInfo = loadMap(battleId);
};

MapInfo.prototype.loadMap = function(battleId) {
    var currentHeight = -2;
    var mapInfo = this;

    this.map = this.loadFromJson(battleId);
    this.mapNodeInfo = MapNode.loadFromJson();

    this.map.tilewidth;
    this.map.tileheight;

    this.map.layers.forEach(function(layer, index) {
        layer.data.forEach(function(tileId, idx) {
            // if idx = 15, x = 15 = 15 % 16, y = 0 = (15 / 15 - 1)
            // if idx = 31, x = 15 = 31 % 16, y = 1 = (31 / 15 - 1)
            if (idx % tileheight === 0) {
                currentHeight += 2;
            }
            var x = idx % tileheight;
            var y = idx / tileheight - 1;
            
            if (typeof(mapInfo[x]) === "undefined") {
                mapInfo[x] = {};
            }

            mapInfo[x][y] = new MapNode(tileId, currentHeight);
        });  
    });
};
