import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 text-[#2A2A2A]">
    <div className="w-9 h-9 rounded-full bg-[#4A3F35] flex items-center justify-center text-white font-bold text-sm">V</div>
    <span className="text-2xl font-bold tracking-tighter uppercase">Velondore</span>
  </Link>
);

export default function Checkout() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2A2A2A] selection:bg-[#4A3F35] selection:text-white">
      {/* Mini Navigation */}
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex items-center justify-between">
        <Logo />
        <Link href="/" className="text-sm font-medium text-[#4A3F35]/60 hover:text-[#4A3F35] transition-colors flex items-center gap-2">
          <span>←</span> Back to shop
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <h1 className="text-4xl font-medium tracking-tight mb-12">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Checkout Form */}
          <div className="flex-1 space-y-12">
            <section className="space-y-6">
              <h2 className="text-xl font-medium tracking-tight flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#4A3F35] text-white text-[10px] flex items-center justify-center">01</span>
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-[#F2EFE9]/40 border border-[#4A3F35]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#4A3F35]/30 transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-[#F2EFE9]/40 border border-[#4A3F35]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#4A3F35]/30 transition-colors"
                />
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-medium tracking-tight flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#4A3F35] text-white text-[10px] flex items-center justify-center">02</span>
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full bg-[#F2EFE9]/40 border border-[#4A3F35]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#4A3F35]/30 transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full bg-[#F2EFE9]/40 border border-[#4A3F35]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#4A3F35]/30 transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Address" 
                  className="w-full md:col-span-2 bg-[#F2EFE9]/40 border border-[#4A3F35]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#4A3F35]/30 transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="City" 
                  className="w-full bg-[#F2EFE9]/40 border border-[#4A3F35]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#4A3F35]/30 transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Postal Code" 
                  className="w-full bg-[#F2EFE9]/40 border border-[#4A3F35]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#4A3F35]/30 transition-colors"
                />
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-medium tracking-tight flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#4A3F35] text-white text-[10px] flex items-center justify-center">03</span>
                Payment Method
              </h2>
              <div className="space-y-4">
                <div className="p-6 rounded-3xl border border-[#4A3F35]/40 bg-white flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full border-4 border-[#4A3F35]" />
                    <span className="text-sm font-medium">Credit Card</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-5 bg-gray-200 rounded" />
                    <div className="w-8 h-5 bg-gray-200 rounded" />
                  </div>
                </div>
                <div className="p-6 rounded-3xl border border-[#4A3F35]/10 bg-[#F2EFE9]/20 flex items-center justify-between cursor-pointer hover:border-[#4A3F35]/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full border border-[#4A3F35]/20" />
                    <span className="text-sm font-medium text-[#4A3F35]/60">PayPal</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input 
                  type="text" 
                  placeholder="Card Number" 
                  className="w-full md:col-span-2 bg-[#F2EFE9]/40 border border-[#4A3F35]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#4A3F35]/30 transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="MM / YY" 
                  className="w-full bg-[#F2EFE9]/40 border border-[#4A3F35]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#4A3F35]/30 transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="CVV" 
                  className="w-full bg-[#F2EFE9]/40 border border-[#4A3F35]/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#4A3F35]/30 transition-colors"
                />
              </div>
            </section>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-[#F2EFE9]/60 rounded-[40px] p-10 sticky top-10">
              <h2 className="text-xl font-medium tracking-tight mb-8">Order Summary</h2>
              
              <div className="space-y-6 mb-8 border-b border-[#4A3F35]/10 pb-8">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2 border border-[#4A3F35]/5">
                    <Image src="/hero-chair.png" alt="Chair Sai" width={48} height={48} className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Chair Sai</h4>
                    <p className="text-[10px] text-[#4A3F35]/60">Mahogany wood</p>
                  </div>
                  <span className="text-sm font-bold">499.95$</span>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2 border border-[#4A3F35]/5">
                    <Image src="/chair-nora.png" alt="Chair Nora" width={48} height={48} className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Chair Nora</h4>
                    <p className="text-[10px] text-[#4A3F35]/60">Oak wood</p>
                  </div>
                  <span className="text-sm font-bold">394.00$</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 text-sm">
                <div className="flex justify-between items-center text-[#4A3F35]/60">
                  <span>Subtotal</span>
                  <span>893.95$</span>
                </div>
                <div className="flex justify-between items-center text-[#4A3F35]/60">
                  <span>Shipping</span>
                  <span>25.00$</span>
                </div>
                <div className="flex justify-between items-center text-[#4A3F35]/60">
                  <span>Tax</span>
                  <span>0.00$</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-[#4A3F35]/10 text-lg font-bold">
                  <span>Total</span>
                  <span>918.95$</span>
                </div>
              </div>

              <Link 
                href="/success"
                className="w-full bg-[#4A3F35] text-white rounded-full py-5 flex items-center justify-center gap-3 hover:bg-[#3D342C] transition-all duration-300 group shadow-lg shadow-[#4A3F35]/20"
              >
                <span className="font-medium">Complete Purchase</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              
              <p className="text-[10px] text-center text-[#4A3F35]/40 mt-6 leading-relaxed">
                By completing your purchase you agree to our <br />
                <span className="underline cursor-pointer">Terms & Conditions</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
