
export default function Header() {
    return(
        <header className="grid grid-cols-2 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 text-white gap-8 m-4 p-4">
            <div className="flex items-center gap-4 col-span-1">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3827a1155848515.635c080b4b8e1.gif" alt="meme" width="100px" className='rounded-md' />
                <h2 className="text-2xl font-bold">Header Component</h2>
            </div>
                <h4 className=" flex items-center col-span-1 ml-auto text-2xl">React Course - Project 3</h4>
</header>
 
      

      

    );
}