import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import { ListItem } from "./ListItem";
import Link from "next/link";
import logo from "@/assest/logo/logo.webp"
import Image from "next/image";

const statrList = [
    {
        path:"/docs",
        title:"Introduction",
        description:"Re-usable components built using Radix UI and Tailwind CSS."
    },
    {
        path:"/docs/installation",
        title:"Installation",
        description:"How to install dependencies and structure your app."
    },
    {
        path:"/docs/installation",
        title:"Installation 2",
        description:"How to install dependencies and structure your app. 2"
    },

]

const StartedItem = () => {
    return (
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image src={logo} width={100} height={100} alt="logo" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {
                statrList.map((item,index)=><ListItem href={item.path} title={item.title}key={index}>
                {item.description}
              </ListItem>)
              }
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
    );
};

export default StartedItem;