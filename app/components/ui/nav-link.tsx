import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/app/lib/utils";


interface NavLinkProps extends Omit<LinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string; // facultatif, mais Next.js ne gère pas le pending
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    const pathname = usePathname(); // chemin actuel

    const isActive = typeof href === "string" ? pathname === href : false;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive ? activeClassName : undefined)}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
