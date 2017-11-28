
function Logger() {

    /**
     * Current log level
     */
    this.logLevel = '';

    /**
     * Current log message
     */
    this.logMessage

    /**
     * Returns an INFO level log entry
     */
    this.info = function (logMessage) {
        this.logLevel = 'INFO';
        this.logMessage = logMessage;
        this.resolve();
    }

    /**
     * Returns a DEBUG level log entry
     */
    this.debug = function (logMessage) {
        this.logLevel = 'DEBUG';
        this.logMessage = logMessage;
        this.resolve();
    }

    /**
     * Returns an WARNING level log entry
     */
    this.warning = function (logMessage) {
        this.logLevel = 'WARNING';
        this.logMessage = logMessage;
        this.resolve();
    }

    /**
     * Returns an ERROR level log entry
     */
    this.warning = function (logMessage) {
        this.logLevel = 'ERROR';
        this.logMessage = logMessage;
        this.resolve();
    }

    /**
     * Resolves the log call and returns the formatted
     * console message
     */
    this.resolve = function() {
        console.log("[" + this.dateTime() + "][" + this.logLevel + "] - " + this.logMessage);
    }

    /**
     * Returns a formatted string as
     * the current date for any log entries
     * @return String
     */
    this.dateTime = function() {
        let currentDate = new Date();
        return currentDate.getFullYear() + "/" + currentDate.getMonth() + "/" + currentDate.getDate() + " - " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    }

}