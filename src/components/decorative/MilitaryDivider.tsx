export function MilitaryDivider() {
  return (
    <div className="relative py-16 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </div>
    </div>
  );
}

export function CamoPattern() {
  return (
    <div className="relative py-12 overflow-hidden bg-[#3A3A3A]">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/img/pattern.jpg')",
          backgroundSize: "200px",
          backgroundPosition: "center"
        }}
      />
      <svg className="absolute inset-0 w-full h-full opacity-5 text-primary" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="camo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10,10 Q30,5 50,15 T90,10" fill="currentColor" opacity="0.3"/>
            <path d="M20,40 Q40,35 60,45 T100,40" fill="currentColor" opacity="0.2"/>
            <path d="M5,70 Q25,65 45,75 T85,70" fill="currentColor" opacity="0.25"/>
            <circle cx="70" cy="25" r="8" fill="currentColor" opacity="0.2"/>
            <circle cx="30" cy="80" r="6" fill="currentColor" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#camo)"/>
      </svg>
    </div>
  );
}

export function MilitaryBadge() {
  return (
    <div className="flex items-center justify-center py-16 bg-background">
      <div className="relative">
        <svg className="w-32 h-32 text-primary/30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
          <path d="M50 10 L55 35 L80 35 L60 50 L70 75 L50 60 L30 75 L40 50 L20 35 L45 35 Z" fill="currentColor" opacity="0.4"/>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function TacticalStripes() {
  return (
    <div className="relative h-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center gap-2">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="w-1 h-full bg-primary/10 transform -skew-x-12"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export function MilitaryGear() {
  return (
    <div className="relative py-16 overflow-hidden bg-[#3A3A3A]">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/img/pattern.jpg')",
          backgroundSize: "150px",
          backgroundPosition: "center"
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 opacity-20">
          <svg className="w-20 h-20 mx-auto text-primary" viewBox="0 0 24 24" fill="currentColor">
            <use href="/military-icons.svg#helmet"/>
          </svg>
          <svg className="w-20 h-20 mx-auto text-primary" viewBox="0 0 24 24" fill="currentColor">
            <use href="/military-icons.svg#shield-star"/>
          </svg>
          <svg className="w-20 h-20 mx-auto text-primary" viewBox="0 0 24 24" fill="currentColor">
            <use href="/military-icons.svg#dog-tag"/>
          </svg>
          <svg className="w-20 h-20 mx-auto text-primary" viewBox="0 0 24 24" fill="currentColor">
            <use href="/military-icons.svg#compass"/>
          </svg>
          <svg className="w-20 h-20 mx-auto text-primary" viewBox="0 0 24 24" fill="currentColor">
            <use href="/military-icons.svg#medal"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
