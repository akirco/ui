import Link from "next/link";
import { Rocket, Github, Moon } from "lucide-react";

const NavBar = () => {
  return (
    <header className="supports-backdrop-blur:bg-background/80 sticky top-0 z-40 w-full border-b bg-background/85 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Rocket />
            AirUi
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/docs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Documentation
            </Link>
            <Link
              href={""}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Components
            </Link>
            <Link
              href={""}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Examples
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <button className="inline-flex items-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground py-2 px-4 relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
              <span className="hidden lg:inline-flex">
                Search documentation...
              </span>
              <span className="inline-flex lg:hidden">Search...</span>
              <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <Link
              href={""}
              className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md w-9 px-0"
            >
              <Github />
            </Link>
            <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md w-9 px-0">
              <Moon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
