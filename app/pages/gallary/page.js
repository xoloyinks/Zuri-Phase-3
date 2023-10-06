"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { images } from './image';
import { Img } from './image';
import logo from "../images/logo.png"

import { closestCenter, DndContext } from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy
    
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';



const SortableItem = (props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.avatar});
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return(
        <>
            <span   ref={setNodeRef} {...attributes} {...listeners} className='w-[48%] relative min-w-[43%] lg:min-w-[23%] lg:max-w-[16%]  xl:min-w-[18%] xl:max-w-[18%] h-fit'  style={style}>
                <Img image={props.avatar} />
                <div className='absolute px-3 py-2 text-white bg-black/25 rounded-md top-4 right-3 text-[12px]'>
                    {props.tag}
                </div>
            </span>
        </>
    )
}

export default function Gallery() {
    const [img, setImg] = useState(images);
    var [filterImage , setFilterImage] = useState(images);
    const router = useRouter();

    const handleSignOut = (e) => {
        router.push("/api/auth/signout");
    }


    function filterTag(arg){
        setFilterImage(img.filter(tagId => tagId.id === arg));
        console.log(filterImage);
    }


    function onDragEnd(event){
        const {active, over} = event;
        if(active.id !== over.id){
            setFilterImage( (images) => {
                console.log(images);
                const oldIndex = images.findIndex(item => item.avatar === active.id);
                const newIndex = images.findIndex(item => item.avatar === over.id);
                const newItemsArray = arrayMove(images, oldIndex, newIndex);
                return newItemsArray;
            });
            
        }
        
    }
  return (
    <>
        <section className='w-screen h-screen px-3 pb-3 overflow-hidden md:px-12 lg:px-32 '>
            <nav className='flex items-center justify-between w-full py-3 bg-white/25'>
                {/* Logo */}
                <div className='md:w-[30%] flex items-center logo'> 
                    <Image src={logo} alt='logo' unoptimized={true} width={0} height={0} className='w-10 h-10 sm:w-16 sm:h-16' /> 
                    <h1 className='text-xl font-bold min-w-fit md:text-4xl'>My Gallery</h1>
                </div>
                <div className='sm:w-[20%] text-right'>
                    <button onClick={handleSignOut} className='px-5 py-3 max-[320px]:py-2 max-[320px]:text-[12px] text-sm text-white bg-black rounded-md' >Sign out</button>
                </div>
            </nav>
            
            {/* FILTER TAGS */}
                <div className='gap-3 max-[320px]:text-[12px] font-semibold'>
                    <p className='my-3 text-sm'>Drag and Drop Image to fit Specific position.</p> 

                    <span className='mt-2 text-sm font-semibold min-w-fit min-h-fit'>Filter Tags: </span>
                    <div>
                    <button onClick={() => filterTag("Terrestrial")} className='px-3 py-2 mt-2 mr-1 text-sm bg-blue-300 rounded-md hover:text-white hover:bg-blue-500 focus:bg-blue-500'>Terrestrials</button>
                    <button onClick={() => filterTag("Wallpaper")} className='px-3 py-2 mt-2 mr-1 text-sm bg-blue-300 rounded-md hover:text-white hover:bg-blue-500'>Wallpapers</button>
                    <button onClick={() => filterTag("Bird")} className='px-3 py-2 mt-2 mr-1 text-sm bg-blue-300 rounded-md hover:text-white hover:bg-blue-500' text-sm>Birds</button>
                    <button onClick={() => filterTag("Fish")} className='px-3 py-2 mt-2 mr-1 text-sm bg-blue-300 rounded-md hover:text-white hover:bg-blue-500' text-sm>Fish</button>
                    {/* <button onClick={() => filterTag("Rain")} className='px-3 py-2 mt-2 mr-1 bg-blue-300 rounded-md hover:text-white hover:bg-blue-500'>Rain</button> */}
                    <button onClick={() => setFilterImage(images)} className='px-3 py-2 mt-2 mr-1 text-sm bg-blue-300 rounded-md hover:text-white hover:bg-blue-500' text-sm>All images</button>
                    </div>
                    <div className='mt-3 text-sm text-gray-400' >
                        {filterImage.length} images found.
                    </div>
                </div>
            
            {/* IMAGES SECTION */}
            <section className='w-full overflow-y-scroll h-[77%] py-2 sm:h-[80%] my-3'>
                <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                   <SortableContext items={filterImage} strategy={verticalListSortingStrategy}>
                      <div className='flex flex-wrap max-[320px]:gap-2 gap-3 py-2 h-[50%]'>
                        {filterImage.map((image, key) => <SortableItem key={key} avatar={image.avatar} tag={image.id} /> )}
                      </div>
                   </SortableContext>
                </DndContext>
            </section>
        </section>
    </>
  )
}
