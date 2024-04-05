
function CreateAccount() {
    
    const [show,setShow] = React.useState('true');
    const [status,setStatus] = React.useState('');
    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
   
    const ctx = React.useContext(UserContext);
  
    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }
    function validate(field,label) {
        if (!field && field.length === 0){
            setStatus('Please provide ' + label);
            setTimeout(()=> setStatus(''),3000);  //delaying displaying status
            return false;
        }
        let emilMatch = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if(!emilMatch.test(email)){
            setStatus('you have entered invalid email');
            setTimeout(()=> setStatus(''),3000); 
            return
        }
        if(password.length<8 && password.length >0){
            console.log(name,email,password);
            setStatus('Password must have at least 8 characters');
            setTimeout(()=> setStatus(''),3000); 
            return false;
           }
         
        return true;
    }
    function handleCreate() {
        console.log(name,email,password);
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        
        ctx.users.push({name,email,password,balance:0});
        setShow(false);

    }

    return (
        <Card 
        bgcolor="info"
        txtcolor="black"
        header="Create Account"
        status={status}
        title="Get Started"
        text={(<img src="bank2.png" className="img-fluid" alt="Responsive image" 
              style={{width: "130px", height:"130px"}} />)}
        body={show ? (
                    <>
                        Name<br/>
                        <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} 
                        onChange={e=>setName(e.currentTarget.value)}></input><br/>
                        Email<br/>
                        <input type="input" className="form-control" id="email" placeholder="Enter email" value={email}
                        onChange={e=>setEmail(e.currentTarget.value)}></input><br/>
                        Password<br/>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password}
                        onChange={e=>setPassword(e.currentTarget.value)}></input><br/>
                        <button type="submit" className="btn btn-info" onClick={handleCreate} disabled ={!name && !email && !password}>
                        Create Account</button>
                       
                    </>
                ) : (
                    <>  
                        <h6 style={{color:"#f11558", padding: "12px"}}>Successsfully created a new account</h6>                                            
                        <h5 style={{color: "#5b5555",paddingBottom:"15px"}}>Hi {name}, We're so glad you've joined us!</h5>
                        <button type="submit" className="btn btn-info" onClick={clearForm}>Add another account</button>
                    </>
                )}    
   />
    )
    
}
//<handleDeposit balance={balance}></handleDeposit>