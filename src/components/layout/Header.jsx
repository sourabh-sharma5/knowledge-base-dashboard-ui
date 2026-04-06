import React, { useCallback, useMemo } from "react";
import { Bell, Search } from "lucide-react";

// Constants
const LOGO_TEXT = "a";
const USER_INITIALS = "GK";
const WORCSPACE_NAME = "Worcspace 1";
const KEYBOARD_SHORTCUT = "⌘K";

const GRADIENT_CLASSES = "bg-gradient-to-r from-[#1E1B4B] to-[#4F46E5]";
const ICON_SIZE = 18;
const SEARCH_ICON_SIZE = 16;

// Sub-components
const LogoBadge = React.memo(() => (
  <div
    className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center font-bold text-white"
    aria-label="Logo"
  >
    {LOGO_TEXT}
  </div>
));
LogoBadge.displayName = "LogoBadge";

const WorcspaceDropdown = React.memo(() => (
  <div
    className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-md text-sm cursor-pointer hover:bg-white/20 transition-colors"
    role="button"
    tabIndex={0}
    aria-label="Worcspace selector"
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        // Handle dropdown
      }
    }}
  >
    {WORCSPACE_NAME}
    <span className="text-xs">▼</span>
  </div>
));
WorcspaceDropdown.displayName = "WorcspaceDropdown";

const SearchBar = React.memo(({ onSearch }) => {
  const handleSearchChange = useCallback((e) => {
    onSearch?.(e.target.value);
  }, [onSearch]);

  return (
    <div className="flex-1 flex justify-center px-6">
      <div className="flex items-center bg-white/10 px-4 py-1.5 rounded-full w-full max-w-md hover:bg-white/20 transition-colors">
        <Search size={SEARCH_ICON_SIZE} className="text-gray-300 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
          className="bg-transparent outline-none px-2 text-sm w-full placeholder:text-gray-300"
          aria-label="Search input"
        />
        <span className="text-xs text-gray-300 flex-shrink-0">{KEYBOARD_SHORTCUT}</span>
      </div>
    </div>
  );
});
SearchBar.displayName = "SearchBar";

const NotificationBell = React.memo(() => (
  <button
    className="cursor-pointer hover:opacity-80 transition-opacity p-1 rounded hover:bg-white/10"
    aria-label="Notifications"
  >
    <Bell size={ICON_SIZE} />
  </button>
));
NotificationBell.displayName = "NotificationBell";

const AvatarBadge = React.memo(() => (
  <div
    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold cursor-pointer hover:bg-white/30 transition-colors"
    role="button"
    tabIndex={0}
    aria-label={`User profile: ${USER_INITIALS}`}
  >
    {USER_INITIALS}
  </div>
));
AvatarBadge.displayName = "AvatarBadge";

// Main Header Component
const Header = React.memo(({ onCreate }) => {
  const handleSearch = useCallback((query) => {
    // Handle search logic
    console.log("Search query:", query);
  }, []);

  return (
    <header
      className={`w-full flex items-center justify-between px-6 py-3 ${GRADIENT_CLASSES} text-white rounded-b-lg`}
      role="banner"
    >
      {/* LEFT SECTION */}
      <div className="flex items-center gap-3 min-w-[220px]">
        <LogoBadge />
        <WorcspaceDropdown />
      </div>

      {/* CENTER SEARCH */}
      <SearchBar onSearch={handleSearch} />

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4 min-w-[220px] justify-end">
        <NotificationBell />
        <AvatarBadge />
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;