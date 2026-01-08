import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",

        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        outline:
          "border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",

        ghost:
          "bg-transparent text-foreground hover:bg-accent",

        link:
          "bg-transparent text-primary underline-offset-4 hover:underline",

        /* ✅ GOLD VARIANTS */
        gold:
          "bg-gold text-primary-foreground hover:bg-gold/90 shadow-gold",

        hero:
          "bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-primary-foreground",

        heroSolid:
          "bg-gold text-primary-foreground hover:bg-gold/90 shadow-gold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
