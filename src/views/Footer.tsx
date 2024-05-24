

function Footer() {


    return (
        <div className='flex w-4/5 h-[811px] bg-white flex-col  items-center footer-background '>
            <div className='mt-52 w-3/4 flex flex-col justify-center pb-8  border-b-2'>
                <div className='flex gap-24'>
                    <div>
                        <div  className='green-text2'>
                            Phone
                        </div>
                        <div>
                            +32 50 31 28 32
                        </div>

                    </div>
                    <div>
                        <div  className='green-text2'>
                            About
                        </div>
                        <div>
                            491 Merlin Crest Suite 963
                        </div>
                    </div>

                </div>
            </div>
            <hr/>
            <div className='mt-8 w-3/4 flex flex-col justify-center pb-8 border-b-2'>
                <div className='flex gap-24 '>
                    <div>
                        <div className='green-text2'>
                            Phone
                        </div>
                        <div className='text-white'>
                            +32 50 31 28 32
                        </div >

                    </div>
                    <div>
                        <div className='green-text2'>
                            About
                        </div>
                        <div>
                            491 Merlin Crest Suite 963
                        </div>
                    </div>
                    <div>
                        <div className='green-text2'>
                            Phone
                        </div>
                        <div>
                            +32 50 31 28 32
                        </div>

                    </div>
                    <div>
                        <div  className='green-text2'>
                            About
                        </div>
                        <div>
                            491 Merlin Crest Suite 963
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center'>

                <nav className='w-3/4 h-12 flex flex-row gap-4 items-center justify-between'>
                    <ul>
                        <li className="flex flex-row gap-4 items-center">
                            <img alt='logo' src='/logo.svg'/>
                            <img alt='logo' src='/webovio.svg'/>
                        </li>
                    </ul>
                    <ul>
                        <li className="flex flex-row gap-4 items-center text-[14px] green-text2  ">
                            © 2020@webovio. All Rights Reserved.
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Footer
