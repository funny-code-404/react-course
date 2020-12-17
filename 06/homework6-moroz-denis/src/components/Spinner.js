import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import '../styles/spinner.css'

function Spinner() {
    return <div className = 'spinner'><Loader type='Oval' color='#00BFFF' height={100} width={100}/></div>
}

export default Spinner;