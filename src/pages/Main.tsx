import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import Dropdown from '../components/Dropdown'
import InputRange from '../components/InputRange'
import ItemCard from '../components/ItemCard'

const Main = () => {
  return (
    <>
        <header className='flex h-28 p-10 text-white bg-gradient-to-tr from-orange-500 to-red-500 w-full'>
            <a className='flex text-4xl'>
                <ShoppingBagIcon className='h-10 w-10 mr-2'/>
                Shopee
            </a>
        </header>

        <div className='container mx-auto flex p-4'>
            <section className='w-60 h-full p-4 bg-orange-500'>
                <Dropdown label='Category' />
                <Dropdown label='Brand' />
                <InputRange label='Price Range' minimum={0} maximum={50} />
            </section>

            <section className='px-10 items-center grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2.5'>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
            </section>
        </div>
    </>
  )
}

export default Main