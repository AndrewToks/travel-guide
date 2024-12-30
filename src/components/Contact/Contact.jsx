import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='max-w-[1150px] ml-auto mr-auto bg-slate-900 flex flex-col min-h-screen justify-center items-center p-5'>
    <form className='max-w-[900px] w-full h-full flex flex-col gap-6'>
        <h1 className='text-xl text-center text-gray-300'>Contact Us by Sending Us An Email</h1>
        <div className='flex flex-col gap-5 '>
        <input type="text" placeholder='Your Full Name' className='w-full h-14 px-2 outline-none bg-transparent text-white border-[1px] rounded-md border-slate-950' />
        <input type="Email" placeholder='Your Email'  className='w-full h-14 px-2 outline-none bg-transparent border-[1px] text-white rounded-md border-slate-950'/>
        </div>
        <textarea name="" id="" placeholder='Your Message' className='w-full h-36 outline-none bg-slate-900 text-white px-2 py-2 border-[1px] border-slate-950 rounded-md'></textarea>
        <button className='btn btn-primary w-full'>Send Message</button>
    </form>
    </div>
  )
}

export default Contact