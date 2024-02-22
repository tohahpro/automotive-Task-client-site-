import image1 from '../../../assets/image/logo-icons/engine (1).png';
import image2 from '../../../assets/image/logo-icons/mechanic (1).png';
import image3 from '../../../assets/image/logo-icons/instruments (1).png';
import image4 from '../../../assets/image/logo-icons/paint (1).png';

const Features = () => {
    return (
        <div className='lg:mx-56'>
            <h2 className='text-center text-5xl font-extrabold pb-8'>Core Features</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>

                <div className="bg-[#F8FAFC] hover:shadow-2xl border-r border-gray-300 py-10 rounded-l-2xl">
                    <figure className='flex justify-start w-fit pl-5'><img className='w-20' src={image1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">All Kind Brand</h2>
                        <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                    </div>
                </div>
                <div className="bg-[#F8FAFC] hover:shadow-2xl  border-r border-gray-300 py-10">
                    <figure className='flex justify-start w-fit pl-5'><img className='w-20' src={image2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Expert Mechanics</h2>
                        <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                    </div>
                </div>
                <div className="bg-[#F8FAFC] hover:shadow-2xl border-r border-gray-300 py-10">
                    <figure className='flex justify-start w-fit pl-5'><img className='w-20' src={image3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Repair Vehicales</h2>
                        <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                    </div>
                </div>
                <div className="bg-[#F8FAFC] hover:shadow-2xl py-10 rounded-r-2xl">
                    <figure className='flex justify-start w-fit pl-5'><img className='w-20' src={image4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Paint & Costume</h2>
                        <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Features;