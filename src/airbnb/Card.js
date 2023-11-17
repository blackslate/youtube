

export default function Card() {

    const nums= [1,2,3,4,5];

    return(
        <>
    {nums.map((num, index)=>
    <div style={{color:'white',  }} key={index}>this is a multiply{num * num}</div>
    )}
        </>
    );
}