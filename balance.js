
function Balance({name,balance}) {

    const ctx = React.useContext(UserContext)
    {JSON.stringify(ctx)}
    console.log(ctx.users)
   // console.log(ctx.users[0].name)
    return (<>
        <Card 
        bgcolor  ="info"
        txtcolor ="black"
        cardWidth="50"
        header   ="Balance"
        status   ={status}
        title    ="Your account balance"
        text     ={(<div><img src="bank2.png" className="img-fluid" alt="Responsive image" 
                   style={{width: "130px", height:"130px"}} />
                   </div>)} 
        body     ={<div className="container" style={{margin: "40px 0px"}}>
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
                    </div>
                  </div>}   
    />
    </>
    )
}