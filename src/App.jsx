import "./App.css";
import Logo from "./assets/logo.svg";
import Avatar from "./assets/avatar.svg";

function App() {
  return (
    <>
      <div className="main-wrapper">
        <aside className="sidenav">
          <div className="logo-wrapper">
            <img src={Logo} alt="Logo" />
          </div>
          <nav>
            <ul className="nav-links">
              <li className="nav-item">
                <a href="#">
                  <ion-icon name="home-outline"></ion-icon>
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <ion-icon name="pricetags-outline"></ion-icon>
                  <span>Unregistered Sales</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <ion-icon name="receipt-outline"></ion-icon>
                  <span>Sales</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <ion-icon name="podium-outline"></ion-icon>
                  <span>Stats</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="#">
                  <ion-icon name="ticket-outline"></ion-icon>
                  <span>Coupons</span>
                </a>
              </li>

              <li className="nav-item nav-item-dropdown">
                <div>
                  <span>
                    <ion-icon name="newspaper-outline"></ion-icon>
                    <span>Fidelity Cards</span>
                  </span>
                  <ion-icon
                    name="chevron-down-outline"
                    className="arrow"
                  ></ion-icon>
                </div>
              </li>

              <li className="nav-item nav-item-dropdown open">
                <div>
                  <span>
                    <ion-icon name="people-outline"></ion-icon>
                    <span>Customers</span>
                  </span>
                  <ion-icon
                    name="chevron-up-outline"
                    className="arrow"
                  ></ion-icon>
                </div>
                <ul className="submenu">
                  <li>
                    <a href="#">Create</a>
                  </li>
                  <li>
                    <a href="#">View All</a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#">
                  <ion-icon name="settings-outline"></ion-icon>
                  <span>Settings</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="#">
                  <ion-icon name="power-outline"></ion-icon>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="content-wrapper">
          <header className="navbar">
            <div className="menu-wrapper">
              <button className="btn-menu">
                <ion-icon name="menu-sharp"></ion-icon>
              </button>
            </div>

            <div className="profile-info">
              <div className="avatar-wrapper">
                <img src={Avatar} alt="Profile avatar" />
              </div>
              <div>
                <p className="store-name">Store ABCD</p>
                <span className="owner-name">John Doe</span>
              </div>
              <span>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
            </div>
          </header>
          <div className="main-content">
            <div className="cards-wrapper">
              <div className="card">
                <h3>11K</h3>
                <p>Metric 1</p>
                <span>description metric 1</span>
              </div>
              <div className="card">
                <h3>11K</h3>
                <p>Metric 1</p>
                <span>description metric 1</span>
              </div>
              <div className="card">
                <h3>11K</h3>
                <p>Metric 1</p>
                <span>description metric 1</span>
              </div>
            </div>
            <div className="charts-wrapper">
              <div className="chart-1">chart 1</div>
              <div className="chart-2">chart 2</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
