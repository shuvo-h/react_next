import { Button } from '@/components/ui/button';
import React from 'react';
import HeroBanar from "@/assest/image/home/banner/Lost-Found-Main.jpg"
import Image from 'next/image';

const Hero = () => {
    return (
        <section className='grid grid-cols-2 gap-2'>
            <aside>
                <h2>Lost and Found Made Easy</h2>
                <p>Found or lost something valuable? Post here to help return it.</p>
                <div className='my-4'>
                    <Button>Post a found item</Button>
                    <Button className='ml-4'>Claim a item</Button>
                </div>
            </aside>
            <aside>
                <Image src={HeroBanar} width={500} height={400} alt='hero' />
            </aside>
        </section>
    );
};

export default Hero;