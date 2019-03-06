export const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080/";

let tmp_ws_url = process.env.REACT_APP_WS_URL || "ws://127.0.0.1:8080/ws/";
if (!(tmp_ws_url.startsWith('ws:') || tmp_ws_url.startsWith('wss:'))) {
  if (tmp_ws_url.startsWith('/')) {
    tmp_ws_url = ((window.location.protocol === "https:") ? "wss://" : "ws://") + window.location.host + tmp_ws_url;
  } else {
    tmp_ws_url = ((window.location.protocol === "https:") ? "wss://" : "ws://") + window.location.host + window.location.pathname + "/" + tmp_ws_url;
  }
}

export const WS_URL = tmp_ws_url;

export const WALLET_HISTORY_COUNT = 10;

export const DECIMAL_PLACES = 2;

export const GENESIS_BLOCK = [
  '000000a0f82cfee5431e03b071364970861ffa1b0633f73ca7f462987ec34195'
]

export const GENESIS_TX = [
  '000000831cff82fa730cbdf8640fae6c130aab1681336e2f8574e314a5533849',
  '0000001df6f77892cd562a2d7829bc17d0130546edfc6a81e0a431af4b8aa51e'
]

export const GAP_LIMIT = 20;

export const HATHOR_TOKEN_UID = '00';

export const HATHOR_TOKEN_INDEX = 0;

export const VERSION = '0.2.0-beta';

export const MIN_API_VERSION = '0.11.0-beta';

// If we should forbid to generate a quantity of
// unused addresses more than the GAP_LIMIT
export const LIMIT_ADDRESS_GENERATION = true;

export const HATHOR_BIP44_CODE = 280;

export const DEFAULT_SERVERS = [
  'https://node2.testnet.hathor.network/api/',
  'https://node3.testnet.hathor.network/api/',
  'https://node17.testnet.hathor.network/api/',
  'http://localhost:8080/',
];

export const DEFAULT_SERVER = DEFAULT_SERVERS[0];

// FIXME tx version should not be hardcoded
export const DEFAULT_TX_VERSION  = 1;

// Max value (inclusive) before having to use 8 bytes: 2147483648 ~= 2.14748e+09
export const MAX_OUTPUT_VALUE_32 = 2 ** 31 - 1

// Max level of the graph generated by the full node in the transaction detail screen
export const MAX_GRAPH_LEVEL = 1

// How many words will be used to validate the backup
export const WORDS_VALIDATION = 6

// Entropy for the new HD wallet words
export const HD_WALLET_ENTROPY = 256

// Network to generate addresses ('mainnet' or 'testnet')
export const NETWORK = process.env.HATHOR_WALLET_NETWORK || 'mainnet';

// Message to be written when user wants to reset all wallet data
export const CONFIRM_RESET_MESSAGE = 'I want to reset my wallet';

// Password regex pattern for validation
// - The string must contain at least 1 lowercase alphabetical character
// - The string must contain at least 1 uppercase alphabetical character
// - The string must contain at least 1 numeric character
// - The string must contain at least one special character (!@#$%^&)
// - The string must be eight characters or longer
export const PASSWORD_PATTERN = "(?=^.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$"
