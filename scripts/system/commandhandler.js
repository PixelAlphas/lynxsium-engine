// imports config for prefix.
import { prefix } from "../config.js";
import { LynxMenu } from "../ui/user.js";
// export and consts custom commands as functions.
// using switch as for optimizations.

// The original version of lynxsium scripts is actually
// more customizable and flexible. but unfortunately how
// complex me and my friend made, we have to create
// that as switch code. this way for optimization but less
// customizable/flexible.

// >] code example [<
// case 'example' - commands name.
//   { code here. }
//   break;

export const customcommand = function (message, player, eventData) {
  let command = message.trim().slice(prefix.length).split(/ +/)[0].toLowerCase(); 
  switch (command) {
    case 'hello': {
      console.warn("hello commands ran");
      break;
    }
    case "helloadmin": {
      if (!player.hasTag("admin")) return console.warn("hello admin ran but no permissions.");
      console.warn("hello admin ran :D");
      break;
    }
    case 'gui': {
      LynxMenu(player);
      break;
    }
    default:{
      console.warn("unknown commands");
      break;
    }
  }
};