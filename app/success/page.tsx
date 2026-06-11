import Link from "next/link";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 text-[#2A2A2A]">
    <div className="w-9 h-9 rounded-full bg-[#4A3F35] flex items-center justify-center text-white font-bold text-sm">V</div>
    <span className="text-2xl font-bold tracking-tighter uppercase">Velondore</span>
  </Link>
);

export default function Success() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2A2A2A] selection:bg-[#4A3F35] selection:text-white flex flex-col">
      {/* Mini Navigation */}
      <nav className="max-w-7xl mx-auto w-full px-6 md:px-12 py-10 flex items-center justify-between">
        <Logo />
      </nav>

      <main className="flex-1 flex items-center justify-center px-6 pb-24">
        <div className="max-w-2xl w-full text-center space-y-12">
          {/* Success Icon */}
          <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#4A3F35]/5 rounded-full scale-150 animate-pulse" />
            <div className="absolute inset-0 bg-[#4A3F35]/10 rounded-full scale-125" />
            <div className="w-20 h-20 bg-[#4A3F35] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#4A3F35]/40">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-medium tracking-tight">Order Confirmed!</h1>
            <p className="text-[#4A3F35]/60 text-lg font-light max-w-md mx-auto">
              Your order <span className="text-[#4A3F35] font-medium">#VD-827394</span> has been successfully placed. We&apos;ll send a confirmation email with details shortly.
            </p>
          </div>

          <div className="bg-[#F2EFE9]/60 rounded-[40px] p-10 space-y-8 text-left">
            <div className="flex justify-between items-end border-b border-[#4A3F35]/10 pb-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#4A3F35]/40 font-bold mb-1">Estimated Delivery</p>
                <p className="text-lg font-medium text-[#4A3F35]">October 24 - 26, 2024</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-[#4A3F35]/40 font-bold mb-1">Shipping Method</p>
                <p className="text-lg font-medium text-[#4A3F35]">Standard Ground</p>
              </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-sm font-semibold text-[#4A3F35]/60 uppercase tracking-widest">Order Summary</h3>
               <div className="flex justify-between items-center">
                 <span className="text-sm">2 items</span>
                 <span className="text-sm font-bold">918.95$</span>
               </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <Link 
              href="/orders/VD-827394"
              className="bg-[#4A3F35] text-white rounded-full px-12 py-5 flex items-center justify-center gap-3 hover:bg-[#3D342C] transition-all duration-300 min-w-[240px] shadow-lg shadow-[#4A3F35]/20"
            >
              <span className="font-medium">Track Order</span>
              <span className="text-xl">→</span>
            </Link>
            <Link 
              href="/"
              className="border border-[#4A3F35]/20 text-[#4A3F35] rounded-full px-12 py-5 flex items-center justify-center gap-3 hover:bg-[#4A3F35]/5 transition-all duration-300 min-w-[240px]"
            >
              <span className="font-medium">Continue Shopping</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Subtle Background Elements */}
      <div className="fixed -bottom-40 -left-40 pointer-events-none opacity-20">
         <div className="w-[600px] h-[600px] border border-[#4A3F35]/10 rounded-full" />
      </div>
    </div>
  );
}
