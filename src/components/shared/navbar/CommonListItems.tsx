import React from 'react';


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";
import { ListItem } from './ListItem';

  const totalList = [
    {
        mainTitle :"News",
        list:[
            {
              title: "Alert Dialog",
              href: "/docs/primitives/alert-dialog",
              description:
                "A modal dialog that interrupts the user with important content and expects a response.",
            },
            {
              title: "Hover Card",
              href: "/docs/primitives/hover-card",
              description:
                "For sighted users to preview content available behind a link.",
            },
            {
              title: "Progress",
              href: "/docs/primitives/progress",
              description:
                "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
            },
            {
              title: "Scroll-area",
              href: "/docs/primitives/scroll-area",
              description: "Visually or semantically separates content.",
            },
            {
              title: "Tabs",
              href: "/docs/primitives/tabs",
              description:
                "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
            },
            {
              title: "Tooltip",
              href: "/docs/primitives/tooltip",
              description:
                "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
            },
          ]
    },
    {
        mainTitle :"Forum",
        list: [
            {
              title: "Alert Dialog",
              href: "/docs/primitives/alert-dialog",
              description:
                "A modal dialog that interrupts the user with important content and expects a response.",
            },
            {
              title: "Hover Card",
              href: "/docs/primitives/hover-card",
              description:
                "For sighted users to preview content available behind a link.",
            },
            {
              title: "Progress",
              href: "/docs/primitives/progress",
              description:
                "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
            },
            {
              title: "Scroll-area",
              href: "/docs/primitives/scroll-area",
              description: "Visually or semantically separates content.",
            },
            {
              title: "Tabs",
              href: "/docs/primitives/tabs",
              description:
                "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
            },
            {
              title: "Tooltip",
              href: "/docs/primitives/tooltip",
              description:
                "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
            },
          ]
    }
  ]




const CommonListItems = () => {

    return (
        <>
        {
            totalList.map((mainItem,index)=><NavigationMenuItem key={index}>
            <NavigationMenuTrigger>{mainItem.mainTitle}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {mainItem.list.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}

                >
                  {component.description}
                </ListItem>
              ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>)
        }
        </>

    );
};

export default CommonListItems;