import React from 'react'
import styled from "styled-components"
import { useDispatch } from 'react-redux'
import { deleteallUser } from '../store/Slices/Userslices';

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteall =()=>{
    // console.log("Delete")
    dispatch(deleteallUser())
  }
  return (
<Wrapper>
<button className='btn clear-btn' onClick={deleteall}>Delete</button>
</Wrapper>

    )
}
const Wrapper = styled.section`
.clear-btn{
  margin-top:2rem;
  font-size:2rem;
  text-transform:capitalize;
  background-color:#db338a;
}`
export default DeleteAllUser