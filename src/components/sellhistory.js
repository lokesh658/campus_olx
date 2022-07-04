
import Additemlist from './selling_items/aditemlist';
import {Aditem} from './selling_items/aditems';

/*import a from './images/background.jpg'
import b from './images/bck.jpg'
import c from './images/bg.jpg'
import d from './images/ckg.jpg'*/
import './sellhistory.css'

export const Sellhistory = () => {
    return(
          <Additemlist aditem={Aditem} />
    )
}