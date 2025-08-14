import floatingElementsImg from "@/assets/floating-elements.png"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main floating element */}
      <div className="absolute top-20 right-10 animate-float opacity-30">
        <img 
          src={floatingElementsImg} 
          alt="Floating crypto elements" 
          className="w-64 h-48 object-contain"
        />
      </div>
      
      {/* Additional floating shapes */}
      <div className="absolute top-1/3 left-10 w-32 h-32 rounded-full bg-gradient-primary opacity-10 animate-float-particles" />
      <div className="absolute top-2/3 right-1/4 w-24 h-24 rounded-full bg-gradient-accent opacity-15 animate-float-particles" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-scai-secondary opacity-20 animate-float-particles" style={{ animationDelay: '4s' }} />
      
      {/* Geometric shapes */}
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-scai-primary/30 rotate-45 animate-drift-right opacity-20" />
      <div className="absolute top-1/4 right-1/3 w-12 h-12 border-2 border-scai-accent/40 animate-drift-right opacity-25" style={{ animationDelay: '5s' }} />
      
      {/* Matrix rain effect */}
      <div className="absolute top-0 left-1/4 w-1 h-20 bg-gradient-to-b from-scai-primary to-transparent animate-matrix-rain opacity-60" />
      <div className="absolute top-0 left-2/3 w-1 h-16 bg-gradient-to-b from-scai-accent to-transparent animate-matrix-rain opacity-40" style={{ animationDelay: '3s' }} />
      <div className="absolute top-0 right-1/4 w-1 h-24 bg-gradient-to-b from-scai-secondary to-transparent animate-matrix-rain opacity-50" style={{ animationDelay: '6s' }} />
    </div>
  )
}