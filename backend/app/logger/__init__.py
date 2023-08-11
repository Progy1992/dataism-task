import logging
from logging.handlers import RotatingFileHandler
import os

# Create a logger instance specific to the current module
logger = logging.getLogger(__name__)

# Define a log formatter with a specific format
log_formatter = logging.Formatter(
    "%(asctime)s %(levelname)s %(name)s %(message)s"
)

# Create a rotating file handler for logging
log_file_handler = RotatingFileHandler(
    os.path.join(os.getcwd(), 'logs', 'app.log'), maxBytes=1024 * 1024, backupCount=5
)
log_file_handler.setFormatter(log_formatter)

# Add the file handler to the logger
logger.addHandler(log_file_handler)

# Set the logging level for the logger to capture messages of severity ERROR and above
logger.setLevel(logging.ERROR)
