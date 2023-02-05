import { itemList } from "../modules/items.js";
const testRequest = async (req, res) => {
    res.send(itemList);
    console.log('ok');
};
export default testRequest;
//# sourceMappingURL=test.js.map