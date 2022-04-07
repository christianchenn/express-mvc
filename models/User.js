const {Query, QueryParam} = require("../config/database")

module.exports = {
    create: (user) => {
        return QueryParam(
            "INSERT INTO USERS SET ?",
            user
        )
    },
    async getCode(){
        let lastRow = await this.checkLastID()
        let code = "001"
        if(lastRow && lastRow.length>0){
            lastRow = lastRow[0]
            let kode = lastRow.id_user
            kode = +kode.substring(1)
            code = "U" + (kode+1).toString().padStart(3,"0")
        }
        else code = "U" + code

        return code
    },
    getAll(nama=''){
        nama = nama.toLowerCase()
        return Query(`
            SELECT u.*, count(b.bid_id) as "total_bids", count(n.nft_number) as "total_uploads"
            FROM USERS u
                     left join bid b on u.email = b.email
                     left join nft n on u.email = n.uploaded_by
            group by u.email
            `)
    },
    async find(id) {
        const users = await Query(`
                SELECT *
                FROM USERS
                WHERE id_user = '${id}'
            `)
        if(users && users.length>0){
            return users[0]
        }
        else return false
    },
    async checkUnique(email) {
        try{
            let user = await Query(`
                SELECT *
                FROM USERS
                WHERE email = '${email}'
            `)
            if(user && user.length>0){
                return false
            }
            if(user && user.length<=0){
                return true
            }
        }catch (e) {
            console.log(e)
            return true
        }
        return true
    },
    checkLastID(){
        return Query(`
                SELECT *
                FROM USERS
                order by id_user DESC
            `)
    },
    update(user, email){
        return QueryParam(`
            UPDATE USERS
            SET ?
            WHERE email = '${email}'`,
            user
        )
    }
}