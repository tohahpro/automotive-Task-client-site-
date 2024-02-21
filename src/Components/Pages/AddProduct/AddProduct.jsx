import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target
        const product_name = form.product_name.value
        const brand_name = form.brand_name.value.toUpperCase()
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value
        const description = form.description.value
        const photo = form.photo.value
        const product = { product_name, brand_name, type, price, rating, description, photo }

        console.log(product);

        fetch('https://automotive-server-site-two.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product add Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className="py-36  px-2 md:px-20 lg:px-56">
            <h2 className='text-center pt-8 pb-4 text-2xl md:text-5xl font-semibold font-rancho'>Add Product</h2>
            <p className='max-w-3xl mx-auto text-center text-sm md:text-lg pb-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <div>
                <form onSubmit={handleAddProduct} className="space-y-8">

                    {/* form row  */}
                    <div className="md:flex gap-6 ">
                        <div className="md:w-1/2 pb-3">
                            <label>
                                <span className=" text-xl font-semibold">Product Name</span>
                            </label>
                            <label>
                                <input type="text" required name="product_name" placeholder="Enter product name" className="input rounded-sm w-full" />
                            </label>
                        </div>

                        {/* Chef*/}


                        <div className="space-y-4 md:w-1/2">
                            <label className="flex justify-start">
                                <span className="text-xl font-semibold">Brand Name</span>

                            </label>
                            <label>
                                <select className="input rounded-sm w-full" name="brand_name" id="">

                                    <option value="BMW">BMW</option>
                                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                                    <option value="AUDI">AUDI</option>
                                    <option value="FORD">FORD</option>
                                    <option value="TESLA">TESLA</option>
                                    <option value="Toyota">TOYOTA</option>
                                </select>
                            </label>
                        </div>

                    </div>


                    {/* form row  */}

                    {/* Supplier */}

                    <div className="md:flex gap-6">
                        <div className=" pb-3 md:w-1/2">
                            <label>
                                <span className="text-xl font-semibold">Type</span>
                            </label>
                            <label>
                                <input type="text" required name="type" placeholder="Enter product type" className="input rounded-sm w-full" />
                            </label>
                        </div>

                        {/* Taste */}

                        <div className=" pb-3 md:w-1/2">
                            <label>
                                <span className="text-xl font-semibold">Price</span>
                            </label>
                            <label>
                                <input type="number" required name="price" placeholder="Enter product price" className="input rounded-sm w-full" />
                            </label>
                        </div>
                    </div>


                    {/* form row  */}
                    <div className="md:flex gap-6">


                        {/* Category */}

                        <div className="space-y-4 md:w-1/2">
                            <label className="flex justify-start">
                                <span className="text-xl font-semibold">Rating</span>

                            </label>
                            <label>
                                <select className="input w-full" name="rating" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </label>
                        </div>

                        {/* Details  */}

                        <div className=" pb-3 md:w-1/2">
                            <label>
                                <span className="text-xl font-semibold">Description</span>
                            </label>
                            <label>
                                <input type="text" required name="description" placeholder="Enter product description" className="input rounded-sm w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form Photo url  */}

                    <div className=" pb-3 md:w-full">
                        <label>
                            <span className="text-xl font-semibold">Photo</span>
                        </label>
                        <label>
                            <input type="text" required name="photo" placeholder="Enter photo URL" className="input rounded-sm w-full" />
                        </label>
                    </div>

                    <input type="submit" value="Add Product" className="btn btn-block bg-black text-white hover:bg-black hover:text-red-500 hover:border-red-500" />

                </form>
            </div>

        </div>
    );
};

export default AddProduct;