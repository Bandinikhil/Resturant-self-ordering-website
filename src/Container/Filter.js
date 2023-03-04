import React from 'react'
import {connect} from 'react-redux'
import { setfilter,resetfilter } from '../Action';


const Filter = ({filter_name, setfilter,resetfilter}) => {
    const prod = ["All items", "Rice Items", "Cold Drinks", "Pizza", "Hot Drinks"];
   
  return (
    <div>
       <center className='mt-3'>
        <span className='h4'>Filter : </span> &nbsp; &nbsp;
        <select name='filter'  className="p-1" onChange={(e)=> setfilter(e.target.value)}>
            {prod.map((item,index)=> (
                <option value={item} key={index}>{item}</option>
            ))}
        </select>
        </center>
    </div>
  )
}

const mapStateToProps = state => ({
  filter_name:state.filterreducer.filter_name
})

export default connect(mapStateToProps,{setfilter,resetfilter})(Filter)