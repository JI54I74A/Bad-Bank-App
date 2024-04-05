
const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;

const UserContext = React.createContext(null);

function Card(props) {
    function classes() {
        const bg     = props.bgcolor ? ' bg-' + props.bgcolor : ' ' ;
        const txt    = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        const cWidth = props.cardWidth ? ' w-' + props.cardWidth: ' ';

        return 'card mb-3' + bg + txt + cWidth;
    }
    return (
        <div className="container">
            <div className="row"> 
                <div className="col-lg-12" style={{justifyContent: "center",display: "flex"}}>  
                    <div className={classes()} style={{marginTop:"140px",textAlign: "center",minWidth: "18rem"}}>
                        <div className= "card-header" style={{fontWeight: "500",color:"rgb(243 206 94)",fontSize: "18px",fontFamily:"Rubik"}}>{props.header}</div>
                            <div className="card-body card-body-style" style={{background: "white"}}>
                                {props.title && (<h5 className="card-tile card-tile-style">{props.title}</h5>)}
                                {props.text && (<div className="card-text">{props.text}</div>)}
                                {props.body}
                                {props.status && (<div id="createStatus" style={{fontWeight: "500",fontSize: "15px",paddingTop: "10px",color: "#f11558"}}>{props.status}</div>)}
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}
