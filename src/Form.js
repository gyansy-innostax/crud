import './Form.css';

const Form = ({user, setUser, userDetails, setUserDetails, update, setUpdate, index}) => {

  const handleInput = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    setUserDetails({ ...userDetails, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(update){
      const id = userDetails.phone;
      console.log(id)
      console.log(index)
      user[index] = userDetails;
      console.log(userDetails)
      setUpdate(false)
      localStorage.setItem("user-storage",JSON.stringify(user))
    }
    else {
      setUser((previous) => {
        return [...previous
          , userDetails]
        })
        localStorage.setItem("user-storage",JSON.stringify([...user,userDetails]))
      }
      setUserDetails({name:"",phone:"",email:""})
  } 

  return (
      <>
        <form className='forms'>
          <label className='label'>Name :
            <input
              type="text"
              name="name"
              placeholder='Enter your full name'
              value={userDetails.name}
              onChange={handleInput}
              />
            </label>
          <label className='label'>Phone :
            <input
              type="number"
              name="phone"
              placeholder='Phone Number'
              value={userDetails.phone}
              onChange={handleInput}
              />
            </label>
          <label className='label'>Email :
            <input
              type="email"
              name="email"
              placeholder='Emaild Id'
              value={userDetails.email}
              onChange={handleInput}
              />
            </label>
          <button className='submit-bttn' onClick={handleSubmit} >{update ? "Update" : "Submit"}</button>
        </form>
    </>
  );
}

export default Form;