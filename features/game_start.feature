Feature: 준비

   게임판을 준비한다.

   Scenario: 게임판 로드
    Given 주어진 "전투맵ID"으로 게임판을 생성한다.
    When 게임 로드 함수가 호출되면
    Then 지형정보를 로드하고
    Then 아군 정보를 로드하고
    Then 적군 정보를 로드한다
