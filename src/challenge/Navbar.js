import logo from '../img/logo192.png';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-blue-400">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="logo" className="h-8" />
        <h3 className="text-2xl font-semibold text-blue-400">ReactFacts</h3>
      </div>
      <div>
        <h4 className='text-white' >React Course - Project 1</h4>
      </div>
    </nav>
  );
}
