import Product from "../components/Product.tsx";


function TwoView() {


    return (
        <div className='flex w-4/5 h-[811px] bg-white flex-col text-black items-center '>
           <div className='mt-24 w-3/4 flex flex-col justify-start '>
            <div className='font-extrabold green-text flex flex-row flex-grow justify-start text-[36px] '>
                Deation & Evaluation - Best Way <br/> to Kick off Your Product Idea
            </div>
               <div className='flex flex-row justify-center mt-16 gap-4  '>
                   <div className='flex flex-row justify-center w-5/6 gap-8'>
                       <Product name='Product Design '
                                desc='A five-day workshop that will help you answer crucial business questions'
                                btn='  Read More'/>
                       <Product name='Scoping Session'
                                desc='A workshop aimed at shaping your business idea, answering questions regarding project planning'
                                btn='  Read More'/>
                       <Product name='UX Review'
                                desc='An evaluation which will help you radically improve your product.'
                                btn='  Read More'/>
                       <Product name='Code Review'
                                desc='Do you know what one of the key secrets of success
is what makes people successful in business'
                                btn='  Read More'/></div>
               </div>
           </div>
        </div>
    )
}

export default TwoView
