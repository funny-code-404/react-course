import Blocks from "./Blocks/Blocks";
import Head from "./Head/Head";
import c from "./Main.module.scss";
import Text from "./Text/Text";

const Main = (props) => {
  return (
    <div className={c.main}>
      <Head />
      <Text />
      <Blocks />
    </div>
  );
};

export default Main;
