

const Contact = () => {

   

  return (
    <>
    <div name="contact" className='w-full h-screen bg-slate-900 flex justify-center items-center p-4 '>
       <form method='POST'  action='https://getform.io/f/089f6bb1-9264-4ea5-93f2-ad3c3b981fdc' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
           <p className='text-4xl font-bold inline border-b-4 border-green-500 text-gray-300 '> Contact</p>
           <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - <span className="font-bold">corporate.piyush.patidar@gmail.com</span></p>         
        </div>
        <input className='bg-[#ccdef6] p-2' type="text" placeholder='Name' name="name"></input>
        <input className='my-4 p-2 bg-[#ccd6f6] ' type='email' placeholder='Email' name="email"></input>
        <textarea className='bg-[#ccdef6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-green-500 hover:border-green-500 px-4 py-3 my-8 mx-auto flex items-center  '>Let's Collaborate</button>
       </form>
    </div>
    <div className=" px-5 bg-slate-900 text-white py-3 flex justify-center items-center">
         <p>© Copyright All Rights Reserved</p>       
    </div>
    </>
  )
}

export default Contact