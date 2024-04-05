
function NavBar() {
   
      $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   

        $('.nav-link').click(function(e) {
            //e.preventDefault();
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
          });
      });
       
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light" style={{backgroundColor: "#0C243C",padding: "0.8rem 1rem"}}>
                <div className="container-fluid">
                    <a className="navbar-brand nav-link mb-0 nav-link-style tooltip-style" href="#" aria-current="page" 
                    data-toggle="tooltip" title="Bank services home page" style={{fontSize: "19px"}}>ONLINE BANKING</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link nav-link-style" id="register" href="#/createaccount/"  
                            data-toggle="tooltip" title="Create account for new user">Create Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-style" id="login" href="#/login/"  
                            data-toggle="tooltip" title="Login to existing user account">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-style" id="deposit" href="#/deposit/"  
                            data-toggle="tooltip" title="Deposit money into your account">Deposit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-style" id="withdraw" href="#/withdraw/"  
                            data-toggle="tooltip" title="Withdraw money from your account">Withdraw</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-style" id="balance" href="#/balance/"  
                            data-toggle="tooltip" title="Check your available balance">Balance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-style" id="alldata" href="#/alldata/"  
                            data-toggle="tooltip" title="Transaction details">All Data</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
