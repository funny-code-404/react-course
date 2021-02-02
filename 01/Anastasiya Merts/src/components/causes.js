import './causes.css'
// import visa from './images/visa.png'
// import world from './images/world.png'
// import hunter from './images/hunter.png'
// import bbq from './images/bbq.png'

export const Causes = (props) => {

    const causes = props.causes;
    const causesItem = causes.map((item) =>
        <div>
            <img src={item.image} alt={item.alternativeText} />
            <p>{item.text}</p>
        </div>)

    return (
        <div class="container causes">
            <h2>{props.title}</h2>
            <div className="flex-causes">
                {causesItem}
            </div>
        </div>
    );
}

export default Causes;