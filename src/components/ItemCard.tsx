const ItemCard = () => {
    return (
        <div className='rounded border shadow-md hover:shadow-xl'>
            <img className='p-1 mb-2' src={require('../assets/iphone14.jpg')} alt='No Image Found' width={200} height={200}></img>
            <div className='p-2'>
                <p className='text-xs'>Iphone 14 ProMax</p>
                <p className='text-md font-medium text-red-600 mt-5 mb-4'>₱ 3,000.00</p>
            </div>
        </div>
    )
 }
 
 export default ItemCard