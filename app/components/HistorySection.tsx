export default function HistorySection() {
  return (
    <section className="py-32 px-6 bg-stone-900 text-stone-50 border-t border-stone-800">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-16 text-stone-400">
          It Started With Cities.
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          
          <div className="text-left w-full md:w-[300px]">
            <h3 className="font-display text-3xl font-bold text-stone-300 mb-6 border-b border-stone-700 pb-4">KUDOS</h3>
            <ul className="space-y-2 text-stone-400 font-medium font-mono text-sm uppercase tracking-widest">
              <li>Urban Innovation.</li>
              <li>Urban Futures.</li>
              <li>Research.</li>
              <li>Education.</li>
              <li>Open Innovation.</li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-px h-16 bg-stone-700 md:hidden" />
            <div className="hidden md:flex w-16 h-px bg-stone-700" />
            <div className="w-3 h-3 rounded-full bg-orange-500 my-4 md:mx-4 md:my-0" />
            <div className="w-px h-16 bg-stone-700 md:hidden" />
            <div className="hidden md:flex w-16 h-px bg-stone-700" />
          </div>
          
          <div className="text-left w-full md:w-[300px]">
            <h3 className="font-display text-3xl font-bold text-orange-500 mb-6 border-b border-orange-500/30 pb-4">BHARAT PLAY</h3>
            <ul className="space-y-2 text-stone-300 font-medium font-mono text-sm uppercase tracking-widest">
              <li>Serious Games.</li>
              <li>Experiential Learning.</li>
              <li>Systems Thinking.</li>
              <li>Future Skills.</li>
              <li>Communities.</li>
              <li>Urban Futures.</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
