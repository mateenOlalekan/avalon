import React from 'react'

function Category() {
  return (
    <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
          <p className="text-gray-600">Explore our wide range of categories</p>
        </div>
        <div className="mt-4 md:mt-0">
          <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200 flex items-center">
            View All Categories <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categoryCards.map((category) => (
          <div key={category.id} className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.itemCount} items</p>
              <a 
                href="#" 
                className="mt-3 text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200 flex items-center"
              >
                Shop Now <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Category