const sqlite3 = require('sqlite3').verbose()
const config = require('../config.js');
const sql = new sqlite3.Database(config.dirBase)

async function tableLevel(){
  await sql.run('CREATE TABLE IF NOT EXISTS levels (iduser TEXT, level INTEGER, status INTEGER)')
}

module.exports = {
  createTables: async function(){
    try {
      await tableLevel();
    } catch (e) {
      console.error(e)
    }
  }
}