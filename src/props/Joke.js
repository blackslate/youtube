
 export default function Joke(props) {
   return(
    <div style={{color:'white'}}>

{props.setup && <h1 style={{fontSize:'20px'}} >head1: {props.setup} </h1>
}
<p>{props.punchline} </p>

    </div>
    )
 }

