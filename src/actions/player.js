export const PLAYER_ADD = "PLAYER_ADD";
export const PLAYER_REMOVE = "PLAYER_REMOVE";

export const player_add = (name) => ({
  type: PLAYER_ADD,
  name
});

export const player_remove = (index) => ({
  type: PLAYER_REMOVE,
  index
});
