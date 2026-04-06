import React, { useCallback } from "react";

// CSS Classes
const SIDEBAR_ITEM_BASE = "flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors text-sm";
const SIDEBAR_ITEM_ACTIVE = "bg-indigo-100 text-primary font-medium";
const SIDEBAR_ITEM_INACTIVE = "text-gray-600 hover:bg-gray-200";
const ICON_SIZE = 16;

const SidebarItem = React.memo(({ icon: Icon, label, active = false, onClick }) => {
  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  const itemClass = `${SIDEBAR_ITEM_BASE} ${active ? SIDEBAR_ITEM_ACTIVE : SIDEBAR_ITEM_INACTIVE}`;

  return (
    <button
      className={itemClass}
      onClick={handleClick}
      aria-current={active ? "page" : undefined}
      type="button"
      title={label}
    >
      <Icon size={ICON_SIZE} className="flex-shrink-0" aria-hidden="true" />
      <span className="truncate">{label}</span>
    </button>
  );
});

SidebarItem.displayName = "SidebarItem";

export default SidebarItem;