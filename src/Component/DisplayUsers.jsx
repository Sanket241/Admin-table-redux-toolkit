import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../store/Slices/Userslices"
import styled from "styled-components"
const DisplayUsers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => { //complete state ko access kar skta hu from data folder 
        return state.users;

    })

    const deleteuser=(id)=>{
        dispatch(removeUser(id))

    }
    // console.log(data)
    return <Wrapper>{
        data.map((user,id)=>{
            return <li key={id}>
                {user}
                <button className="btn btn-delete" onClick={()=>deleteuser(id)}>Delete</button>
            </li>        
        })
    }
    </Wrapper>
}
const Wrapper = styled.section`
li{
   width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1rem;
    border-bottom:1px solid #eee;
    &:first-child{
        border-top:1px solid #eee;
    }
    .btn-delete{
        margin-top:2rem;
        font-size:1rem;
        text-transform:capitalize;
        background-color:#db338a;
      }
}
`
export default DisplayUsers
