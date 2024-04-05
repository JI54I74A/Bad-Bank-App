
function AllData() {

    const ctx = React.useContext(UserContext)
    console.log(ctx.users);

    return (
        <div className="container">
        <Card 
        bgcolor  ="info"
        txtcolor ="black"
        cardWidth="100"
        header   ="Data Summary"
        status   ={status}
        title    ={<div>USER INFORMATIONS</div>}
        body     ={<div className="container" style={{paddingTop: "10px"}}>
                        <div className="row">
                         <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Balance</th>
                              </tr>
                            </thead>
                            <tbody>
                            {ctx.users.map((user,i)=>
                              <tr key={i}>    
                                <td>{i+1}</td>             
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>${user.balance}</td>
                              </tr> )}
                            </tbody>
                          </table>           
                        </div>
                  </div>}   
               />
       
        </div>
    )
}
