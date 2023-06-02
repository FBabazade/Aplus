import React from 'react'
import XususiTeklif from './Xususiteklif/XususiTeklif'
import Aksiyalar from './Aksiyalar/Aksiyalar'
import Uicobonus from './UmicoBonus/Uicobonus'
import IradveTeklifler from './Irad ve Teklif/IradveTeklifler'
import Deyer from './Deyerler/Deyer'
import SualCavab from './SualCavab/SualCavab'
import Footer from '../Footer/Footer'

function Main() {
  return (
    <div><XususiTeklif/>
    <Aksiyalar/>
    <Uicobonus/>
    <IradveTeklifler/>
    <Deyer/>
    <SualCavab/>
    <Footer/></div>
  )
}

export default Main