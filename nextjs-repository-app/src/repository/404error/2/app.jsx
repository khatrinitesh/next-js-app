import React from 'react'

const CustomApp = () => {
  return (
    <section class="page_404 bg-white py-10 font-serif">
    <div class="container mx-auto">
        <div class="flex justify-center">
            <div class="max-w-xl w-full text-center">
                <div class="four_zero_four_bg bg-cover bg-center h-96"></div>
                <div class="contant_box_404">
                    <h1 class="text-6xl font-bold">404</h1>
                    <h3 class="text-6xl font-bold">Look like you're lost</h3>
                    <p class="text-lg">The page you are looking for is not available!</p>
                    <a href="/" class="link_404 inline-block px-6 py-3 bg-green-500 text-white uppercase font-semibold rounded-lg mt-6">Go to Home</a>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default CustomApp
