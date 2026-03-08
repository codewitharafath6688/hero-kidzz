import Link from 'next/link';
import React from 'react';
import { TbFaceIdError } from "react-icons/tb";

const Error404 = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
            <TbFaceIdError size={100} className='text-[#F6962F]'/>
            <h2 className='text-4xl font-bold'>Page Not Found</h2>
            <Link href={"/"} className='btn'>Go to Home</Link>
        </div>
    );
};

export default Error404;