import './formSearch.css'

export const FormSearch = () => {
    return (
        <div className="search-form">
            <form action="">
                <p>Быстрый поиск тура</p> 
                <input type="search" placeholder="Куда" />
                <div>
                    <input type="text" placeholder="Когда" />
                    <input type="text" placeholder="Продолжительность" />
                </div>
                <select name="" id="" placeholder="Тип тура">
                    <option value="nothing" disabled selected>Тип тура</option>
                </select>
                
                <button>Найти</button>
            </form>
    </div>
    );
  }
  
  export default FormSearch;