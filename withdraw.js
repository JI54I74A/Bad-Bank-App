
function Withdraw({balance}) {

    const [withdraw,setWithdraw]= React.useState('');
    const [status,setStatus] = React.useState('');
    const ctx = React.useContext(UserContext);

    function handleWithdraw() {
        console.log(withdraw);

        if(withdraw <0) {
            alert('Error: please enter a positive amount');
            setStatus('Amount to be withdrawn can not be negative')
            setTimeout(()=> setStatus(''),4000); 
            return
        }
        if(withdraw > ctx.users[0].balance){
            alert('Error: Insufficient Balance');
            setStatus("Amount to be withdrawn should not be greater than current balance");
            setTimeout(()=> setStatus(''),4000); 
            return;
        }
        ctx.users.map((user,i)=> {
            if(i===0){
              user.balance =   JSON.parse(user.balance) - JSON.parse(withdraw);
              setStatus("Withdrawed $" + withdraw);
              setTimeout(()=> setStatus(''),3000); 
              console.log(ctx.users[0].balance);
              setWithdraw('');                     
            }
          }
          )
         /* 
        ctx.users[0].balance = JSON.parse(ctx.users[0].balance) - JSON.parse(withdraw);
        setStatus("Withdrawed $" + withdraw);
        setTimeout(()=> setStatus(''),3000); 
        console.log(ctx.users[0].balance);
        setWithdraw('');*/
    }

    return (
        <>
        <Card 
            bgcolor  ="info"
            txtcolor ="black"
            cardWidth="50"
            header   ="Withdraw"
            status   ={status}
            title    ="Withdraw money from your account"
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
                                <h6>Withdraw Amount</h6>
                                <input type="number" className="form-control" id="withdraw" placeholder="Withdraw Amount" value={withdraw}
                                onChange={e=>setWithdraw(e.currentTarget.value)}></input><br/>
                                <button type="submit" className="btn btn-info" onClick={handleWithdraw} disabled = {!withdraw}>Withdraw</button>
                            </div>
                         </div>
                     </div>}   
        />
        </>
    )
}