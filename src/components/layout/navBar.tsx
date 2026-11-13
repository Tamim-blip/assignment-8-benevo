'use client'

import Link from "next/link";
import { Sprout, CalendarCheck, CalendarPlus, LogOut, SquarePen } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




export  function Navbar() {

  const {data : session } = useSession()

  const user = session?.user


  const HandleSignOut =  () => {

    signOut()
    redirect('/login')
  }
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DCE8DC] bg-[#FFFFFF] text-[#292D29]">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left: logo + app name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Sprout className="size-7 text-[#292D29]" aria-hidden />
          <span className="text-lg font-bold text-[#173F35] tracking-tight sm:text-xl">
            Benevo
          </span>
        </Link>

        {/* Middle: primary route */}
        <nav aria-label="Main">
          <Link
            href="/events"
            className="text-xs font-semibold uppercase text-[#292D29] tracking-widest transition-colors hover:text-[#75A77A] sm:text-sm"
          >
            Upcoming Events
          </Link>
        </nav>

        {/* Right: theme toggle + login */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
         {
          user? <>

          <div className="flex items-center gap-4">

             <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="rounded-full ring-2 ring-[#DCE8DC] hover:ring-[#75A77A]"><Avatar>
          <AvatarImage src={user?.image ?? undefined} alt={user?.name ?? "Profile"} />
          <AvatarFallback className="bg-primary text-xs text-primary-foreground">
            {(user?.name ?? "U")
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar></Button>} />
      <DropdownMenuContent align="end" className="w-64">
        {/* User identity header */}
        <div className="flex items-center gap-3 px-2 py-2.5">
          <Avatar className="size-10">
            <AvatarImage src={user?.image ?? undefined} alt={user?.name ?? "Profile"} />
            <AvatarFallback className="bg-primary text-sm text-primary-foreground">
              {(user?.name ?? "U")
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <p className="truncate text-sm font-semibold">{user?.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            render={<Link href="/create-events" />}
            className="gap-2.5 py-2"
          >
            <CalendarPlus className="text-muted-foreground" />
            Create Event
          </DropdownMenuItem>
          <DropdownMenuItem
            render={<Link href="/manage-events" />}
            className="gap-2.5 py-2"
          >
            <SquarePen className="text-muted-foreground" />
            Manage Events
          </DropdownMenuItem>
          <DropdownMenuItem
            render={<Link href="/joined-events" />}
            className="gap-2.5 py-2"
          >
            <CalendarCheck  className="text-muted-foreground" />
            Joined Events
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={HandleSignOut} variant="destructive" className="gap-2.5 py-2">
            <LogOut />
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>

             <Button onClick={HandleSignOut} variant={"destructive"} className='rounded-full'>Sign out</Button>
          </div>


          </> : <>
           <Link
            href="/login"
            aria-label="Log in"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-9 rounded-full bg-[#254F36] px-4 text-primary-foreground hover:bg-[#193F2D] sm:h-10 sm:px-5",
            )}
          >
            Login
          </Link>
          </>
         }
        </div>
      </div>
    </header>
  );
}
