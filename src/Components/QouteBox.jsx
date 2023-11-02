import React from 'react'
import {BiSolidQuoteAltLeft, BiSolidQuoteAltRight} from 'react-icons/bi';
import 'src/styles/qoutebox.scss'
const QouteBox = () => {
  return (

  <div className='parent'>
    
    <div class="firstdiv">
     <BiSolidQuoteAltLeft color='white'></BiSolidQuoteAltLeft>
      <p>With great power comes great electricity bill</p>
      <BiSolidQuoteAltRight color='white'></BiSolidQuoteAltRight>
    </div><div class="seconddiv">
        <p> {'>-'} Dr. Who</p>
      </div></div>

  )
}

export default QouteBox