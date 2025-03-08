import React from 'react'

export default function CreateListing() {
    const [formData, setFormData] = React.useState({
        name: '',
        description: '',
        address: '',
        sell: false,
        rent: false,
        parking: false,
        furnished: false,
        offer: false,
        bedRoom: 0,
        bathRoom: 0,
        regularPrice: 0,
        discountPrice: 0,
        file: []
    });
    const handlechange=(e)=>{
      if(e.target.id==='sell'||e.target.id==='rent'||e.target.id==='parking'||e.target.id==='furnished'||e.target.id==='offer'){
        setFormData({...formData,[e.target.id]:e.target.checked})
      }
        else{
          setFormData({...formData,[e.target.id]:e.target.value})
    }
}
console.log(formData)
  return (
    <main className="p-4 max-w-4xl mx-auto">
        <div className="text-center text-3xl my-7 font-semibold">
        <h1>Create Listing</h1>
        </div>
        <div>
            <form className="flex flex-col sm:">
                <div className="flex flex-col sm:flex-row p-2 gap-4">
                    <div className="flex flex-col gap-3 flex-1">
                    <input type="text" placeholder="Name" id="name" value={formData.name} onChange={handlechange} className='p-3 rounded-lg'></input>
                    <input type="text" placeholder="description"  value={FormData.description} id="description" onChange={handlechange} className='p-3 rounded-lg'></input>
                    <input type="text" placeholder="Address" id="address" value={formData.address} onChange={handlechange} className='p-3 rounded-lg'></input>
                    </div>
                    <div className='flex gap-6 flex-wrap'>
                        <div className='flex items-center gap-3'>
                            <input type="checkbox" checked={formData.sell} onChange={handlechange} id="sell" className="w-5"/>
                            <span>Sell</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <input type="checkbox" checked={formData.rent} onChange={handlechange} id="rent" className="w-5"/>
                            <span>Rent</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <input type="checkbox" checked={formData.parking} onChange={handlechange} id="parking" className="w-5"/>
                            <span>Parking</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <input type="checkbox" checked={formData.furnished} onChange={handlechange} id="furnished" className="w-5"/>
                            <span>Furnished</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <input type="checkbox" onChange={handlechange} checked={formData.offer} id="offer" className="w-5"/>
                            <span>Offer</span>
                        </div>
                    </div>
                        <div className='flex gap-3 flex-wrap'>
                            <div className='flex gap-2 items-center'> 
                                <input type="number" onChange={handlechange} value={formData.bedRoom} id="bedRoom" className='p-3 rounded-lg border-gray-100'></input>
                                <p>Beds</p>
                            </div>
                            <div className='flex gap-3 items-center'> 
                                <input type="number"  id="bathRoom" onChange={handlechange} value={formData.bathRoom} className='p-3 rounded-lg border-gray-100'></input>
                                <p>Baths</p>
                            </div>
                            <div className='flex gap-3 items-center'> 
                                <input type="number" onChange={handlechange} value={formData.regularPrice} id="regularPrice" className='p-3 rounded-lg border-gray-100'></input>
                                <p>Regular Price</p>
                                <div>
                                    <span>($/month)</span>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'> 
                                <input type="number"  id="discountPrice" onChange={handlechange} value={formData.discountPrice} className='p-3 rounded-lg border-gray-100'></input>
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

