from ..database.base_database import BaseDatabase
from ..logger import logger
from ..extensions import db
import uuid
from ..custom_exceptions import TaskNotFoundException


class InMemoryDatabase(BaseDatabase):
    """
    Concrete implementation of a database using in-memory storage.

    This class provides methods for performing CRUD (Create, Read, Update, Delete)
    operations on records using an in-memory storage. It inherits from the BaseDatabase
    class and implements its abstract methods.

    Attributes:
        db_object: The database object used for accessing the session.

    Example:
        in_memory_db = InMemoryDatabase()
        all_records = in_memory_db.fetch_all_records(Task)
        record = in_memory_db.fetch_by_id(primary_key=123, table=Task)
        in_memory_db.create_record(table=Task, record_object=new_record)
        in_memory_db.edit_record(table=Task, primary_key=123, record_object=updated_record)
        in_memory_db.delete_record(table=Task, primary_key=123)
    """

    def __init__(self):
        """
        Initialize the InMemoryDatabase with a database object.

        Args:
            db_object: The database object providing the session.
        """
        self.db_object = db

    def fetch_all_records(self, table):
        """
        Retrieve all records from the database.

        Args:
            table: The database table to retrieve records from.

        Returns:
            list: A list of serialized records.
        Raises:
            Exception: If an error occurs during the database operation.
        """
        try:
            records = table.query.all()
            if records:
                return [record.serialize() for record in records]
            else:
                return []
        except Exception as e:
            logger.exception(str(e))
            raise Exception(str(e))

    def fetch_by_id(self, primary_key, table):
        """
        Retrieve a record by its primary key.

        Args:
            primary_key: The primary key of the record to retrieve.
            table: The database table to retrieve the record from.

        Returns:
            dict: A serialized record.
        Raises:
            Exception: If the record with the provided primary key is not found
                or if an error occurs during the database operation.
        """
        try:
            record = table.query.get(primary_key)
            if record:
                return record.serialize()
            else:
                raise TaskNotFoundException('No record found for the given id')
        except Exception as e:
            logger.exception(str(e))
            raise Exception(str(e))

    def create_record(self, table, record_object):
        """
        Create a new record in the database.

        Args:
            table: The database table to create the record in.
            record_object: The attributes of the record to be created.

        Raises:
            Exception: If an error occurs during the database operation.
        """
        try:
            new_record = table(id=str(uuid.uuid4()), **record_object)
            self.db_object.session.add(new_record)
            self.db_object.session.commit()
        except Exception as e:
            logger.exception(str(e))
            raise Exception(str(e))

    def edit_record(self, table, primary_key, record_object):
        """
        Edit an existing record in the database.

        Args:
            table: The database table containing the record.
            primary_key: The primary key of the record to be edited.
            record_object: The updated attributes of the record.

        Raises:
            Exception: If the record with the provided primary key is not found
                or if an error occurs during the database operation.
        """
        try:
            record = table.query.get(primary_key)
            if record:
                for attr, value in record_object.items():
                    setattr(record, attr, value)
                self.db_object.session.commit()
            else:
                raise TaskNotFoundException('No record found for the given id')
        except Exception as e:
            logger.exception(str(e))
            raise Exception(str(e))

    def delete_record(self, table, primary_key):
        """
        Delete a record from the database.

        Args:
            table: The database table containing the record.
            primary_key: The primary key of the record to be deleted.

        Returns:
            bool: True if the deletion was successful.
        Raises:
            Exception: If the record with the provided primary key is not found
                or if an error occurs during the database operation.
        """
        try:
            record = table.query.get(primary_key)
            if record:
                self.db_object.session.delete(record)
                self.db_object.session.commit()
            else:
                raise TaskNotFoundException('No record found for the given id')
        except Exception as e:
            logger.exception(str(e))
            raise Exception(str(e))
