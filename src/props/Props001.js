


export default function Props001() {
    const name = 'Garen';
    const lastName = 'Ghazarian';
    const date = new Date();
    const time = date.toLocaleDateString();
    const year = date.getFullYear();
    const hours = date.getHours();

    let timeOfDay
    if (hours < 12) {
        timeOfDay = 'Morning'
    } else if (hours >= 12 && hours <=17 ){
        timeOfDay = 'Afternoon'
    } else{
        timeOfDay = 'Evening'
    }

    return (
        <>
         <h1 style={{color:'white'}}>My name is {name} {lastName}! </h1>
         <p style={{color: 'white', fontSize: 24, marginTop: 36 }}>date: {time} </p>
         <p style={{color: 'white', fontSize: 24, marginTop: 36 }}>Year: {year} </p>
         <p style={{color: 'white', fontSize: 24, marginTop: 36 }}>Good {timeOfDay} </p>

        </>
       
    );
    
}