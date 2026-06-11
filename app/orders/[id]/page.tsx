import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 text-[#2A2A2A]">
    <div className="w-9 h-9 rounded-full bg-[#4A3F35] flex items-center justify-center text-white font-bold text-sm">V</div>
    <span className="text-2xl font-bold tracking-tighter uppercase">Velondore</span>
  </Link>
);

export default function OrderDetails({ params }: { params: { id: string } }) {
  // In a real app we'd fetch order data using params.id
  const orderId = params.id || "VD-827394"; 

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2A2A2A] selection:bg-[#4A3F35] selection:text-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex items-center justify-between">
        <Logo />
        <Link href="/" className="text-sm font-medium text-[#4A3F35]/60 hover:text-[#4A3F35] transition-colors flex items-center gap-2">
          <span>←</span> Back to shop
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#4A3F35]/40 mb-2">
            <span>Orders</span>
            <span>/</span>
            <span className="text-[#4A3F35]">{orderId}</span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight">Order Status</h1>
        </div>

        {/* Status Timeline */}
        <div className="bg-[#F2EFE9]/40 rounded-[40px] p-12 border border-[#4A3F35]/5">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative gap-8 md:gap-0">
             {/* Timeline Line (Desktop) */}
             <div className="hidden md:block absolute left-8 right-8 top-[38px] h-px bg-[#4A3F35]/10" />
             
             {[
               { status: 'Confirmed', date: 'Oct 21', active: true, done: true },
               { status: 'Processing', date: 'Oct 22', active: true, done: false },
               { status: 'Shipped', date: '--', active: false, done: false },
               { status: 'Delivered', date: '--', active: false, done: false }
             ].map((step, i) => (
               <div key={i} className="flex md:flex-col items-center md:items-center gap-4 md:gap-6 relative z-10">
                 <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 ${step.done ? 'bg-[#4A3F35] border-[#4A3F35]' : step.active ? 'bg-white border-[#4A3F35]' : 'bg-[#F2EFE9] border-transparent'}`}>
                    {step.done ? (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    ) : (
                      <div className={`w-2.5 h-2.5 rounded-full ${step.active ? 'bg-[#4A3F35] animate-pulse' : 'bg-[#4A3F35]/20'}`} />
                    )}
                 </div>
                 <div className="text-left md:text-center">
                    <p className={`text-sm font-semibold tracking-tight ${step.active ? 'text-[#4A3F35]' : 'text-[#4A3F35]/30'}`}>{step.status}</p>
                    <p className="text-[10px] text-[#4A3F35]/40 uppercase font-bold tracking-widest mt-0.5">{step.date}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {/* Order Items */}
           <div className="space-y-6">
              <h3 className="text-xl font-medium tracking-tight">Order Details</h3>
              <div className="space-y-4">
                 {[
                   { name: 'Chair Sai', desc: 'Mahogany wood', price: '499.95$', img: '/hero-chair.png' },
                   { name: 'Chair Nora', desc: 'Oak wood', price: '394.00$', img: '/chair-nora.png' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 p-4 rounded-3xl bg-white border border-[#4A3F35]/5">
                      <div className="w-16 h-16 bg-[#F9F8F6] rounded-2xl flex items-center justify-center p-2">
                        <Image src={item.img} alt={item.name} width={40} height={40} className="object-contain" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-[10px] text-[#4A3F35]/40">{item.desc}</p>
                      </div>
                      <span className="text-sm font-bold">{item.price}</span>
                   </div>
                 ))}
              </div>
              <div className="p-6 rounded-3xl bg-[#F2EFE9]/20 space-y-2 mt-4">
                 <div className="flex justify-between text-sm">
                   <span className="text-[#4A3F35]/60">Subtotal</span>
                   <span>893.95$</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-[#4A3F35]/60">Shipping</span>
                   <span>25.00$</span>
                 </div>
                 <div className="flex justify-between text-lg font-bold border-t border-[#4A3F35]/10 pt-2 mt-2">
                   <span>Total</span>
                   <span>918.95$</span>
                 </div>
              </div>
           </div>

           {/* Delivery Info */}
           <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[#4A3F35]/60 uppercase tracking-widest">Shipping Address</h3>
                <div className="text-sm space-y-1 leading-relaxed">
                  <p className="font-bold">John Doe</p>
                  <p className="text-[#4A3F35]/80">123 Calm Streets</p>
                  <p className="text-[#4A3F35]/80">Peaceful Valley, CA 90210</p>
                  <p className="text-[#4A3F35]/80">United States</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[#4A3F35]/60 uppercase tracking-widest">Payment Method</h3>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-5 bg-gray-200 rounded" />
                  <span className="text-sm font-medium">Visa ending in 4242</span>
                </div>
              </div>

              <div className="p-8 rounded-[32px] bg-[#4A3F35] text-[#F9F8F6] space-y-4 relative overflow-hidden">
                 <div className="relative z-10">
                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Need Help?</p>
                   <h4 className="text-lg font-medium leading-tight mt-1">Our customer service is <br /> here for you 24/7</h4>
                   <button className="mt-6 text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
                     Contact Support <span>→</span>
                   </button>
                 </div>
                 {/* Abstract Decor */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
