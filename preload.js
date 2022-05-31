//ipc
// const {
//     contextBridge,
//     ipcRenderer
// } = require("electron");

//Expose Nodejs in the browser using contextBridge
// const crypto = require('crypto');


// ipc
// contextBridge.exposeInMainWorld(
//     "electron", {
//         send: ipcRenderer.send,
//         onAsynchronousMessage: (fn) => {
//             ipcRenderer.on('asynchronous-reply', (event, ...args) => fn(...args));
//           }
//     }
// );


//Expose Nodejs in the browser using contextBridge
// contextBridge.exposeInMainWorld('nodeCrypto', {
//     sha256sum (data) {
//       const hash = crypto.createHash('sha256')
//       hash.update(data)
//       return hash.digest('hex')
//     }
//   })