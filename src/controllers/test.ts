import { itemList } from "../modules/items.js"

const testRequest = async (req: RequestInit, res: any) => {
    res.send(itemList)
    console.log('ok')
}

export default testRequest