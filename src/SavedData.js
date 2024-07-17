import './SavedData.css'

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
        <h2>Saved Data</h2>
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
                      <td>{value.name}</td> 
                       <td>{value.phone}</td>
                       <td>{value.email}</td>
                       <td className="delete-button" onClick={()=>handleDelete(index)}>Del</td>
                       <td className="edit-button" onClick={()=>handleUpdate(value,index)}>Edit</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        </>
    );

}

export default SavedData;