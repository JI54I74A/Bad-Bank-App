
function Home() {
    const ctx = React.useContext(UserContext);
    return (
       <Card 
            bgcolor="info"
            txtcolor="black"
            cardWidth="50"
            header="Chase your dream with us!"
            title="Welcome to Online Bank Services"
            text="You can use this bank"
            body={(<div  style={{margin: "30px 0px"}}>                    
                        <img src="bank2.png" className="img-fluid" alt="Responsive image" 
                        style={{width: "130px", height:"130px"}} />                    
                    </div>)}    
       />
    )
}
//<button onClick={e=>ctx.users.pop()}>Delete Account</button>