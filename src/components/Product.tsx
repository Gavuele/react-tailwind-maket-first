const Product = (props) => {
    return (
        <div className="flex flex-col gap-4 justify-between">
            <span className='text-[24px] green-text font-extrabold'>
                  {props.name}
            </span>
            <span className="text-[14px] mt-2">
             {props.desc}
            </span>
            <span className="text-[16px] mt-8 hover:text-yellow-300 cursor-pointer hover:duration-300">
            {props.btn}
            </span>
        </div>
    );
};

export default Product;
