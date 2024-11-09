import WebsiteImg1 from '../Assets/ecommerce-websites.jpg'
import WebsiteImg2 from '../Assets/portfolio.jpg'
import WebsiteImg3 from '../Assets/website-blog.jpg'
export default function Projects(){
    const config={
        Projects :[
      {
        image :WebsiteImg1,
        description:'A Ecommerce Website. Built with HTML,CSS,JavaScript',
        link:'https://aura-style-project.vercel.app/'
        },
        {
            image :WebsiteImg2,
            description:'Personal portfolio website. Built with React & Tailwind',
            link:'https://github.com/vijayveerasamy752/portfolio.git'
            },
            {
                image :WebsiteImg3,
                description:'Blog Website like quora. Built with HTML,CSS,JavaScript ',
                link:'https://thought-scribe-project.vercel.app/'
                }
            

        ]
    }
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='Projects'>
        <div className="w-full">
<div className="flex "><h1 className="text-4xl  border-b-4 border-[#420395] mb-5 w-[145px] font-bold">Projects</h1></div>
<p>These are some of my best projects. I have built with these React,Tailwind,HTML,CSS and JavaScript. Check them out</p>
        </div>

        <div className=" W-full ">               
        <div className='flex flex-col md:flex-row  px-10 gap-5 py-5'>
            {config.Projects.map((project)=>(
                <a href={project.link}>
                <div className='relative'>
                <img  className='h-[200px] w-[500px]' src={project.image}></img>
                <div className='projects-desc'>
                    <p className='text-center py-5'>{project.description}  </p>
                    <div className='flex justify-center'>
                    <a className='btn' target='_blank' href={project.link}>View Project</a>
                </div>
                </div>
                </div>
                </a>
            ))}
        
        
        </div>

        </div>
    </section>
}