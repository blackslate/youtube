
export default function Personal(props) {
    console.log(props);
    
    return(
        <>
        <div>
            {props.name && <h2>Name: {props.name} </h2>}
            {props.age && <h2>Age: {props.age} </h2>}
            {props.email && <h2>Email: {props.email} </h2>}
            <br ></br>
        </div>
        
        </>

    );
}