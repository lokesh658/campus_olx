
import a from './images/background.jpg'
import b from './images/bck.jpg'
import c from './images/bg.jpg'
import d from './images/ckg.jpg'
import './buyhistory.css'

export const Buyhistory = () => {
    return(
        <div class="container-b">
          <img alt="back" src={a}/>
            <img alt="bck" src={b}/>
            <img alt="bg" src={c}/>
            <img alt="ckg" src={d}/>
        </div>
    )
}