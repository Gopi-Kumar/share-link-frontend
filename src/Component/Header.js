const Header = (props)=>{
    console.log(props.percent)
    console.log("Hell")
    return (
        <div className="header">
            <div className="logo">
                <h1>shareLink</h1>
            </div>
            <div className="navbar">
                <li>Nav Item1</li>
                <li>Nav Item2</li>
            </div>
        </div>
    )
}
export default Header;