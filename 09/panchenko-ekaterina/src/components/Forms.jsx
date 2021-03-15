import { Form } from "./Form";
import { withCheckIn } from "./CheckIn";
import { withLogin } from "./Login";
import { withAccountDeleting } from "./AccountDeleting";

export const CheckIn = withCheckIn(Form);
export const Login = withLogin(Form);
export const AccountDeleting = withAccountDeleting(Form);
