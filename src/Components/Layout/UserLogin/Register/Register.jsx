import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';


import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

import { useForm } from "react-hook-form";
import axios from "axios";

import SocialRegister from "./SocialRegister";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../../Hooks/AxiosPublic";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Register = () => {


    const { signUp, userUpdate } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false)




    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic()


    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {



        // image upload to imgbb and then get an url 
        const imageFile = { image: data.image[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }

        });

        console.log(res.data.data.display_url);

        if (res.data.success) {
            const name = data.name
            const email = data.email
            const password = data.password
            const photo = res.data.data.display_url

            console.log(name);

            signUp(email, password)
                .then(res => {
                    userUpdate(name, photo)
                        .then(() => {
                        })



                    const userInfo = {
                        email: res.user?.email,
                        name: name,
                        role: 'user'
                    }

                    axiosPublic.post('/user-email', userInfo)
                        .then(res => {

                            console.log(res.data)
                        })
                    if (res.user) {
                        toast.success('Register successful')
                        navigate(location?.state ? location.state : '/')
                    }

                })

                .catch(error => {
                    return toast.error(error.message)
                })
        }
    }

    return (
        <div className="bg-[#F8F8FC]">
            <Helmet>
                <title>TrendNest | Register</title>

            </Helmet>
            <div className="lg:mx-56 px-4 py-20">
                <div className="lg:flex p-0">
                    <div className="flex-1 flex items-center justify-center lg:justify-start">
                        <img src="" alt="" />
                    </div>
                    <div className="card flex-1 justify-between flex-shrink-0  lg:border my-40">
                        <div className="card-body">
                            <h1 className="text-4xl font-semibold text-center">Register</h1>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='mx-auto p-8 space-y-3'>

                                    {/* name field  */}
                                    <div>

                                        <input {...register("name", { required: true })}
                                            required
                                            type="text" placeholder="Your Name" className="input input-bordered input-info w-full " />
                                    </div>

                                    {/* email field  */}
                                    <div>

                                        <input {...register("email", { required: true })}
                                            required
                                            type="email" placeholder="Your Email" className="input input-bordered input-info w-full " />
                                    </div>

                                    {/* image field  */}
                                    <div className="flex flex-col ">
                                        <label className="mb-3">Chose Your Image</label>
                                        <div className="w-full flex justify-center bg-white py-2 rounded-lg border border-blue-300">
                                            <input {...register("image", { required: true })}
                                                required
                                                type="file" className="" />
                                        </div>
                                    </div>


                                    {/* password field  */}
                                    <div>

                                        <div className='flex relative'>

                                            <input {...register("password", { required: true })}
                                                required
                                                type={showPassword ? 'text' : 'password'}
                                                className="border text-black w-full rounded-md p-3 my-2" placeholder='Type your password' />
                                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-6 right-2 text-lg text-black" required>{showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                                        </div>
                                        <input type="submit" value="Register" className="p-3 btn border hover:cursor-pointer w-full  rounded-lg bg-[#BEAD8E] text-white" />
                                    </div>

                                    <p className='mt-2'>Already Have Account ? Please  <Link to='/login'>
                                        <span className='text-blue-600'>
                                            <span className='underline'>Login</span>
                                        </span>
                                    </Link>

                                    </p>
                                    <SocialRegister />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;