import ResumeImg from '../Assets/resume.jpg'
export default function Resume(){
    const config ={
        link:'https://drive.google.com/file/d/1XcbI6PMrDbMv5JN9OjuLg0xQ2JsQkfRM/view?usp=drive_link'
    }
    return <section className='flex  flex-col pb-10 md:flex-row  bg-secondary px-5' id='Resume'> 
        <div className=' py-8  md:w-1/2 flex md:justify-end justify-center '>

            <img className='w-[300px] ' src={ResumeImg}></img>

        </div>
        <div className='  md:w-1/2 flex justify-center text-white' >
        <div className='flex flex-col justify-center '>
        <h1 className='text-4xl  border-b-4 border-[#7403f5] mb-5 w-[140px] font-bold'>Resume</h1>
        <p  className='pb-5 pt-2'> You can view my resume <a className='btn' href={config.link}>  Download</a></p>

        </div>
            
        </div>
    </section>
}