import './causes.css'

export const Causes = (props) => {

    const { causes, title} = props;
    const causesItem = causes.map((item) =>
        <div>
            <img src={item.image} alt={item.alternativeText} />
            <p>{item.text}</p>
        </div>)

    return (
        <div class="container causes">
            <h2>{title}</h2>
            <div className="flex-causes">
                {causesItem}
            </div>
        </div>
    );
}

export default Causes;