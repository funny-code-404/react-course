import "./styles.css";
import React from "react";

class Main extends React.Component {
  render() {
    return (
        <main>
            <div className="container">
                <div className="left-part">
                    <div>
                        <h2>Welcome to Localize</h2>
                        <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают <a href="#">латынь</a>.</p>
                    </div>
                    <div>
                        <h2>Welcome to Localize</h2>
                        <p>Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём.</p>
                    </div>
                    <div>
                        <h2>More filler text</h2>
                        <p>Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.</p>
                    </div>
                </div>
                <aside>
                    <div className="side-column">
                        <h3>News</h3>
                        <p className="column-text">Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э.</p>
                    </div>
                    <div className="side-column">
                        <h3>Some links</h3>
                        <ul className="column-text">
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                        </ul>
                    </div>
                </aside>
                <div className="clearfix"></div>
            </div>
        </main>
    );
  }
}

export default Main;