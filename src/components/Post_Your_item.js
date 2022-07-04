import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect,useContext} from 'react'
import App_Header from './App_Header'
import { ItemContext } from '../Context'

function Post_Your_item() {
  const [item_state,setitem_state]=useContext(ItemContext)
  const navigate=useNavigate()
  const initial_value={brand:'',title:'',description:'',price:''}
  const [form_value, setform_value] = useState(initial_value)
  const [form_error, setform_error] = useState({})
  const [issubmit, setissubmit] = useState(false)
  const handleChange=(e)=>{
    const {name,value}=e.target
    setform_value({...form_value,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setissubmit(true)
    setform_error(validation(form_value))
  }
  
  useEffect(() => {
    if((Object.keys(form_error).length === 0) & (issubmit)){
      navigate('/user')
      setitem_state([...item_state,{['id']:Object.keys(item_state).length,form_value}])
    }
  }, [form_error])
  
  const validation =(values)=>{
    const errors={}
    if(!values.title){
      errors.title ="Add a title to post your item"
    }
    if(!values.description){
      errors.description="Add Description to post your item "
    }
    if(!values.price){
      errors.price="Add price to post your item"
    }
    return errors
  }
  return (
    <div className='Post_your_item'>
        <App_Header/>
        <h1 style={{textAlign:'center',fontSize:'24px',margin:'10px 0 0 0'}}>POST YOUR ADD</h1>
        
        <div className="sell_items_wrapper" style={{display:'box',width:'80%',margin:'100px auto',border: '#757575 solid 0.25rem',borderRadius:'5px'}}>
        <div className="category_choose"style={{display:'box',borderBottom: '#757575 solid 0.25rem',padding:'16px'}}>
        <h2 style={{float:'left',paddingRight:'16px'}}>CHOOSE A CATEGORY</h2>
        <select name="category" id="category">
          <option value="Books">Books</option>
          <option value="Cycles">Cycles</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Sports">Sports</option>
        </select>  
        </div>
        <div className="sell_item_form">
          <form id='post_item'>
            <div className="form_item_div">Brand</div>
            <div className="input_form_item_div">
            <input
             type="text"
             className='input_item_brand'
             autoFocus
             placeholder='brand name'
             name='brand'
             value={form_value.brand}
             onChange={handleChange}
             />
            </div>
            <div className="form_item_div">Title*</div>
            <div className="input_form_item_div">
            <input
             type="text"
             className='input_item_title'
             autoFocus
             placeholder='mention the key feature of your product'
             name='title'
             value={form_value.title}
             onChange={handleChange}
             />
            </div>
            <div className="form_error_message">{form_error.title}</div>
            <div className="form_item_div">Description*</div>
            <div className="input_form_item_div">
            <textarea
             type="text"
             className='input_item_description'
             autoFocus
             placeholder='Describe your product'
             name='description'
             value={form_value.description}
             onChange={handleChange}
             />
            </div>
            <div className="form_error_message">{form_error.description}</div>
            <div className="form_item_div">Set A Price*</div>
            <div className="input_form_item_div">
            <input
             type="text"
             className='input_item_price'
             autoFocus
             placeholder='Add your price'
             name='price'
             value={form_value.price}
             onChange={handleChange}
             />
             <div className="form_item_div">Brand</div>
            <div className="input_form_item_div">
            <input
             type="text"
             className='input_item_brand'
             autoFocus
             placeholder='brand name'
             name='brand'
             value={form_value.brand}
             onChange={handleChange}
             />
            </div><div className="form_item_div">Images</div>
            <div className="input_form_item_div">
            <input
             type="file"
             multiple
             maxLength={3}
             className='input_item_image'
             autoFocus
             />
            </div>
            </div>
            <div className="form_error_message">{form_error.price}</div>
            <button type='submit' className='post_item_submit'>POST</button>
          </form>
        </div>
        </div>
    </div>
  )
}

export default Post_Your_item
