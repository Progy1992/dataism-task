from abc import ABC, abstractmethod

from abc import ABC, abstractmethod

class BaseDatabase(ABC):
    """
    Abstract base class defining the interface for database operations.

    This class defines a set of abstract methods that any concrete database
    implementation must provide. These methods outline the basic CRUD (Create,
    Read, Update, Delete) operations that can be performed on database records.

    Note:
        This class is intended to be subclassed and its abstract methods should
        be implemented in derived classes.

    Example:
        class ConcreteDatabase(BaseDatabase):
            def fetch_all_records(self):
                # Implementation for fetching all records.

            def fetch_by_id(self, record_id):
                # Implementation for fetching a record by ID.

            # Implement the other abstract methods...

        db = ConcreteDatabase()
        all_records = db.fetch_all_records()
        record = db.fetch_by_id(record_id=123)
        db.create_record(new_record)
        db.edit_record(existing_record)
        db.delete_record(record_id=123)
    """

    @abstractmethod
    def fetch_all_records(self):
        """
        Retrieve all records from the database.

        Returns:
            list: A list of all records in the database.
        """
        pass

    @abstractmethod
    def fetch_by_id(self, record_id):
        """
        Retrieve a record by its ID.

        Args:
            record_id: The ID of the record to retrieve.

        Returns:
            object: The retrieved record.
        """
        pass

    @abstractmethod
    def create_record(self, record_object):
        """
        Create a new record in the database.

        Args:
            record_object: The object representing the record to be created.

        Returns:
            object: The newly created record.
        """
        pass

    @abstractmethod
    def edit_record(self, record_object):
        """
        Edit an existing record in the database.

        Args:
            record_object: The object representing the record to be edited.

        Returns:
            object: The edited record.
        """
        pass

    @abstractmethod
    def delete_record(self, record_id):
        """
        Delete a record from the database.

        Args:
            record_id: The ID of the record to be deleted.

        Returns:
            bool: True if the deletion was successful, False otherwise.
        """
        pass

        