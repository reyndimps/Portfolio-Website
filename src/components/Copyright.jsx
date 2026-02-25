const Copyright = () => {
  return (
    <div className="relative overflow-hidden w-full bg-[#0B1120] pt-10">

                 {/* Stars background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(80)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-white animate-pulse"
                    style={{
                    width: `${Math.random() * 2.5 + 1}px`,
                    height: `${Math.random() * 2.5 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.7 + 0.3,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                    animationDelay: `${Math.random() * 2}s`,
                    }}
                />
                ))}
            </div>


        <div className="max-w-7xl mx-auto py-10">
        <p className="border-t border-gray-700 text-center py-4 text-gray-400">
            Reynaldo Jr. Domingo &copy; 2026. All rights reserved.
        </p>
        </div>
    </div>
  );
}

export default Copyright;