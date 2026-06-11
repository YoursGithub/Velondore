import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 text-[#2A2A2A]">
    <div className="w-9 h-9 rounded-full bg-[#4A3F35] flex items-center justify-center text-white font-bold text-sm">V</div>
    <span className="text-2xl font-bold tracking-tighter uppercase">Velondore</span>
  </Link>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2A2A2A] selection:bg-[#4A3F35] selection:text-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-12 py-10 flex items-center justify-between">
        <div className="flex items-center justify-between w-full md:hidden">
           <Logo />
           <button className="bg-[#4A3F35] text-white p-2.5 rounded-md hover:bg-[#3D342C] transition-colors shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
           </button>
        </div>

        <div className="hidden md:block">
           <Logo />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full md:w-auto mt-4 md:mt-0">
          <div className="flex items-center gap-8 text-sm font-medium overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0 border-t md:border-t-0 border-[#4A3F35]/5 pt-4 md:pt-0">
             <Link href="/collections" className="text-[#4A3F35] hover:opacity-100 transition-opacity whitespace-nowrap">Collections</Link>
             <Link href="#" className="opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap">About</Link>
             <Link href="#" className="opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap">Journal</Link>
          </div>
          <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-[#4A3F35]/10 pt-4 md:pt-0 md:pl-10 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <input 
                type="text" 
                className="border border-[#4A3F35]/15 rounded-md py-1.5 px-4 w-full md:w-48 text-sm focus:outline-none focus:border-[#4A3F35]/40 transition-colors"
                placeholder="Search..."
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A3F35]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <button className="hidden md:flex bg-[#4A3F35] text-white p-2.5 rounded-md hover:bg-[#3D342C] transition-colors shadow-sm shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-16 gap-20">
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <h1 className="text-[72px] font-medium leading-[0.95] tracking-tight text-[#2A2A2A]">
                Spaces that <br /> breathe.
              </h1>
              <p className="text-[#4A3F35]/50 text-xl font-light">
                Where calm design meets nature.
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <Link href="/collections" className="border border-[#4A3F35]/80 rounded-full px-10 py-3.5 flex items-center gap-3 hover:bg-[#4A3F35] hover:text-white transition-all duration-300 group">
                <span className="text-sm font-medium">Shop now</span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative flex justify-center items-center h-[500px]">
            {/* Concentric Circles */}
            <div className="concentric-circle w-[460px] h-[460px] opacity-100" />
            <div className="concentric-circle w-[420px] h-[420px] opacity-80" />
            <div className="concentric-circle w-[380px] h-[380px] opacity-60" />
            <div className="concentric-circle w-[340px] h-[340px] opacity-40 border-dashed" />
            
            <div className="relative z-10 w-[320px] h-[320px] rounded-full overflow-hidden flex items-center justify-center bg-transparent group">
              <Image 
                src="/hero-chair.png" 
                alt="Featured Chair" 
                width={380} 
                height={380} 
                className="object-contain relative z-20 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#F2EFE9] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-16 border-b border-[#4A3F35]/10 py-10 text-sm font-medium overflow-x-auto no-scrollbar scroll-smooth">
          {['Chair', 'Couch', 'Table', 'Light', 'Bed', 'Closet'].map((cat, i) => (
            <button key={cat} className={`whitespace-nowrap pb-2 transition-all relative ${i === 0 ? 'text-[#2A2A2A]' : 'text-[#4A3F35]/30 hover:text-[#4A3F35]/60'}`}>
              {cat}
              {i === 0 && <div className="absolute -bottom-[41px] left-0 right-0 h-0.5 bg-[#2A2A2A]" />}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-16 py-16">
          {[
            { name: 'Chair Nora', price: '394$', img: '/chair-nora.png', info: 'Crafted from oak' },
            { name: 'Chair Sai', price: '499.95$', img: '/hero-chair.png', info: 'Crafted from mahogany' },
            { name: 'Chair Asahi', price: '254$', img: '/chair-nora.png', info: 'Crafted from pine' },
            { name: 'Armchair Nara', price: '459$', img: '/hero-chair.png', info: 'Crafted from cedar' },
          ].map((item, i) => (
            <div key={i} className="space-y-5 group cursor-pointer">
              <div className="bg-[#F2EFE9]/60 rounded-3xl aspect-[1/1.1] flex items-center justify-center relative overflow-hidden group-hover:shadow-xl group-hover:shadow-[#4A3F35]/5 transition-all duration-500">
              <Link href="/product">
                <Image src={item.img} alt={item.name} width={240} height={240} className="group-hover:scale-105 transition-transform duration-500 p-8" />
                </Link>
                <button className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm border border-black/5">
                   <svg className="w-4 h-4 text-[#4A3F35]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </button>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-sm font-medium text-[#4A3F35] tracking-tight">{item.name}</h3>
                  <p className="text-[#4A3F35]/40 text-[11px] mt-0.5">{item.info}</p>
                </div>
                <span className="text-sm font-bold text-[#2A2A2A]">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Wood Separator Pattern */}
        <div className="flex justify-between items-center py-12 px-4 opacity-70 grayscale contrast-125">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-12 h-12 relative overflow-hidden rounded-full border border-[#4A3F35]/10">
              <Image src="/wood-grain.png" alt="wood ring" layout="fill" className="object-cover scale-150 rotate-45" />
            </div>
          ))}
        </div>

        {/* New Collection */}
        <div className="py-20">
          <h2 className="text-3xl font-medium text-center mb-16 tracking-tight">New collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-[750px]">
             {/* Featured Item */}
             <div className="relative rounded-[40px] overflow-hidden group h-full cursor-pointer shadow-2xl shadow-black/5">
                <Image src="/couch-tokyo.png" alt="Couch Tokyo" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/5" />
                
                {/* Floating Card */}
                <div className="absolute top-10 right-10 p-8 rounded-3xl bg-black/20 backdrop-blur-2xl border border-white/10 text-white min-w-[240px]">
                  <h3 className="text-xl font-medium tracking-tight">Couch Tokyo</h3>
                  <p className="text-xs text-white/60 max-w-[180px] leading-relaxed mt-2 font-light">Crafted from the base of a cedar tree trunk</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-lg font-semibold tracking-tighter">999.95$</span>
                    <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* Bento Grid Side */}
             <div className="grid grid-rows-2 gap-10 h-full">
                {/* Item 2 */}
                <div className="relative rounded-[40px] overflow-hidden group cursor-pointer">
                  <Image src="/room-living.png" alt="Shelf Chair Yuki" layout="fill" objectFit="cover" />
                  <div className="absolute inset-0 bg-black/5" />
                  
                  <div className="absolute top-8 left-8 p-6 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/50 text-[#2A2A2A] shadow-xl">
                    <h3 className="text-sm font-semibold tracking-tight">Shelf Chair Yuki</h3>
                    <p className="text-[10px] text-[#4A3F35]/70 max-w-[160px] leading-relaxed mt-1">A fine hardwood shelf chair with leather upholstery</p>
                    <div className="mt-4 flex items-center gap-3">
                       <span className="text-base font-bold tracking-tighter">599.95$</span>
                       <div className="w-6 h-6 rounded-full border border-[#4A3F35]/20 flex items-center justify-center">
                         <span className="text-sm">→</span>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Sub Grid */}
                <div className="grid grid-cols-2 gap-10">
                  <div className="bg-[#F2EFE9] rounded-[40px] relative overflow-hidden flex items-center justify-center group cursor-pointer">
                    <Image src="/chair-nora.png" alt="Table Osaka" width={220} height={220} className="group-hover:scale-110 transition-transform duration-500 p-4" />
                  </div>
                  <div className="relative h-full flex flex-col justify-end pb-8 group cursor-pointer">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-base font-medium tracking-tight">Table Osaka</h3>
                        <p className="text-xs text-[#4A3F35]/40 mt-1">Made with pine wood</p>
                      </div>
                      <div className="flex items-center justify-between group-hover:translate-x-2 transition-transform duration-300">
                        <span className="text-2xl font-bold tracking-tighter">299$</span>
                        <div className="w-10 h-10 rounded-full border border-[#4A3F35]/15 flex items-center justify-center group-hover:bg-[#4A3F35] group-hover:text-white transition-all">
                          <span className="text-xl">→</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full h-px bg-[#4A3F35]/10" />
                  </div>
                </div>
             </div>
          </div>
        </div>

        
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-[#4A3F35] text-[#F9F8F6]/40 py-24 px-16 rounded-t-[160px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          {/* Information */}
          <div className="md:col-span-4">
            <h4 className="text-white font-medium mb-8 tracking-tighter opacity-70">Information</h4>
            <ul className="space-y-3 text-[13px] tracking-tight font-light">
              <li className="hover:text-white transition-colors cursor-pointer leading-tight">Our Story</li>
              <li className="hover:text-white transition-colors cursor-pointer leading-tight">Sustainability</li>
              <li className="hover:text-white transition-colors cursor-pointer leading-tight">Privacy Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer leading-tight">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer leading-tight">Terms and Conditions of Service</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-white font-medium mb-8 tracking-tighter opacity-70">Contact</h4>
            <ul className="space-y-3 text-[13px] tracking-tight font-light">
              <li className="hover:text-white transition-colors cursor-pointer leading-tight">Legendary </li>
              <li className="hover:text-white transition-colors cursor-pointer leading-tight">+24 xxx xx xx xx</li>
              <li className="hover:text-white transition-colors cursor-pointer leading-tight">info@velondore.com</li>
            </ul>
          </div>

          {/* Social & copyright */}
          <div className="md:col-span-4 flex flex-col items-end justify-between min-h-[140px]">
             <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/40 hover:text-white transition-opacity cursor-pointer text-xs font-bold font-serif opacity-40 hover:opacity-100">m</div>
             </div>
             
             <div className="text-[12px] font-medium tracking-tight text-white/5 flex items-center gap-2">
               <span>VELONDORE DESIGN SYSTEM</span>
               <span>•</span>
               <span>2024</span>
             </div>
          </div>
        </div>

        {/* Abstract Architectural Lines - Bottom Corner */}
        <div className="absolute -bottom-20 -right-20">
           <div className="w-[300px] h-[300px] border border-white/10 rounded-full" />
           <div className="w-[260px] h-[260px] border border-white/10 rounded-full absolute -bottom-5 -right-5" />
           <div className="w-[220px] h-[220px] border border-white/10 rounded-full absolute -bottom-10 -right-10" />
           <div className="w-[180px] h-[180px] border border-white/10 rounded-full absolute -bottom-15 -right-15" />
        </div>
      </footer>
    </div>
  );
}
