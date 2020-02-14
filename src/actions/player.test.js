import * as actions from "18dux/actions";

describe('Player Actions', () => {
  test('should have name constants', () => {
    expect(actions.PLAYER_ADD).toEqual("PLAYER_ADD");
    expect(actions.PLAYER_REMOVE).toEqual("PLAYER_REMOVE");
  });

  describe('player_add', () => {
    test('should generate a proper action object', () => {
      expect (actions.player_add("Kelsin")).toEqual({
        type: actions.PLAYER_ADD,
        name: "Kelsin"
      });
    });
  });

  describe('player_remove', () => {
    test('should generate a proper action object', () => {
      expect (actions.player_remove(0)).toEqual({
        type: actions.PLAYER_REMOVE,
        index: 0
      });
    });
  });
});
