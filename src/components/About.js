import AboutImg from '../Assets/about.png'
export default function About(){
    const config ={
        line1 :'Hi, My name is Vijay, a recent BE graduate with skills in Java, C, HTML, CSS, Tailwind CSS, JavaScript, and React.js. Experienced with MySQL for data handling and Git/GitHub for version control'
       , line2 :'I enjoy building responsive, user-friendly web applications and am excited to find an entry-level opportunity to grow my skills. '
    }
    return <section className='flex  flex-col  md:flex-row  bg-secondary px-5' id='About'> 
        <div className=' py-8  md:w-1/2'>

            <img src={AboutImg}></img>

        </div>
        <div className='  md:w-1/2 flex justify-center text-white' >
        <div className='flex flex-col justify-center '>
        <h1 className='text-4xl  border-b-4 border-[#7403f5] mb-5 w-[180px] font-bold'>About Me</h1>
        <p  className='pb-5 pt-2'> {config.line1} </p>
        <p  className='pb-5'> {config.line2}  </p>

        </div>
            
        </div>
    </section>
}