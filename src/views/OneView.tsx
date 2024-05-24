import Navbar from "../components/Navbar.tsx";


function OneView() {


    return (
        <div className=' flex w-4/5 h-[811px] custom-background flex-col items-center '>
            <Navbar/>
            <div className='w-3/4 mt-20'>
               <div className='flex flex-col w-2/4 gap-2'>
                   <small className='text-[14px]' >
                       A place where
                   </small>
                   <span className='text-[64px] font-bold'>
                       A creative agency for redemptive brands
                   </span>
                   <small className='text-[14px]'>
                       Anteelo is a leading strategic design firm that builds powerful digital solutions for startups and enterprises.
                   </small>
                   <a href='/' className='underline hover:text-yellow-300 text-[16px]'>
                         Get in touch
                   </a>
               </div> </div>
        </div>
    )
}

export default OneView
