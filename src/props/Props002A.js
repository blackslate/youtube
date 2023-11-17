


export default function Props002A({img, name, email, phone, color}) {
   
    return(
        <>
        <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}} >
        <div>
            <img src={img} alt='cat' width='200px' />
            <h1>{name} </h1>
            <h2>{email} </h2>
            <p>{phone} </p>
            <p>{color} </p>
        </div>
       
        </div>
        
        </>
    );
};
