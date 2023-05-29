import docs from "@/lib/docs";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
      <div className="relative overflow-hidden py-1 lg:py-2 flex flex-col items-center">
        {docs.map((section) => {
          return (
            <>
              {section.path ? (
                <Link
                  className="text-muted-foreground px-3 py-1 hover:bg-neutral-100 rounded-md"
                  href={section.path}
                >
                  {section.label}
                </Link>
              ) : (
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                  {section.label}
                </h4>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
