import Ricerca from "./Ricerca";
import "./NavBar.css";

//componente navbar, va subito direttamente in App.js
function NavBar(props) {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg 
        myBar "
      >
        <a class="navbar-brand" href="#">
          App contatti
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" onClick={props.onCliccatoHome}>
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onClick={props.onCliccato_InputContatto}
              >
                aggiungi contatto
              </a>
            </li>
          </ul>
        </div>
        <Ricerca onTrovato={props.onSaveTrovato}></Ricerca>
      </nav>
    </div>
  );
}

export default NavBar;
{
  /*  <div class="collapse navbar-collapse" id="navbarSupportedContent"> */
}
