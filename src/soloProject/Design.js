

export default function Design(props) {
    console.log(props);
    
    return(
        <>
       
        <section>
       
        <img src={props.imageURL} alt='logo' width='300px'/>
            <article>
                <div>
                {props.location &&  <p>{props.location} </p> }
                {props.googleMapsLink && <a href={props.googleMapsLink} >hi</a>  }
                  
                </div>
                {props.title &&  <h2>{props.title} </h2> }
                {props.startDate &&  <h4>{props.startDate}{props.endDate} </h4> }
                {props.description &&  <p>{props.description} </p> }

                

            </article>
            <br></br>
        </section>

        
        </>
    );
}