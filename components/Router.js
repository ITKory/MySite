import Link from 'next/link'
function NavBar() {
    return (
   
      <nav className="navMenu">
          <Link href="/">
            <a>Home</a>
          </Link>
         
       
          <Link href="/todolist">
            <a>To Do</a>
          </Link>
         
       
          <Link href="/films">
            <a>Films</a>
          </Link>
          <div className="dot"></div>
    </nav>
     
    )
  }
  
  export default NavBar