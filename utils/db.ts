import { connect } from '@planetscale/database'

const config = {
  host: process.env.DATABASE_URL,
}

const conn = connect(config)
console.log("conn", conn)

export default conn;