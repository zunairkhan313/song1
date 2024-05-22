"use client"

import "../Components/hr.css"
import Image from 'next/image';
import { useSession } from "next-auth/react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Link from 'next/link';
import data_products from '../Assests/product';
// import TopicsList from '../Components/FetchProducts';


const Product = () => {

    const { data: session } = useSession();

    var addButton;


    if (session?.user?.name === "ADMIN") {

        addButton = (
            <>
                <Link href={"/admin"}>
                    <button className='custom-file-upload'>
                        <span className="font-bold">Add Product</span> <ControlPointIcon />
                    </button>
                </Link>

            </>
        )
    }


    return (
        <>
            <style>{`
                body {
                    background-color: white;
                }
            `}</style>

            <div>

                <div className="container mt-5">


                    <div className='flex justify-between'>
                        <div className="lg:text-5xl md:text-3xl sm:text-2xl font-extrabold tracking-wider bgVideoText ">
                            <h1 className="heading text-black font-bold">Our Products</h1>

                        </div>
                        <div className='mt-2'>
                            {addButton}
                        </div>
                    </div>

                    <div className="hr-products"></div>
                    <div className="flex flex-wrap justify-around">
                        {data_products.map((item, i) => {
                            return (


                                <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                                    <div key={i} className='flex flex-wrap justify-around'>

                                        <Image
                                            style={{ "height": "250px" }}
                                            className='rounded object-cover'
                                            width={300}
                                            src={item.image}
                                            alt={"tshirts"}
                                        />
                                    </div>
                                    <div className='mt-4'>
                                        <h4 className='text-2xl ml-2 font-bold tracking-wider'>{item.title}</h4>
                                        <br />
                                    </div>
                                    <div className='mt-1'>
                                        <h4 className='text-md ml-2'>{item.description}</h4>

                                    </div>
                                    <div className='mt-2'>
                                        <h4 className='text-md ml-2'>{item.price}</h4>
                                        <br />
                                    </div>
                                    <div className="mt-2">
                                        <hr />
                                    </div>
                                    <div className='flex flex-wrap justify-around mt-3'>
                                        <div>
                                            <button style={{ backgroundColor: "#ff3333" }} type="button" class="text-white hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                        </div>
                                        <div>
                                            <button type="button" class="text-red-700 hover:bg-[#ff3333] focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                        </div>
                                    </div>

                                </div>

                            )
                        })}
                        {/* <TopicsList /> */}


                    </div>
                </div>
            </div>

        </>
    )
}

export default Product
