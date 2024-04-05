
function Login({email,password}) {
    
    const [emaillogin,setEmaillogin] = React.useState('');
    const [passwordlogin,setPasswordlogin] = React.useState('');
    const [status,setStatus] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field,label) {
        if (!field && field.length === 0){
            setStatus('Please provide ' + label);
            setTimeout(()=> setStatus(''),3000);  //delaying displaying status
            return false;
        }
        let emilMatch = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if(!emilMatch.test(emaillogin)){
            setStatus('you have entered invalid email');
            setTimeout(()=> setStatus(''),3000); 
            return
        }
        if(passwordlogin.length<8 && passwordlogin.length >0){
            console.log(emaillogin,passwordlogin);
            setStatus('Password must have at least 8 characters');
            setTimeout(()=> setStatus(''),3000); 
            return false;
           }
         
        return true;
    }
    function handleCreate() {
        console.log(emaillogin,passwordlogin);
        if (!validate(emaillogin, 'email')) return;
        if (!validate(passwordlogin, 'password')) return;
        
        window.location.href = "/";
        //ctx.users.push({email,password,balance:100});
    }
    return (
        <Card 
            bgcolor  ="info"
            txtcolor ="black"
            header   ="Login"
            status   ={status}
            title    ="Welcome to Online Bank Services"
            text     ={(<div><img src="bank2.png" className="img-fluid" alt="Responsive image" 
                       style={{width: "130px", height:"130px"}} />
                       </div>)} 
            body     ={<>
                        Email<br/>
                        <input type="input" className="form-control" id="email" placeholder="Enter email" value={emaillogin}
                        onChange={e=>setEmaillogin(e.currentTarget.value)}></input><br/>
                        Password<br/>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" value={passwordlogin}
                        onChange={e=>setPasswordlogin(e.currentTarget.value)}></input><br/>
                        <button type="submit" className="btn btn-info" onClick={handleCreate}>Login</button>
                     </>}   
        />
    )
}