import { initialInfoState } from "../ducks/info";
import { initialCheckinState } from "../ducks/checkin";
import { initialLoginState } from "../ducks/login";
import { initialAccountDeletingState } from "../ducks/accountDeleting";

export const initialState = {
  info: initialInfoState,
  checkin: initialCheckinState,
  login: initialLoginState,
  accountDeleting: initialAccountDeletingState,
};
