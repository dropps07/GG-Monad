/**
 * CoreCade smart contract addresses
 */
export const CONTRACTS = {
    GAME_ROOM: '0x7Efaa00431EF50a9679E1225fC0418cd36EFe9C0',
    POINTS_MANAGER: '0x7523A27577183E06cFaE77ad64b4a423482381Be',
    STATISTICS_TRACKER: '0x7680f38d9eFca581EB8AF97dEE451B21E7Ce950f'
  };
  
  /**
   * Enum mappings for GameRoom contract
   */
  export const GameType = {
    FlappyBird: 0,
    AIChallenge: 1
  };
  
  export const RoomType = {
    Public: 0,
    Private: 1,
    Tournament: 2
  };
  
  export const RoomStatus = {
    Filling: 0,
    Active: 1,
    Completed: 2,
    Expired: 3,
    Canceled: 4
  };