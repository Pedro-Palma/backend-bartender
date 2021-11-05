import { Id } from "objection";
import Base from "./base";
export class Arrays extends Base{
    id!:Id;
    input_array!:string

    static get tableName() {
        return "arrays";
      }
}
export default Arrays;