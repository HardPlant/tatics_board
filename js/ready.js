var GameBoard = {};
GameBoard.prototype = {};

var MapInfo = {};
MapInfo.prototype = {};
var MapNode = {};

GameBoard.prototype.constructor = function(battleId) {
    this.currentTurn = 0;
    this.mapInfo = new MapInfo(battleId);
    this.characters = [];
};

GameBoard.isGameEnded = function() {
    return false;
}


MapNode = {};

MapNode.loadFromJson = function() {
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

MapNode.getHeight = function(id) {
    return MapNode[id].height;
};

MapNode.isTraversable = function(id) {
    return MapNode[id].traversable;
};


MapInfo.constructor = function(battleId) {
    this.battleId = battleId;
    this.mapInfo = loadMap(battleId);
};

MapInfo.loadMap = function(battleId) {
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
