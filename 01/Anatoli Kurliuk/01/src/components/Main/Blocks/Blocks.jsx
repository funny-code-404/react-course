import c from "./Blocks.module.scss";
import Block from "./Block/Block";

const data = [
  {
    id: "01",
    header: "HTML и CSS",
    text: " Для того, чтобы сделать сайт, нужно знать много разных веб языков. Языки HTML и CSS предназначены для верстки сайтов.",
  },
  {
    id: "02",
    header: "Bootstrap Framework",
    text: "Bootstrap — это свободный набор инструментов для создания сайтов и веб-приложений.",
  },
  {
    id: "03",
    header: "JavaScript",
    text: "JavaScript применяется к HTML документу, и может обеспечить динамическую интерактивность на веб-сайтах.",
  },
];

const Blocks = (props) => {
  const blockElement = data.map((b) => (
    <Block id={b.id} header={b.header} text={b.text} />
  ));
  return <div className={c.blocks}>{blockElement}</div>;
};

export default Blocks;
