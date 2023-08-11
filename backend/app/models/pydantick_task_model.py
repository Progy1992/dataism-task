from pydantic import BaseModel, Field

class TaskModel(BaseModel):
    """
    Pydantic model for representing task data.

    Attributes:
        name (str): Name of the task.
        description (str, optional): Description of the task.

    Note:
        Both `name` and `description` fields are validated based on their minimum and maximum lengths.
        The `name` field cannot be null or missing.
    """

    name: str = Field(..., description="Name of the task", min_length=1)
    description: str = Field(
        None, description="Description of the task", min_length=1, max_length=500)
