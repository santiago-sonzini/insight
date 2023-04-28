import React from 'react'
import Card from './Card'

const Sections = ( data: any) => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  return (
    <section className=' flex flex-col justify-center h-1/3 w-full'>

            {
                data.data.map((item: any) => { 
                    if (item[0].products) {
                        return <>
                        <h2 className=' text-white font-bold text-left text-xl'>{item[0].section}</h2>
                        <div className='  flex flex-col md:flex-row items-center justify-evenly bg-transparent overflow-x-scroll scrollbar-hide '>
                            {item[0].products.map((item: any)=>{ return <Card item={item}/>})}
                        </div>
                    </>
                    }
                    return null
                    
                    
                })
            }
        
        
    </section>
  )
}

export default Sections