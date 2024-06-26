"use client"

import * as React from "react"


import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import StartedItem from "./StartedItem";
import CommonListItems from "./CommonListItems";


export function Navbar() {
  return (
    <NavigationMenu>
        <NavigationMenuList>
        <StartedItem />
        <CommonListItems />
      </NavigationMenuList>
    </NavigationMenu>
  )
}

