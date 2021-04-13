import './styleMidblock.css';
import Slogan from './Slogan/slogan'
import Menu from './../Header/Menu/menu'
import DataSlogan from  './DataSlogan/dataSlogan'

const Midblock = () => {
   return (
   <div className ='midblock'>
      <Slogan className='slogan' message='Choose you favorit travel!'/>
      <div className='midBlockMenu'>
            <Menu name='Dreams with Sea' className={`sea`} datasea={`“We need the tonic of wildness...At the same time that we are earnest to explore and learn all things, we require that all things be mysterious and unexplorable, that land and sea be indefinitely wild, unsurveyed and unfathomed by us because unfathomable. We can never have enough of nature.”`}/>
            <Menu name='All about High Peak' className={`peak`} datapeak={`"Climb the mountains and get their good tidings. Nature’s peace will flow into you as sunshine flows into trees. The winds will blow their own freshness into you, and the storms their energy, while cares will drop off like autumn leaves."`}/>
            <Menu name='Enjoy the Forest' className={`forest`} dataforest={`“This life is yours. Take the power to choose what you want to do and do it well. Take the power to love what you want in life and love it honestly. Take the power to walk in the forest and be a part of nature. Take the power to control your own life. No one else can do it for you. Take the power to make your life happy.”`}/>
      </div>
   </div>   
   )
}
export default Midblock