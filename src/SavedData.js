import './SavedData.css'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const SavedData = ({user, setUser, setUserDetails, setUpdate, setIndex}) =>{

    
    function handleDelete(index){
        const data = user.filter((value)=>{
            return value.phone !==  user[index].phone
        })
        setUser(data);
        localStorage.setItem("user-storage",JSON.stringify(data))
    }
    
    function handleUpdate(value,index){
        setUserDetails(value);
        setUpdate(true);
        setIndex(index)
    }
    
    return (
        <>
        <div className='heading'>
            <h2>Saved Data</h2>
        </div>
        <div className="table">
            <table>
                <thead className="table-heading">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {user.map((value,index)=> <tr key={index}>
                       <td className='table-text'>{value.name}</td> 
                       <td className='table-text'>{value.phone}</td>
                       <td className='table-text'>{value.email}</td>
                       <td onClick={()=>handleDelete(index)}><MdDeleteForever size="1.6rem" cursor="pointer"/></td>
                       <td onClick={()=>handleUpdate(value,index)}><FaEdit  size="1.3rem" cursor="pointer" /></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        </>
    );

}

export default SavedData;