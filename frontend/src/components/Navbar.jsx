import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageCircle, User, Sun } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";
import { useCallback } from "react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = useCallback(() => {
    if (theme === "black") {
      setTheme("wireframe");
    } else {
      setTheme("black");
    }
  }, [theme, setTheme]);

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex flex-wrap items-center justify-between h-full">
          <div className="flex items-center gap-8 flex-shrink-0">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Starchat 2.0</h1>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={toggleTheme}
              className="btn btn-sm gap-2 transition-colors flex items-center"
              aria-label="Toggle theme"
            >
              <Sun className="w-4 h-4" />
              <span className="hidden sm:inline">Theme</span>
            </button>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
