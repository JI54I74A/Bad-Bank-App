
function Deposit() {

    const [deposit,setDeposit] = React.useState('');
    const [status,setStatus]   = React.useState('');
   
    const ctx = React.useContext(UserContext);
   
    console.log(ctx.users);
    
    function handleDeposit() {

      
     // console.log(user.balance)
         console.log(deposit)
         if(deposit <0) {
            alert('Error: please enter a positive amount');
            setStatus('Deposit amount can not be negative')
            setTimeout(()=> setStatus(''),4000); 
            return
         }
        // const currentBalance = ctx.users[0].balance;
        ctx.users.map((user,i)=> {
          if(i===0){
            user.balance =   JSON.parse(user.balance) +  JSON.parse(deposit);
            setStatus("Successfully Deposited $" + deposit)
            setTimeout(()=> setStatus(''),4000); 
            console.log(ctx.users[0].balance)
            setDeposit('');
            //return user.balance;          
          }
        }
        )
        /* ctx.users[0].balance =   JSON.parse(ctx.users[0].balance) +  JSON.parse(deposit);  // {JSON.stringify(ctx.users)}
         setStatus("Successfully Deposited $" + deposit)
         setTimeout(()=> setStatus(''),4000); 
         console.log(ctx.users[0].balance)
         setDeposit('');*/
    }
    return (
        <>
        <Card 
            bgcolor  ="info"
            txtcolor ="black"
            cardWidth="50"
            header   ="Deposit"
            status   ={status}
            title    ="Deposit money to your account"
            text     ={(<div><img src="bank2.png" className="img-fluid" alt="Responsive image" 
                       style={{width: "130px", height:"130px"}} />
                       </div>)} 
            body     ={<div className="container" style={{marginTop: "40px"}}>
                        <div className="row">
                            <div className="col-lg-12">
                              <div className="col-lg-7" style={{float: "left"}}>
                                <h5 >Balance </h5>       
                              </div>    
                              <div className="col-lg-5" style={{float: "right"}}>              
                                <h5><span style={{borderRadius: "8%",padding: "2px 5px",border: "1px groove #8080802e",background: "#8080802e"}}>
                                ${ctx.users.map((user,i)=> {
                                if(i===0)
                                  return user.balance;
                                  console.log(user.balance);
                                }
                               )}
                                </span></h5>
                                <span style={{fontSize: "12px"}}>current balance</span>
                              </div>   
                            </div>
                            <div  className="col-lg-12" style={{paddingTop: "30px"}}>
                                <h6>Deposit Amount</h6>
                                <input type="number" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit}
                                onChange={e=>setDeposit(e.currentTarget.value)}></input><br/>
                                <button type="submit" className="btn btn-info" onClick={handleDeposit} disabled={!deposit}>Deposit</button>
                            </div>
                        </div>
                      </div>}   
        />
        </>
    )
}

//${ctx.users.map((user,i)=> user.balance)}