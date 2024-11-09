import HeroImg from '../Assets/hero.png'
import { AiOutlineLinkedin,AiOutlineInstagram,AiOutlineWhatsApp } from "react-icons/ai";
export default function Hero(){
   const config ={
      subtitle:'im a fresh graduate'
     , social:{
      Linkedin:'https://www.linkedin.com/in/vijayveerasamy28',
      Instagram:'https://www.instagram.com/ash_poker/?hl=en',
      Whatsapp:'https://wa.me/919344123207?text=Hi'

      }
   }
return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' id='Hero'>
   <div className=' md:w-1/2 flex flex-col'>
   <h1 className=' text-white text-6xl font-hero-font' >Hi,<br/> Im <span className='text-black'>V.</span> Vijay
    <br/>
    <p className='text-2xl py-2'>{config.subtitle}</p></h1>
    <div className='flex py-5'>
       <a href={config.social.Linkedin} className='pr-4 hover:text-white'><AiOutlineLinkedin size={30} /></a>
       <a href= {config.social.Instagram} className='pr-4  hover:text-white'><AiOutlineInstagram size={30}/></a>
       <a href={config.social.Whatsapp} className=' hover:text-white'><AiOutlineWhatsApp size={30}/></a>
    </div>
    </div> 
    <img className=' md:w-1/3' src={HeroImg}/>
    
    
</section>
}