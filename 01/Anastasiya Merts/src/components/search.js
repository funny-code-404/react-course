import FormSearch from './Forms/formSearch'
import './search.css'

export const SearchArea = () => {
    return (
        <div className="container search">
            <div>
                <h1>Исследуйте мир вместе с нами</h1>
                <p>Брось себе вызов. Отправься в путешествия в дикие уголки природы.</p>
            </div>
            <FormSearch />
        </div>
    );
}
  export default SearchArea;