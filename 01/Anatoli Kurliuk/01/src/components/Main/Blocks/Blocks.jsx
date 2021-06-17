import c from "./Blocks.module.scss";
import Block from "./Block/Block";
import { data } from "./config";



const Blocks = (props) => {
  const blockElement = data.map((b) => (
    <Block id={b.id} header={b.header} text={b.text} />
  ));
  return <div className={c.blocks}>{blockElement}</div>;
};

export default Blocks;
