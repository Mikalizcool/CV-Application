import logo from '../assets/black-lagoon-logo.png'

function Header() {
    return (
        <>
            <div className="flex justify-center">
                <img src={logo}></img>
            </div>
        </>
    )
}
export default Header;