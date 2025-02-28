import logo from './assets/popcorn-svgrepo-com.svg';

export function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="" />
        <h1>usePopcorn</h1>
      </div>


      <input type="text" placeholder='Search movies' />
      <p>Found x results</p>
    </div>
  );
}
