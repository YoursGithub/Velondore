import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  const materials = [
    { name: "Sanded Oak", hex: "#D2B48C" },
    { name: "Dark Walnut", hex: "#5C4033" },
    { name: "Mist Linen", hex: "#E5E4E2" },
    { name: "Slate Velvet", hex: "#708090" },
    { name: "Terracotta", hex: "#E2725B" },
  ];

  const variants = ["Standard", "Large", "Loveseat", "Ottoman Included"];

  const reviews = [
    {
      name: "Satoshi Nakamoto",
      date: "14/05/2025",
      rating: 5,
      comment: "The craftsmanship is unparalleled. The oak is so smooth and the joinery is invisible. Truly a piece of art that happens to be a chair.",
      images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=200&auto=format&fit=crop", "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=200&auto=format&fit=crop"],
    },
    {
      name: "Elena Rossi",
      date: "02/06/2025",
      rating: 5,
      comment: "Fits perfectly in my minimalist living room. Extremely comfortable for reading sessions.",
      images: ["https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=200&auto=format&fit=crop"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#2A2A2A] font-outfit selection:bg-[#4A3F35] selection:text-white">
      {/* Header - Perfect 3-Column Center Alignment */}
      <header className="border-b border-gray-100 px-4 sm:px-8 py-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-3 items-center">
          {/* Left: Menu */}
          <div className="flex justify-start">
            <button className="p-2 -ml-2 hover:bg-gray-50 rounded-full transition-colors active:scale-95">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>

          {/* Center: Brand Name (Velondore) */}
          <div className="flex justify-center">
             <div className="text-xl sm:text-3xl  tracking-tighter uppercase text-[#1A1A1A]">
                Velondore
             </div>
          </div>

          {/* Right: Meta Links */}
          <div className="flex justify-end items-center gap-3 sm:gap-6 text-sm font-bold">
             <div className="hidden lg:flex items-center gap-6">
               <span className="cursor-pointer hover:text-gray-400 transition-colors">Our Story</span>
               <span className="cursor-pointer hover:text-gray-400 transition-colors">Support</span>
             </div>
             <div className="flex items-center gap-3 sm:gap-4 lg:border-l lg:pl-6 border-gray-200">
               <svg className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
               <svg className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
               <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 overflow-hidden cursor-pointer hover:border-gray-400 transition-all">
                  <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" alt="PFP" width={32} height={32} />
               </div>
             </div>
          </div>
        </div>

        {/* Dynamic Nav - Centered */}
        <div className="max-w-[1440px] mx-auto mt-8 flex flex-col items-center gap-6">
           <div className="flex items-center gap-2 flex-wrap justify-center font-bold tracking-tight text-sm">
              {['Living Room', 'Bedroom', 'Kitchen', 'Workspace', 'Outdoor'].map(cat => (
                <button key={cat} className="px-5 py-2.5 rounded-full hover:bg-gray-50 transition-all text-gray-400 hover:text-gray-900">
                  {cat}
                </button>
              ))}
           </div>
           
           <div className="w-full max-w-xl relative">
              <input 
                type="text" 
                className="w-full bg-gray-50 border border-gray-100 rounded-full py-3.5 px-14 text-sm focus:outline-none focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-100 transition-all font-medium"
                placeholder="Search collection..."
              />
              <svg className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
           </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-16">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-3 text-[10px]  uppercase tracking-[0.2em] text-gray-300 mb-16">
           <span className="hover:text-gray-900 cursor-pointer transition-colors">Catalog</span>
           <span>/</span>
           <span className="hover:text-gray-900 cursor-pointer transition-colors">Living Room</span>
           <span>/</span>
           <span className="text-gray-900">Osaka Armchair</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Area: Visuals & Depth */}
          <div className="md:col-span-8 space-y-20">
            
            {/* Gallery Mosaic - Furniture Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 h-auto sm:h-[700px]">
               <div className="sm:col-span-7 relative h-[500px] sm:h-full rounded-2xl overflow-hidden bg-[#F8F7F4] group shadow-sm ring-1 ring-black/5">
                  <Image 
                    src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop" 
                    alt="Osaka Armchair main" 
                    layout="fill" 
                    objectFit="cover"
                    className="group-hover:scale-[1.03] transition-transform duration-[2000ms]"
                    priority
                  />
                  <div className="absolute top-8 left-8">
                    <div className="bg-white/90 backdrop-blur-xl px-1 sm:px-1 rounded-full flex items-center shadow-2xl ring-1 ring-black/5 overflow-hidden">
                       <span className="bg-[#1A1A1A] text-white px-5 py-2 rounded-full text-[10px]  uppercase tracking-widest">Premium</span>
                       <span className="px-5 text-[10px]  uppercase tracking-widest">Handcrafted</span>
                    </div>
                  </div>
               </div>
               <div className="sm:col-span-5 flex flex-col gap-6 h-full">
                  <div className="grid grid-cols-2 gap-6 h-[200px] sm:h-auto sm:flex-1">
                    <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 group shadow-sm">
                      <Image src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=400&auto=format&fit=crop" alt="Detailed wood" layout="fill" objectFit="cover" className="group-hover:scale-110 transition-all duration-700" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 group shadow-sm">
                      <Image src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400&auto=format&fit=crop" alt="Full room" layout="fill" objectFit="cover" className="group-hover:rotate-1 transition-all duration-700" />
                    </div>
                  </div>
                  <div className="relative h-[250px] sm:h-auto sm:flex-1 rounded-2xl overflow-hidden bg-[#E8E6E1] group shadow-inner">
                    <Image src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=640&auto=format&fit=crop" alt="Alternative angle" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-black/5" />
                  </div>
               </div>
            </div>

            {/* Product Details Section */}
            <div className="bg-[#FBFAFA] rounded-3xl p-10 sm:p-20 space-y-20 border border-gray-100">
               <div className="flex flex-col sm:flex-row items-start justify-between gap-10">
                  <div className="space-y-6">
                    <h1 className="text-5xl sm:text-7xl  tracking-tighter text-[#1A1A1A] leading-none">Osaka Velvet Armchair</h1>
                    <div className="flex items-center gap-4 text-sm font-bold text-gray-500">
                      <div className="flex text-[#4A3F35]  text-xl">
                        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                      </div>
                      <span className="text-[#1A1A1A]">4.9</span>
                      <span className="text-gray-300">|</span>
                      <span>Verified Sustainability Certified</span>
                    </div>
                  </div>
                  <button className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center hover:bg-white hover:border-[#4A3F35] transition-all group shrink-0 shadow-lg bg-white active:scale-95">
                     <svg className="w-7 h-7 text-gray-200 group-hover:text-[#4A3F35] transition-colors" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21l-8.228-9.96a5 5 0 117.228-6.91 5 5 0 117.228 6.91L12 21z" /></svg>
                  </button>
               </div>

               {/* Materials & Customization */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                  <div className="space-y-8">
                    <h3 className="text-[12px]  uppercase tracking-[0.4em] text-gray-300">Select Material</h3>
                    <div className="flex flex-wrap gap-8">
                      {materials.map(mat => (
                        <div key={mat.name} className="flex flex-col items-center gap-4 cursor-pointer group">
                          <div 
                            className={`w-12 h-12 rounded-full border-[4px] border-white transition-all shadow-xl group-hover:scale-110 ${mat.name === 'Sanded Oak' ? 'ring-2 ring-[#4A3F35] ring-offset-4' : 'ring-1 ring-gray-100'}`} 
                            style={{ backgroundColor: mat.hex }}
                          />
                          <span className="text-[10px]  uppercase tracking-widest text-gray-400 group-hover:text-[#1A1A1A] transition-colors">{mat.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8 lg:text-right">
                    <h3 className="text-[12px]  uppercase tracking-[0.4em] text-gray-300">Variant Selection</h3>
                    <div className="flex flex-wrap lg:justify-end gap-3 font-bold">
                      {variants.map((v, i) => (
                        <button 
                          key={v + i} 
                          className={`px-6 py-3.5 rounded-xl text-xs transition-all border-2 ${i === 0 ? 'bg-[#4A3F35] text-white border-[#4A3F35] shadow-2xl scale-105' : 'bg-white text-gray-400 border-gray-50 hover:border-gray-900 hover:text-black'}`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>
               </div>

               {/* Design Philosophy */}
               <div className="space-y-4">
                  <div className="border-t border-gray-100 py-12 space-y-8">
                    <div className="flex items-center justify-between group cursor-pointer">
                      <h3 className="text-2xl  tracking-tighter">Design Philosophy</h3>
                      <svg className="w-6 h-6 text-gray-200 group-hover:text-[#4A3F35] transition-all group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <p className="text-xl text-gray-500 leading-relaxed max-w-4xl font-medium tracking-tight">
                      The Osaka collection represents the intersection of Japanese minimalism and Scandinavian comfort. Each chair is carved from responsibly sourced European Oak and finished with an organic oil that preserves the timber&apos;s natural breathability.
                    </p>
                  </div>

                  <div className="border-t border-gray-100 py-12 space-y-12">
                    <div className="flex items-center justify-between group cursor-pointer">
                      <h3 className="text-2xl  tracking-tighter">Technical Specs</h3>
                      <svg className="w-6 h-6 text-gray-200 group-hover:text-[#4A3F35] transition-all group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-20">
                       {[
                         { label: "Crafting Time", value: "45 Days Hand-Finished", desc: "Built to last generations" },
                         { label: "Weight Limit", value: "Up to 180kg", desc: "Structural integrity testing passed" },
                         { label: "Dimensions", value: "85H x 78W x 82D cm", desc: "Optimized for lumbar support" },
                         { label: "Warranty", value: "15-Year Structural", desc: "Velondore Promise replacement" }
                       ].map((item, idx) => (
                         <div key={idx} className="flex gap-6 group hover:translate-x-2 transition-transform">
                           <div className="w-16 h-16 rounded-2xl bg-[#4A3F35] flex items-center justify-center shrink-0 shadow-2xl ring-4 ring-white">
                             <span className="text-white text-xl ">{idx + 1}</span>
                           </div>
                           <div className="min-w-0 flex flex-col justify-center">
                             <p className="text-[10px] uppercase  tracking-[0.3em] text-gray-300 mb-1">{item.label}</p>
                             <p className="text-sm  tracking-tighter text-[#1A1A1A]">{item.value}</p>
                             <p className="text-xs text-gray-400 font-medium mt-1">{item.desc}</p>
                           </div>
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
            </div>

            {/* Similar Collection Section - Centered */}
            <div className="w-full py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="space-y-24 flex flex-col items-center justify-center">
      
      {/* Heading */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl sm:text-[64px] tracking-tighter text-[#1A1A1A] leading-tight">
          Complete the Collection.
        </h2>
        <p className="text-gray-400 text-sm tracking-[0.4em] uppercase">
          Matching items for your living space
        </p>
      </div>

      {/* Products */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-24">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="group cursor-pointer flex flex-col max-w-sm mx-auto w-full"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gray-50 mb-8 shadow-2xl transition-all group-hover:shadow-[#4A3F35]/10 ring-1 ring-black/5">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop"
                alt="Similar"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
              />
            </div>

            <div className="flex justify-between items-center px-2">
              <div className="group-hover:translate-x-1 transition-transform">
                <h4 className="text-sm tracking-tighter uppercase text-[#1A1A1A]">
                  Kyoto Oak Table
                </h4>
                <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">
                  Natural Finish
                </p>
              </div>

              <span className="text-sm">€ 840</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</div>
          </div>

          {/* Right Sidebar: Sticky Action & Reviews */}
          <div className="md:col-span-4 space-y-12 sticky top-12">
            
            {/* Purchase CTA - Iconic Pill */}
            <Link href="/checkout">
            <div className="bg-[#1A1A1A] rounded-full p-2.5 flex items-center justify-between text-white shadow-2xl overflow-hidden group">
               <span className="text-3xl  tracking-tighter ml-12">€ 1,849</span>
               <button className="bg-white text-[#1A1A1A] rounded-full px-12 py-5.5 text-sm  flex items-center gap-4 hover:bg-[#F8F7F4] active:scale-95 transition-all shadow-xl">
                 <span>Order Now</span>
                 <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={3.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 7l5 5-5 5" /></svg>
               </button>
            </div>
            </Link>

            {/* Testimonials Sidebar */}
            <div className="bg-[#FBFAFA] rounded-2xl p-10 space-y-14 border border-gray-100 shadow-xl shadow-black/5">
               <div className="flex items-center justify-between">
                  <h3 className="text-xl  tracking-tighter">Reviews (41)</h3>
                  <span className="text-[11px]  text-gray-400 hover:text-[#4A3F35] cursor-pointer transition-colors underline underline-offset-8 decoration-gray-200 decoration-2">Read all</span>
               </div>
               
               <div className="space-y-20">
                  {reviews.map((rev, idx) => (
                    <div key={rev.name + idx} className="space-y-8">
                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-5">
                             <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 ring-4 ring-white shadow-lg shrink-0">
                                <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" alt={rev.name} width={56} height={56} />
                             </div>
                             <div className="min-w-0">
                                <h4 className="text-sm  tracking-tighter text-[#1A1A1A] uppercase truncate">{rev.name}</h4>
                                <p className="text-[10px] text-[#4A3F35] mt-1 tracking-[0.2em]  leading-none">{rev.date}</p>
                             </div>
                          </div>
                          <div className="flex text-[#4A3F35] text-xs gap-0.5">
                             {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                          </div>
                       </div>
                       <p className="text-sm leading-relaxed text-gray-500 font-bold italic tracking-tight">
                         &ldquo;{rev.comment}&rdquo;
                       </p>
                       <div className="flex flex-wrap gap-5">
                          {rev.images.map((img, j) => (
                            <div key={j} className="relative w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform cursor-pointer ring-1 ring-gray-100/50">
                               <Image src={img} alt="review snap" layout="fill" objectFit="cover" />
                            </div>
                          ))}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modern Footer Branding */}
      <footer className="bg-[#1A1A1A] text-white py-24 px-8 mt-24">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12">
          <div className="text-4xl sm:text-7xl  uppercase tracking-tighter opacity-10">VELONDORE</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-12 text-center text-[11px]  uppercase tracking-[0.5em] opacity-40">
             <span>Sustainable Craft</span>
             <span>Lifetime Structure</span>
             <span>Ethical Timber</span>
          </div>
          <div className="text-[9px] tracking-[0.6em] opacity-20 uppercase  mt-12 text-center leading-loose">
            Designed in Japan • Built in Denmark • Worldwide Logistics Support • 2025
          </div>
        </div>
      </footer>
    </div>
  );
}
