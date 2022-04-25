// Imports Minecraft's / Configs library.
import { world } from "mojang-minecraft";
import { prefix } from "./config.js";

// Imports core's library.
import { customcommand } from "./system/commandhandler.js";

world.events.beforeChat.subscribe(eventData => {
  // Won't send any chat messages but continues to functionn
  eventData.cancel = true;
  
  // consts both player and messages
  const player = eventData.sender;
  const message = eventData.message;

  // detects if both prefix wasn't choosen work
  if (!message.startsWith(prefix))
  return console.warn("chat inputed here.");
  
  customcommand(message, player, eventData);
  
  // prints if chat inputed
  console.warn('commands ran.');
});