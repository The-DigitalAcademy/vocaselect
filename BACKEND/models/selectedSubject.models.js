const { Pool } = require('pg');

module.exports = {
  async saveSelectedSubjects(selectedIds) {
    try {
      const client = await pool.connect();
      await client.query('BEGIN');

      // Validate if selectedIds is an array of numbers
      if (!Array.isArray(selectedIds) || selectedIds.some(isNaN)) {
        await client.query('ROLLBACK');
        throw new Error('Invalid selected IDs');
      }

      // Prepare the query
      const insertQuery = 'INSERT INTO subjects(subject_id) VALUES($1)';

      // Insert each selected ID into the database
      for (const subjectId of selectedIds) {
        await client.query(insertQuery, [subjectId]);
      }

      await client.query('COMMIT');
      client.release();
      return true;
    } catch (error) {
      return false;
    }
  },
};
