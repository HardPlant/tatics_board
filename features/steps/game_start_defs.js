const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const fs = require('fs');

var gameBoard;

Given('주어진 전투맵ID {string}으로 게임판을 생성한다.', function (battleId) {
    
    var script = fs.readFileSync("js/ready.js") + " ";
    eval(script);

    gameBoard = new GameBoard(battleId);

    console.log(gameBoard);

    assert.deepEqual(typeof(gameBoard), "object");
    assert.equal(gameBoard.currentTurn, 0);
  });

When('게임 로드 함수가 호출되면', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

When('{string} 레이어 지형정보를 로드한다', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

Then('로드된 마지막 지형정보 기본 높이는 {string}이다', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
