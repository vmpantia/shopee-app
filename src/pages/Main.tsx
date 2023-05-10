import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import Dropdown from '../components/Dropdown'
import InputRange from '../components/InputRange'

const Main = () => {
  return (
    <>
        <header className='flex h-28 p-10 text-white bg-gradient-to-tr from-orange-500 to-red-500'>
            <a className='flex text-4xl'>
                <ShoppingBagIcon className='h-10 w-10 mr-2'/>
                Shopee
            </a>
        </header>

        <div className='flex h-screen m-3'>
            <section className='w-60 h-full p-4 bg-orange-500'>
                <Dropdown label='Category' />
                <Dropdown label='Brand' />
                <InputRange label='Price Range' minimum={0} maximum={50} />
            </section>
        </div>
    </>
  )
}

export default Main