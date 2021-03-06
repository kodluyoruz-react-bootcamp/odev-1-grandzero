"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _service = require('./lib/service'); var _service2 = _interopRequireDefault(_service);
/************** Different Types Of Calling Async Functions That Returns Promise **************/
// Using async function
const a = async () => { const data = await _service2.default.call(void 0, 1); console.log(data);}; a();

// Then chain method (avoid callback Hell)
//getData(1).then((response) => { console.log(response) });

// Using callbacks (Avoid callback Hell)
//const b = async (callback) => {const dataObj = await callback(1); console.log(dataObj)}; b(getData);

/**
 * https://stackoverflow.com/questions/5127532/is-node-js-console-log-asynchronous/5127757
 *  await console.log(getData(1)) or console.log(await getData(1)) wont work
 *  because console.log is not async function since stdout is synchronous
 */
