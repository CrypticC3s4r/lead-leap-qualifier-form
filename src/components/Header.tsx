
import { cn } from "@/lib/utils";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={cn("w-full py-6", className)} {...props}>
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Lead <span className="text-form">Qualifikation</span>
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Bitte fülle das Formular vollständig aus
        </p>
      </div>
    </header>
  );
};

export default Header;
