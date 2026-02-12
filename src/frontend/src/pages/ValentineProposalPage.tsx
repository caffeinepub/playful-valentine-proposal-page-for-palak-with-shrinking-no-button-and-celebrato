import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export default function ValentineProposalPage() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setShowCelebration(true);
  };

  // Calculate scale for No button - shrinks progressively
  const noButtonScale = Math.max(0.2, 1 - noClickCount * 0.15);

  if (showCelebration) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/assets/generated/valentine-bg.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Celebration content */}
        <div className="relative z-10 text-center animate-in fade-in zoom-in duration-700">
          <div className="mb-8 flex justify-center">
            <img
              src="/assets/generated/heart-doodle.dim_512x512.png"
              alt="Heart"
              className="w-32 h-32 md:w-48 md:h-48 animate-pulse"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-valentine-primary mb-8 leading-tight px-4">
            YAYYYY I LOVEEEEEEE YOUUUUUUUU
          </h1>
          
          <div className="flex gap-4 justify-center animate-bounce">
            <Heart className="w-12 h-12 md:w-16 md:h-16 fill-valentine-accent text-valentine-accent" />
            <Heart className="w-12 h-12 md:w-16 md:h-16 fill-valentine-primary text-valentine-primary" />
            <Heart className="w-12 h-12 md:w-16 md:h-16 fill-valentine-accent text-valentine-accent" />
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-4 left-0 right-0 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} · Built with{' '}
            <Heart className="inline w-4 h-4 fill-valentine-primary text-valentine-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-valentine-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-2xl w-full">
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Heart doodle decoration */}
          <div className="flex justify-center mb-4">
            <img
              src="/assets/generated/heart-doodle.dim_512x512.png"
              alt="Heart"
              className="w-24 h-24 md:w-32 md:h-32 animate-pulse"
            />
          </div>

          {/* Main question */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-valentine-primary leading-tight">
              Hey Palak! 💕
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-valentine-secondary font-semibold">
              Will you be my Valentine?
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            {/* Yes button */}
            <Button
              onClick={handleYesClick}
              size="lg"
              className="text-xl sm:text-2xl px-12 py-8 h-auto bg-valentine-primary hover:bg-valentine-primary-hover text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold rounded-2xl"
            >
              <Heart className="w-6 h-6 mr-2 fill-current" />
              Yes! 💖
            </Button>

            {/* No button - shrinks on each click */}
            <Button
              onClick={handleNoClick}
              size="lg"
              variant="outline"
              className="text-xl sm:text-2xl px-12 py-8 h-auto border-2 border-valentine-muted text-valentine-muted hover:bg-valentine-muted/10 transition-all duration-300 font-semibold rounded-2xl"
              style={{
                transform: `scale(${noButtonScale})`,
                transformOrigin: 'center',
              }}
            >
              No 😢
            </Button>
          </div>

          {/* Hint text after a few clicks */}
          {noClickCount > 2 && (
            <p className="text-valentine-secondary text-lg animate-in fade-in slide-in-from-bottom-2 duration-500 mt-4">
              The "No" button is getting smaller... maybe it's a sign? 😊
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center text-sm text-muted-foreground px-4">
        <p>
          © {new Date().getFullYear()} · Built with{' '}
          <Heart className="inline w-4 h-4 fill-valentine-primary text-valentine-primary" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-valentine-primary transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
