import React from 'react'

export default function CreateListing() {
  return (
    <main className="p-3 max-w-4xl max-auto ">
        <div className="text-center text-3xl my-7 font-semibold">
        <h1>Create Listing</h1>
        </div>
        <div>
            <form className="flex flex-col sm:">
                <div className="flex flex-col sm:flex-row p-2 gap-4">
                    <div className="flex flex-col gap-3 flex-1">
                    <input type="text" placeholder="Name" id="name" className='p-3 rounded-lg'></input>
                    <input type="text" placeholder="description" id="description" className='p-3 rounded-lg'></input>
                    <input type="text" placeholder="Address" id="address" className='p-3 rounded-lg'></input>
                    </div>
                    <div className='flex gap-6 flex-wrap'>
                        <div className='flex items-center gap-3'>
                            <input type="checkbox" id="sell" className="w-5"/>
                            <span>Sell</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <input type="checkbox" id="rent" className="w-5"/>
                            <span>Rent</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <input type="checkbox" id="parking" className="w-5"/>
                            <span>Parking</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <input type="checkbox" id="furnished" className="w-5"/>
                            <span>Furnished</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <input type="checkbox" id="offer" className="w-5"/>
                            <span>Offer</span>
                        </div>
                    </div>
                        <div className='flex gap-3 flex-wrap'>
                            <div className='flex gap-2 items-center'> 
                                <input type="number"  id="bedRoom" className='p-3 rounded-lg border-gray-100'></input>
                                <p>Beds</p>
                            </div>
                            <div className='flex gap-3 items-center'> 
                                <input type="number"  id="bathRoom" className='p-3 rounded-lg border-gray-100'></input>
                                <p>Baths</p>
                            </div>
                            <div className='flex gap-3 items-center'> 
                                <input type="number"  id="regularPrice" className='p-3 rounded-lg border-gray-100'></input>
                                <p>Regular Price</p>
                                <div>
                                    <span>($/month)</span>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'> 
                                <input type="number"  id="discountPrice" className='p-3 rounded-lg border-gray-100'></input>
                                <p >Discount Price</p>
                                <div>
                                    <span>($/month)</span>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                <p className='font-semibold'>Image: 
                    <span className='font-normal text-gray-600 ml-2'> the first image will be the cover</span>
                </p>
                <div className='flex gap-4'> 
                    <input type="file" id="file" accept='image/*'   className='p-3 rounded-lg border-gray-100' multiple></input>
                    <button className='p-3 text-green-700 border border-green-700 rounded-lg  hover:opacity-95' > Upload</button>
                </div>
                </div>
                <button className='bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95 w-auto my-3'>Create Listing</button>
            </form>
        </div>
    </main>
  )
}
