import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Collections() {
  const categories = ['All Products', 'Chairs', 'Couches', 'Tables', 'Lighting', 'Bedroom'];

  const products = [
    { id: 1, name: 'Chair Nora', price: '394$', img: '/chair-nora.png', info: 'Crafted from oak', category: 'Chairs' },
    { id: 2, name: 'Chair Sai', price: '499.95$', img: '/hero-chair.png', info: 'Crafted from mahogany', category: 'Chairs' },
    { id: 3, name: 'Couch Tokyo', price: '999.95$', img: '/couch-tokyo.png', info: 'Cedar base', category: 'Couches' },
    { id: 4, name: 'Table Osaka', price: '299$', img: '/chair-nora.png', info: 'Pine wood', category: 'Tables' },
    { id: 5, name: 'Chair Asahi', price: '254$', img: '/chair-nora.png', info: 'Pine wood', category: 'Chairs' },
    { id: 6, name: 'Armchair Nara', price: '459$', img: '/hero-chair.png', info: 'Cedar wood', category: 'Chairs' },
    { id: 7, name: 'Shelf Yuki', price: '599.95$', img: '/room-living.png', info: 'Hardwood shelf', category: 'Tables' },
    { id: 8, name: 'Stool Kiri', price: '189$', img: '/hero-chair.png', info: 'Bamboo', category: 'Chairs' },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2A2A2A] selection:bg-[#4A3F35] selection:text-white">
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
        {/* Mobile Filter Trigger */}
        <div className="md:hidden flex justify-end mb-8">
           <button className="flex items-center gap-2 px-6 py-3 bg-[#F2EFE9] rounded-full text-sm font-medium border border-[#4A3F35]/10">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
              Filters
           </button>
        </div>

        <div className="flex flex-col md:flex-row md:gap-16">
          
          {/* Sticky Sidebar - Hidden on Mobile */}
          <aside className="hidden md:block w-full md:w-64 space-y-12 h-fit md:sticky md:top-12">
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A3F35]/30">Categories</h3>
              <ul className="space-y-3">
                {categories.map((cat, i) => (
                  <li key={cat} className="group flex items-center justify-between cursor-pointer">
                    <span className={`text-sm font-medium transition-colors ${i === 0 ? 'text-[#4A3F35]' : 'text-[#4A3F35]/50 group-hover:text-[#4A3F35]'}`}>
                      {cat}
                    </span>
                    {i === 0 && <div className="w-1.5 h-1.5 rounded-full bg-[#4A3F35]" />}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A3F35]/30">Price Range</h3>
              <div className="space-y-4">
                <input type="range" className="w-full h-1 bg-[#4A3F35]/10 rounded-lg appearance-none cursor-pointer accent-[#4A3F35]" />
                <div className="flex justify-between text-[11px] font-bold text-[#4A3F35]/40 uppercase tracking-tighter">
                  <span>0$</span>
                  <span>2000$</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A3F35]/30">Materials</h3>
              <div className="flex flex-wrap gap-2">
                {['Oak', 'Mahogany', 'Cedar', 'Walnut', 'Pine'].map((mat) => (
                   <button key={mat} className="px-4 py-2 bg-[#F2EFE9]/60 hover:bg-[#F2EFE9] border border-[#4A3F35]/5 rounded-full text-[11px] font-medium transition-colors">
                     {mat}
                   </button>
                ))}
              </div>
            </div>

            <div className="pt-10">
               <div className="p-8 rounded-[32px] bg-[#4A3F35] text-white relative overflow-hidden group cursor-pointer">
                 <div className="relative z-10">
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Limited Edition</p>
                    <h4 className="text-lg font-medium mt-2 leading-tight">The Autumn <br /> Capsule</h4>
                    <div className="mt-6 flex items-center gap-2 text-xs font-medium group-hover:translate-x-1 transition-transform">
                       <span>Explore</span>
                       <span>→</span>
                    </div>
                 </div>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
               </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1 space-y-12">
            <div className="flex items-center justify-between border-b border-[#4A3F35]/10 pb-8">
               <h1 className="text-4xl font-medium tracking-tight">Living Room</h1>
               <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#4A3F35]/30">
                 <span>Sort by:</span>
                 <select className="bg-transparent border-none text-[#4A3F35] focus:outline-none cursor-pointer">
                    <option>Featured</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                 </select>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {products.map((item) => (
                <div key={item.id} className="space-y-5 group cursor-pointer">
                  <div className="bg-[#F2EFE9]/60 rounded-[40px] aspect-[1/1.2] flex items-center justify-center relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-[#4A3F35]/10 transition-all duration-700">
                    <Link href="/product" className="w-full h-full flex items-center justify-center p-12">
                      <Image 
                        src={item.img} 
                        alt={item.name} 
                        width={300} 
                        height={300} 
                        className="group-hover:scale-110 transition-transform duration-700 object-contain" 
                      />
                    </Link>
                    <button className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md rounded-full p-3.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-sm border border-black/5 hover:bg-[#4A3F35] hover:text-white">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    </button>
                    {item.id === 3 && (
                      <div className="absolute top-6 left-6 bg-[#4A3F35] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                        Best Seller
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-start px-4">
                    <div>
                      <h3 className="text-base font-medium text-[#4A3F35] tracking-tight">{item.name}</h3>
                      <p className="text-[#4A3F35]/40 text-[11px] mt-0.5 uppercase tracking-widest font-bold">{item.info}</p>
                    </div>
                    <span className="text-base font-bold text-[#2A2A2A] tracking-tighter">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="flex justify-center py-20">
               <button className="border border-[#4A3F35]/20 rounded-full px-12 py-4 text-sm font-medium hover:bg-[#4A3F35] hover:text-white transition-all duration-500">
                 Load More Designs
               </button>
            </div>
          </div>
        </div>
      </main>

      {/* Modern Footer Mini */}
      <footer className="border-t border-[#4A3F35]/5 py-12 px-12 mt-20">
         <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#4A3F35]/40">
               <span className="hover:text-[#4A3F35] cursor-pointer transition-colors">Sustainability</span>
               <span className="hover:text-[#4A3F35] cursor-pointer transition-colors">Shipping</span>
               <span className="hover:text-[#4A3F35] cursor-pointer transition-colors">Care</span>
            </div>
            <p className="text-[10px] items-center text-[#4A3F35]/20 font-medium tracking-widest uppercase">
              Velondore Design System © 2024
            </p>
         </div>
      </footer>
    </div>
  );
}
