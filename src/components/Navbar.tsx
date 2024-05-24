

function Navbar() {


    return (
        <div className='w-full flex justify-center'>

            <nav className='w-3/4 h-12 flex flex-row gap-4 items-center justify-between'>
                <ul>
                    <li className="flex flex-row gap-4 items-center">
                        <img alt='logo' src='/logo.svg'/>
                        <img alt='logo' src='/webovio.svg'/>
                    </li>
                </ul>
                <ul>
                    <li className="flex flex-row gap-4 items-center">
                        <img alt='logo' src='/menuopener.svg'/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
