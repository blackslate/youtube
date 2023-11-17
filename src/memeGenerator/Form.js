
export default function Form() {
    function handleClick() {
        console.log('i was clicked!');
        event.preventDefault();
        
    }
    return(
        <>
        <main>
        <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <div>
            <input
    type="text"
    placeholder="Top text"
    className="w-60 border p-2 rounded m-4"
  />
  <input
    type="text"
    placeholder="Bottom text"
    className="w-60 border p-2 rounded"
  />
            </div>
  
  <div>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg' alt='paris' width='100'  />
  <button 
  onClick={handleClick}
  
    className="m-4 w-80 md:w-auto bg-purple-600 text-white p-2 rounded mt-2 md:mt-0"
     >
    Get a new Meme image
  </button>
  </div>
 
</form>

        </main>
       
        </>
    );
}