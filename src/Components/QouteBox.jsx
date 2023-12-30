import '../styles/qoutebox.scss'
import {BiSolidQuoteAltLeft, BiSolidQuoteAltRight} from 'react-icons/bi';

const QouteBox = () => {
  return (

  <div className='parent'>
    
    <div className="firstdiv">
     <BiSolidQuoteAltLeft color='white'></BiSolidQuoteAltLeft>
      <p>With great power comes great electricity bill</p>
      <BiSolidQuoteAltRight color='white'></BiSolidQuoteAltRight>
    </div><div className="seconddiv">
        <p> {'>-'} Dr. Who</p>
      </div></div>

  )
}

export default QouteBox