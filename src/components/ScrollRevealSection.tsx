import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const ScrollRevealSection = ({ children, className, id }: ScrollRevealSectionProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.15);

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollRevealSection;
