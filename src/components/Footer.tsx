
import { cn } from "@/lib/utils";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn("w-full py-6 mt-12", className)} {...props}>
      <div className="container">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Lead Leap Qualifier. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
