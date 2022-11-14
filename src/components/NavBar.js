import Cart from'../Cart'
const navBar = () => {
    return (
<header>
 <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand bold" href="#">90's Videos</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Grunge</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Metal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Punk</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Alternative</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Pop</a>
        </li>
      </ul>
      <span class="navbar-text">
      <Cart />
      </span>
    </div>
  </div>
</nav>
</header>

    )
}
export default navBar;

