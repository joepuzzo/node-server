const winston = require('winston');

const { format } = winston;
const { combine, timestamp, json, prettyPrint } = format;

// Custom log format function
const myFormat = format.printf((info) => {
  const { timestamp: tmsmp, level, message, ...rest } = info;
  let log = `${tmsmp} - ${level}:\t${message}`;
  if ( !( Object.keys(rest).length === 0 && rest.constructor === Object ) ) {
    log = `${log}\n${JSON.stringify(rest, null, 2)}`;
  }
  return log;
});


const generateTransports = () => {
  // Winston transports
  const transports = [
    new winston.transports.Console(config.log.console),
    // Add other transports here
    /*
    * See:
    * https://github.com/winstonjs/winston/blob/master/docs/transports.md
    */
  ];

  if(process.env.NODE_ENV !== 'spec'){
    transports.push(new winston.transports.File(config.log.file));
  }

  return transports;
}

const setup = () => {
  winston.configure({
    transports: generateTransports(),
    //exceptionHandlers: generateTransports(),
    format: combine(
      // trace(),
      timestamp(),
      myFormat
    ),
    // Prevent winston from exeting on uncaught error
    exitOnError: false
  });
}

module.exports = setup;