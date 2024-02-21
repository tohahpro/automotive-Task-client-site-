import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/AxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddProduct = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()


    const onSubmit = async (data) => {

        // image upload to imageBB and then get url 
        const imageFile = { image: data.image[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }

        });
        if (res.data.success) {
            const productItem = {
                product_name: data.name,
                brand_name: data.brand_Name,
                type: data.type,
                price: parseFloat(data.price),
                rating: data.rating,
                description: data.description,
                photo: res.data.data.display_url
            }
            // console.log(productItem);
            axiosPublic.post('/products', productItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({

                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/dashboard/my-products')
                    }
                })
        }

    }
    return (
        <div>
            <Helmet>
                <title>Add Products</title>

            </Helmet>
            <div className="pt-20 p-5 lg:p-20  mx-2 lg:mx-56">
                <h2 className='text-center pt-8 pb-4 text-5xl font-semibold font-rancho'>Add Product</h2>
                <p className='max-w-3xl mx-auto text-center text-lg pb-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* FIRST ROW  */}

                    <div className="md:flex gap-10 mt-5">
                        <div className="flex-1">
                            <label className="flex">Product Name</label>
                            <input {...register("name", { required: true })}
                                required
                                type="text" placeholder="Product Name" className="input input-bordered input-info w-full " />
                        </div>
                        <div className="flex-1">
                            <label className="flex">Brand_Name</label>

                            <label>
                                <select {...register("brand_Name", { required: true })}
                                    className="input w-full">
                                    <option value="BMW">BMW</option>
                                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                                    <option value="AUDI">AUDI</option>
                                    <option value="FORD">FORD</option>
                                    <option value="TESLA">TESLA</option>
                                    <option value="TOYOTA">TOYOTA</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    {/* 2ND ROW  */}
                    <div className="md:flex gap-10 mt-5">
                        <div className="flex-1">
                            <label className="flex">Product Type</label>
                            <input {...register("type", { required: true })}
                                required
                                type="text" placeholder="Product Type" className="input input-bordered input-info w-full " />
                        </div>
                        <div className="flex-1">
                            <label className="flex">Price</label>
                            <input {...register("price", { required: true })}
                                required
                                type="number" placeholder="Product Price" className="input input-bordered input-info w-full " />
                        </div>
                    </div>

                    {/* 3rd ROW  */}

                    <div className="md:flex gap-10 mt-5">
                        <div className="flex-1 flex-col ">
                            <label className="mb-3">Chose Your Image</label>
                            <div className="w-full flex justify-center bg-white py-2 rounded-lg border border-blue-300">
                                <input {...register("image", { required: true })}
                                    required
                                    type="file" className="" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <label className="flex">Rating</label>
                            <label>
                                <select {...register("rating", { required: true })}
                                    className="input w-full">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>

                                </select>
                            </label>
                        </div>
                    </div>

                    {/* last row  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register("description")}
                            className="textarea textarea-bordered h-24" placeholder="Product Details ..."></textarea>
                    </div>



                    <input className="w-full btn mt-10 border" type="submit" />
                </form>
            </div >
        </div >
    );
};

export default AddProduct;