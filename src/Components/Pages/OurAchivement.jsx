

const OurAchivement = () => {
    return (
        <div className="lg:mx-56 py-20">
            <div>
                <h1 className="text-center md:text-4xl font-extrabold">Our Achievement</h1>
                <p className="text-center w-1/2 mx-auto pt-8 pb-20">
                    aven Flexibility, Customizability, Design Quality, Features - this theme ticks every single box.</p>

                <div className="px-16 py-2 shadow-2xl shadow-red-200 grid grid-cols-1 md:grid-cols-3 rounded-2xl">
                    <div className="flex justify-center">
                        <div className="p-5">
                            <p className="text-5xl font-sans font-extrabold">4000+</p>
                            <p className="pt-2">Active Member</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="p-5">
                            <p className="text-5xl font-sans font-extrabold">3000+</p>
                            <p className="pt-2">Car Model</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="p-5">
                            <p className="text-5xl font-sans font-extrabold">6k</p>
                            <p className="pt-2">Positive Review</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default OurAchivement;