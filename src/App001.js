
import './App.css';




export default  function App() {
  return (
    <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
     <Props002A 
          img ={cat001}
          name='Garen'
          email='garen@example.com'
          phone='001001'
          color='red'
          />
     <Props002A
      img ={cat002}
      name='Nara'
      email='nara@example.com'
      phone='002002'
      color='blue'
     />
     <Props002A
      img ={cat003}
      name='Ani'
      email='ani@example.com'
      phone='003003'
      color='green'
     />
     <Props002A
     
     img ={cat004}
     name='Agati'
     email='agati@example.com'
     phone='004004'
     color='white'/>
    </div>
  );
}

