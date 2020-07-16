import Link from "next/link"
const Navbar = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link href="/"><a className="navbar-brand" >Presline</a></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor03">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link href="/"><a className="nav-link">Company<span className="sr-only">(current)</span></a></Link>
      </li>
      <li className="nav-item">
      <Link href="/catalog"><a className="nav-link">Equipment catalog</a></Link>
      </li>
      <li className="nav-item">
      <Link href="/services"><a className="nav-link">Services</a></Link>
      </li>
      <li className="nav-item">
      <Link href="/contacts"><a className="nav-link">Contacts</a></Link>
      </li>
    </ul>
  </div>
</nav>
)
export default Navbar