/*import Contact from '../Assets/resume.jpg'
export default function contact(){
    return <section className='flex  flex-col  md:flex-col  bg-primary px-5 py-32' id='Contact'> 
      <div className='flex flex-col items-center  text-white  '>

        <h1 className='text-4xl  border-b-4 border-[#420395] mb-5 w-[140px] font-bold'>Contact</h1>
        <p  className='pb-5 pt-2'> If you want to discuss more in detail,please contact me</p>
        <p className='py-2'><span className='font-bold'>Email : </span>vijay.veerasamy2003@gmail.com</p>
        <p className='py-2'><span className='font-bold'>Phone : </span>+91 9344123207</p>

        </div>
            
    
    </section>
}*/
import Contact from '../Assets/resume.jpg';

export default function contact() {
  return (
    <section className='flex flex-col md:flex-col bg-primary px-5 py-32' id='Contact'> 
      <div className='flex flex-col items-center text-white'>

        <h1 className='text-4xl border-b-4 border-[#420395] mb-5 w-[140px] font-bold'>Contact</h1>
        <p className='pb-5 pt-2'>If you want to discuss more in detail, please contact me</p>
        
        <p className='py-2'>
          <span className='font-bold'>Email: </span>
          <a 
            href="mailto:vijay.veerasamy2003@gmail.com" 
            className='text-[#ccc] underline'
          >
            vijay.veerasamy2003@gmail.com
          </a>
        </p>
        
        <p className='py-2'>
          <span className='font-bold'>Phone: </span>+91 9344123207
        </p>

      </div>
    </section>
  );
}
