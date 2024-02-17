import React from 'react'
const Navbar = () => {
    return <>
        <div className='bg-blue-50 h-20 p-4 px-20 flex gap-4 flex-1'>
            <div className='flex gap-4 flex-1'>
                <img src="https://doccure-wp.dreamguystech.com/elementor/wp-content/uploads/2021/10/logo.png" alt="logo" />
                <details className="dropdown mb-32">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>
            <div className='flex gap-4'>
                <div className='flex items-center gap-4'>
                    <span className='text-3xl'>icon</span>
                    <div className='flex flex-col'>
                        <span>contact</span>
                        <span>+91 9988776655</span>
                    </div>
                    <button className="btn btn-outline btn-primary ">Login/SigUp</button>
                </div>
            </div>
        </div>


        <div>
            <div className='flex justify-end mt-28'>
                <div>
                    <div className='text-5xl  mt-40 mr-52'>
                        <div className='flex justify-end'>
                            <img src="https://doccure-wp.dreamguystech.com/elementor/wp-content/themes/doccure/assets/images/header-icon.svg" alt="" />
                        </div>
                        <h1>Consult <span className='text-primary'>Best Doctors</span> </h1>

                        <h1>Your Nearby Location.</h1>
                    </div>
                    <p className='mt-9 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    <button type="button" class="btn btn-primary mt-8">Start a Consult</button>
                    <div className='flex ml-40 relative bottom-16'>
                        <img className=' animate-bounce ' src="https://doccure-wp.dreamguystech.com/elementor/wp-content/themes/doccure/assets/images/down-arrow-img.png" alt="" />
                    </div>
                </div>
                <img src="https://doccure-wp.dreamguystech.com/elementor/wp-content/uploads/2023/07/banner-img.png" alt="" />


            </div>
            <div className="container relative bottom-28   ">
                <div className='flex'>
                    <select class="form-select ml-11 h-16 w-60 text-center bg-gray-300">
                        <option selected>Select a Location</option>
                        <option value="1">Mumbai</option>
                        <option value="2">Pune</option>
                        <option value="3">Shambhajinaar</option>
                    </select>

                    <input className='text-center bg-gray-300 w-96' type="text" placeholder='Search doctors, clinics,etc.' />

                </div>
            </div>
        </div>


    </>

}

export default Navbar