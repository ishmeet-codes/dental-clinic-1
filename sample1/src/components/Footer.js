import instalogo from '../assests/icons/noun-instagram.png'
import facebooklogo from '../assests/icons/noun-facebook.png'
function Footer(){
   return (  
   <div className="container bg-cyan-600">
        <div className="grid text-white p-8 py-12 gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
                <p className="font-sans font-bold text-3xl mb-4">Social</p>
                <img className='w-12 inline text-white'src={instalogo}></img>
                <img className='w-7 inline' src={facebooklogo}></img>
                </div>
            <div className="">
            <p className="font-sans font-bold text-3xl mb-4">Services</p>
                <ul>
                    <li className="font-sans text-lg ">General</li>
                    <li className="font-sans text-lg ">Cosmetic</li>
                    <li className="font-sans text-lg ">Surgical</li>
                </ul>
                </div>
            <div className="">
                <p className="font-sans font-bold text-3xl mb-4">Our Office</p>
                <ul>
                    <li className="font-sans text-lg ">Home</li>
                    <li className="font-sans text-lg ">Warranty</li>
                    <li className="font-sans text-lg ">About</li>
                    <li className="font-sans text-lg ">New Pantients</li>
                    <li className="font-sans text-lg ">Contact</li>
                </ul>
                </div>
            <div className="">
                <p className="font-sans font-bold text-3xl mb-4">Contact Us</p>
                <p className="font-sans text-lg ">5670 Model Town <br/>Ludhiana , 141001 <br/>7719450870 <br/>ishmeetsinghxa@gmail.com</p>
                
            </div>
        </div>

        <div className='border-t-4 border-white'>
            <div className="grid text-white p-8 py-12 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                <div><p>© Village Dental 2024 | Privacy Policy | Accessibility Statement</p></div>
                <div><p>Dental Website by :Ishmeet</p></div>
            </div>

        </div>
    </div>
   )
}

export default Footer