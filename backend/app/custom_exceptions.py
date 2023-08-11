class TaskNotFoundException(Exception):
    """
    Custom exception raised when a requested task is not found.

    This exception is intended to be raised when a task is requested
    but cannot be found in the system. It provides a user-friendly
    error message to help identify the specific task that was not found.

    Args:
        message (str): A custom error message describing the details of
            the task that could not be found.

    Attributes:
        message (str): The error message describing the details of the
            task that could not be found.

    Example:
        raise TaskNotFoundException("Task with ID 123 not found.")
    """
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)
