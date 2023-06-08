import React from 'react'

function Head() {
  return (
    <div className='grid grid-flow-col justify-between bg-orange-200 shadow-lg'>
        <div >
            <img className='h-28 p-2 m-2' alt="Logo" src='https://img.freepik.com/premium-vector/fast-food-logo-designs-template-food-delivery-logo-symbol_7649-3997.jpg?w=2000'/>
        </div>

        <div className='p-2 m-2 col-span-1 self-center'>
            <ul className='flex px-40 '>
                <li className='px-5 flex' >
                    <img className='h-5 px-2 flex' alt='offers' src='https://static.thenounproject.com/png/971055-200.png'/>
                    Offers
                </li>

                <li className='px-5 flex'>
                    <img className='h-8 px-2 flex' alt='help' src='https://static.thenounproject.com/png/1459305-200.png'/>
                    Help
                </li>
                <li className='px-5 flex'>
                    <img className='h-5 px-2 flex' alt='signin' src='https://cdn.onlinewebfonts.com/svg/img_337531.png'/>
                    Sign in
                </li>
                <li className='px-5 flex'>
                    <img className='h-8 px-2 flex' alt='cart' src='https://cdn-icons-png.flaticon.com/512/3643/3643914.png'/>
                    Cart
                </li>

            </ul>
        </div>

    </div>
  )
}

export default Head