const Database = require('better-sqlite3');
const path = require('path');

exports.getAll = (req, res) => {
  const db = new Database(path.resolve(__dirname, './../db/chat.db'), {
    readonly: true,
    fileMustExist: true,
  });

  const contact_ids = [596, 898, 889];

  const stmt = db
    .prepare("SELECT datetime(message.date / 1000000000 + strftime('%s', '2001-01-01'), 'unixepoch', 'localtime') AS " +
      "datetime_utc, text AS body, is_from_me AS mine FROM message WHERE handle_id IN (?, ?, ?) " +
      "ORDER BY datetime_utc ASC");

  const resp = stmt.all(...contact_ids);

  res.json(resp);
};
