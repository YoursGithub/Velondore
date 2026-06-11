import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import Navbar, { Logo } from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2A2A2A] selection:bg-[#4A3F35] selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-10 md:py-16 gap-10 md:gap-20">
          <div className="flex-1 space-y-8 md:space-y-10 text-center md:text-left">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-5xl md:text-[72px] font-medium leading-[1.1] md:leading-[0.95] tracking-tight text-[#2A2A2A] animate-fade-up">
                Spaces that <br className="hidden md:block" /> breathe.
              </h1>
              <p className="text-[#4A3F35]/50 text-lg md:text-xl font-light animate-fade-up delay-200 mx-auto md:mx-0 max-w-sm md:max-w-none">
                Where calm design meets nature.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 animate-fade-up delay-400">
              <Link href="/collections" className="w-full sm:w-auto border border-[#4A3F35]/80 rounded-full px-10 py-3.5 flex items-center justify-center gap-3 hover:bg-[#4A3F35] hover:text-white transition-all duration-300 group">
                <span className="text-sm font-medium">Shop now</span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative flex justify-center items-center h-[360px] sm:h-[500px] w-full overflow-hidden">
            {/* Concentric Circles — shrunk for mobile */}
            <div className="concentric-circle w-[220px] h-[220px] sm:w-[420px] sm:h-[420px] opacity-100" />
            <div className="concentric-circle w-[190px] h-[190px] sm:w-[380px] sm:h-[380px] opacity-80" />
            <div className="concentric-circle w-[160px] h-[160px] sm:w-[340px] sm:h-[340px] opacity-60" />
            <div className="concentric-circle w-[130px] h-[130px] sm:w-[300px] sm:h-[300px] opacity-40 border-dashed" />
            
            <div className="relative z-10 w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden flex items-center justify-center bg-transparent group animate-scale-in delay-500">
              <Image 
                src="/hero-chair.png" 
                alt="Featured Chair" 
                width={300} 
                height={300} 
                className="object-contain relative z-20 group-hover:scale-110 transition-transform duration-700 sm:w-[380px] sm:h-[380px]"
              />
              <div className="absolute inset-0 bg-[#F2EFE9] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <ScrollReveal delay={200}>
          <div className="w-full overflow-x-auto no-scrollbar border-b border-[#4A3F35]/10">
            <div className="flex items-center gap-8 md:gap-16 py-10 text-sm font-medium min-w-max">
              {['Chair', 'Couch', 'Table', 'Light', 'Bed', 'Closet'].map((cat, i) => (
                <button key={cat} className={`whitespace-nowrap pb-2 transition-all relative ${i === 0 ? 'text-[#2A2A2A]' : 'text-[#4A3F35]/30 hover:text-[#4A3F35]/60'}`}>
                  {cat}
                  {i === 0 && <div className="absolute -bottom-[41px] left-0 right-0 h-0.5 bg-[#2A2A2A]" />}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-10 gap-y-12 md:gap-y-16 py-12 md:py-16">
          {[
            { name: 'Chair Nora', price: '394$', img: '/chair-nora.png', info: 'Crafted from oak' },
            { name: 'Chair Sai', price: '499.95$', img: '/hero-chair.png', info: 'Crafted from mahogany' },
            { name: 'Chair Asahi', price: '254$', img: '/chair-nora.png', info: 'Crafted from pine' },
            { name: 'Armchair Nara', price: '459$', img: '/hero-chair.png', info: 'Crafted from cedar' },
          ].map((item, i) => (
            <div key={i} className="space-y-5 group cursor-pointer animate-fade-up" style={{ animationDelay: `${(i + 1) * 100 + 400}ms` }}>
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
        </ScrollReveal>

        {/* Wood Separator Pattern */}
        <ScrollReveal delay={100}>
          <div className="overflow-hidden">
            <div className="grid grid-cols-4 sm:flex justify-between items-center py-12 px-4 opacity-70 grayscale contrast-125 gap-4">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`w-10 h-10 sm:w-12 sm:h-12 relative overflow-hidden rounded-full border border-[#4A3F35]/10 flex-shrink-0 ${i >= 4 ? 'hidden sm:block' : ''}`}>
                  <Image src="/wood-grain.png" alt="wood ring" layout="fill" className="object-cover scale-150 rotate-45" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* New Collection */}
        <ScrollReveal>
          <div className="py-20 animate-fade-up">
          <h2 className="text-3xl font-medium text-center mb-16 tracking-tight">New collection</h2>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-10 h-auto md:h-[750px]">
             {/* Featured Item */}
             <div className="relative rounded-[40px] overflow-hidden group h-[400px] md:h-full cursor-pointer shadow-2xl shadow-black/5 animate-scale-in delay-200">
                <Image src="/couch-tokyo.png" alt="Couch Tokyo" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/5" />
                
                {/* Floating Card */}
                <div className="absolute top-4 right-4 sm:top-10 sm:right-10 p-4 sm:p-8 rounded-3xl bg-black/20 backdrop-blur-2xl border border-white/10 text-white min-w-[180px] sm:min-w-[240px] animate-fade-up delay-500">
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
             
             {/* Bento Grid Side — min-w-0 prevents grid blowout */}
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-10 h-auto md:h-full min-w-0">
                {/* Item 2 */}
                <div className="relative rounded-[40px] overflow-hidden group h-[300px] md:h-full cursor-pointer animate-scale-in delay-300 min-w-0">
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
                <div className="grid grid-cols-2 gap-6 sm:gap-10 min-w-0">
                  <div className="bg-[#F2EFE9] rounded-[40px] relative overflow-hidden flex items-center justify-center group cursor-pointer h-[200px] md:h-auto">
                    <Image src="/chair-nora.png" alt="Table Osaka" width={220} height={220} className="group-hover:scale-110 transition-transform duration-500 p-4" />
                  </div>
                  <div className="relative h-full flex flex-col justify-end pb-8 group cursor-pointer border-b md:border-b-0 border-[#4A3F35]/10 min-w-0">
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
        </ScrollReveal>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-[#2A2A2A] text-white py-24 px-6 md:px-16 rounded-t-[80px] md:rounded-t-[160px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
            {/* Brand & Newsletter */}
            <div className="md:col-span-2 space-y-8">
              <Logo />
              <p className="text-white/50 text-sm max-w-sm leading-relaxed">
                Elevating your living space through minimal design and natural materials. Join our community for exclusive updates and design inspiration.
              </p>
              <div className="relative max-w-sm">
                <input 
                  type="email" 
                  placeholder="Join our newsletter" 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-[#2A2A2A] px-6 py-2 rounded-full text-xs font-bold hover:bg-white/90 transition-colors">
                  Join
                </button>
              </div>
            </div>

            {/* Links Sections */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/30">Shop</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="hover:text-white transition-colors cursor-pointer">Living Room</li>
                <li className="hover:text-white transition-colors cursor-pointer">Dining Room</li>
                <li className="hover:text-white transition-colors cursor-pointer">Bedroom</li>
                <li className="hover:text-white transition-colors cursor-pointer">Office</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/30">Company</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="hover:text-white transition-colors cursor-pointer">Our Story</li>
                <li className="hover:text-white transition-colors cursor-pointer">Materials</li>
                <li className="hover:text-white transition-colors cursor-pointer">Sustainability</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/30">Support</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Shipping & Returns</li>
                <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
                <li className="hover:text-white transition-colors cursor-pointer">Store Locator</li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/30">Social</h4>
              <div className="flex gap-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#2A2A2A] transition-all cursor-pointer group">
                    <svg className="w-4 h-4 text-white group-hover:text-[#2A2A2A]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 tracking-widest font-medium uppercase">
            <div className="flex items-center gap-4">
              <span>© 2024 Velondore</span>
              <span className="hidden md:inline">•</span>
              <span>All rights reserved</span>
            </div>
            <div className="flex gap-8">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
              <span className="hover:text-white transition-colors cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </footer>
    </div>
  );
}