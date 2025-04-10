
import { useTheme } from "@/hooks/use-theme";
import { FileText, Heart, Home, Info, Menu, Moon, PawPrint, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "./button";

export function AppSidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <Sidebar>
      <SidebarHeader className="py-6">
        <div className="flex items-center gap-2 pl-4">
          <PawPrint size={28} className="text-cat-primary" />
          <h1 className="text-xl font-bold">Kitty-Verse</h1>
        </div>
        <SidebarTrigger asChild>
          <Button size="icon" variant="ghost">
            <Menu />
          </Button>
        </SidebarTrigger>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-cat-primary font-medium" : ""
                    }
                  >
                    <Home className="mr-2 h-5 w-5" />
                    <span>Home</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      isActive ? "text-cat-primary font-medium" : ""
                    }
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    <span>Gallery</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/cat-facts"
                    className={({ isActive }) =>
                      isActive ? "text-cat-primary font-medium" : ""
                    }
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    <span>Cat Facts</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-cat-primary font-medium" : ""
                    }
                  >
                    <Info className="mr-2 h-5 w-5" />
                    <span>About</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
        <div className="mt-4 text-xs text-muted-foreground">
          <p>© 2023 Kitty-Verse</p>
          <p>Adventures in the cat dimension</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
