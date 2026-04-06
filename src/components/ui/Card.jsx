import React, { useCallback } from "react";
import { MoreVertical } from "lucide-react";

// CSS Classes
const CARD_CONTAINER = "bg-white border rounded-lg p-3 text-xs";
const CARD_HEADER = "flex justify-between items-start";
const CARD_TITLE = "font-medium text-gray-800 text-xs";
const CARD_DESC = "text-gray-500 mt-1 leading-5 line-clamp-2";
const CARD_DATE = "text-gray-400 mt-3 text-xs";
const MENU_ICON_SIZE = 16;

const Card = React.memo(({ item, onMenuClick }) => {
  const handleMenuClick = useCallback(() => {
    onMenuClick?.(item);
  }, [item, onMenuClick]);

  return (
    <article className={CARD_CONTAINER}>
      <div className={CARD_HEADER}>
        <h3 className={CARD_TITLE}>{item.title}</h3>
        <button
          onClick={handleMenuClick}
          className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded hover:bg-gray-100"
          aria-label={`Menu for ${item.title}`}
          type="button"
        >
          <MoreVertical size={MENU_ICON_SIZE} aria-hidden="true" />
        </button>
      </div>

      <p className={CARD_DESC}>
        {item.description || "No description available"}
      </p>

      <p className={CARD_DATE}>
        Created On: {item.date}
      </p>
    </article>
  );
});

Card.displayName = "Card";

export default Card;