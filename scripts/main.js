// Imports Minecraft's library.
import { world } from "mojang-minecraft";

// prefix's for admin/member commands.
var prefixmember = "!"
var prefixadmin = "-"

world.events.beforeChat.subscribe(eventData => {
  // Won't send any chat messages but continues to functionn
  eventData.cancel = true;
  
  // consts both player and messages
  const player = eventData.sender;
  const message = eventData.message;

  // detects if both prefix did not work.
  if (!message.startsWith(prefixmember) && !message.startsWith(prefixadmin))
  return console.warn("commands ran.")
  
  console.warn('chat inputed.')
});