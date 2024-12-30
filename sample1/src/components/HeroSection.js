import image from '../assests/tooth.jpg';

function HeroSection(){
    return (
<div className="bg-blue-900 py-40 bg-no-repeat  bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
    <div className=" p-8 ml-20 ">
        <p className="font-sans font-bold text-3xl my-6 text-white" >TRUSTED DENVER TECH CENTER DENTISTS</p>
        <p className="font-sans font-bold text-6xl text-white  my-6">Exceptional care <br/>for all ages </p>
        <button className="my-6 bg-yellow-400 p-4  text-black">BOOK ONLINE</button>
        <p className="my-6 text-white text-2xl">CALL 7719450870</p>
    </div>
</div>
 )
}
export default HeroSection