const queries = require("./queries.js");

module.exports = {
  viewMember: async function(iduser){
    let select = 'SELECT * FROM levels WHERE iduser = ?';
    let result = await queries.getQuery(select, iduser);
    
    if(result != undefined) {
      return result;
    }
    
    return false;
    
  },
  addMember: async function(iduser, level, status){
    let select = 'SELECT * FROM levels WHERE iduser = ?';
    let result = await queries.getQuery(select, iduser);
    
    if(result == undefined){
    let insert = 'INSERT INTO levels(iduser, level, status) VALUE(?, ?, ?)';
    await queries.runQuery(insert, [iduser, level, status]);
    return true;
      console.log(`Nuevo usuario registrado en la base de datos.`)
    }
    
  },
  updateMember: async function(iduser, level){
    let select = 'SELECT * FROM levels WHERE iduser = ?';
    let result = await queries.getQuery(select, iduser);
    
    if(result != undefined) {
    let update = 'UPDATE levels SET level = level + ? WHERE iduser = ?';
    await queries.runQuery(update, [level, iduser]);
      
      console.log(`Usuario de la base de datos actualizado.`)
    }
  }
}