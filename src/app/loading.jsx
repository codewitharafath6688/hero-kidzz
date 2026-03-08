import Logo from '@/components/layouts/Logo';
import React from 'react';

const loading = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
            <h2 className='text-5xl font-bold animate-pulse text-[#F6962F]'>Loading</h2>
            <div className='animate-ping'>
                <Logo/>
            </div>
        </div>
    );
};

export default loading;