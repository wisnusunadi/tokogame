import Image from "next/image"
import Menu from "./Menu"
export default function Navbar() {
    return (
        <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Image src="/icon/logo.svg" width={60} height={60} alt={"icon"}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                        <Menu title='Home' active  />
                        <Menu title='Games' href="/games" />
                        <Menu title='Rewards'/>
                        <Menu title='Discover'/>
                        <Menu title='Global Rank'/>
                       
                  
                        <li className="nav-item my-auto">
                            <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                                href="./src/sign-in.html" role="button">Sign
                                In</a>
                        </li>
                        <li className="nav-item my-auto dropdown d-flex">
                            <div className="vertical-line d-lg-block d-none"></div>
                            <div>
                                <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="/img/avatar-1.png" className="rounded-circle" width="40" height="40"
                                        alt=""/>
                                </a>

                                <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item text-lg color-palette-2" href="#">My Profile</a></li>
                                    <li><a className="dropdown-item text-lg color-palette-2" href="#">Wallet</a></li>
                                    <li><a className="dropdown-item text-lg color-palette-2" href="#">Account Settings</a>
                                    </li>
                                    <li><a className="dropdown-item text-lg color-palette-2" href="#">Log Out</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
      )
}
