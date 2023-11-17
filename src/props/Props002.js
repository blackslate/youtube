import cat001 from '../images/001.jpg';
import cat002 from '../images/002.jpg';
import cat003 from '../images/003.jpg';
import cat004 from '../images/004.jpg';

export default function Props002() {
    
    return(
        <>
        <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}} >
        <div>
            <img src={cat001} alt='cat' width='200px' />
            <h1>John</h1>
            <h2> 'john@example.com'</h2>
            <p>'555-123-4567'</p>
        </div>
        <div>
            <img src={cat002} alt='cat' width='200px' />
            <h1>Alice</h1>
            <h2> 'alice@example.com'</h2>
            <p>'555-987-6543'</p>
        </div>
        <div>
            <img src={cat003} alt='cat' width='200px' />
            <h1>John</h1>
            <h2> 'bob@example.com'</h2>
            <p>'555-567-8901'</p>
        </div>
        <div>
            <img src={cat004} alt='cat' width='200px' />
            <h1>Sarah</h1>
            <h2> 'sarah@example.com'</h2>
            <p>'555-234-5678'</p>
        </div>
        </div>
        
        </>
    );
};