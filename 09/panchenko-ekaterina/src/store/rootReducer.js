import { combineReducers } from "redux";
import { info } from "../ducks/info";
import { checkin } from "../ducks/checkin";
import { login } from "../ducks/login";
import { accountDeleting } from "../ducks/accountDeleting";

export default combineReducers({
  info,
  checkin,
  login,
  accountDeleting,
});
