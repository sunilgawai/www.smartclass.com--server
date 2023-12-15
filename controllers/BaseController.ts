import { Mongoose } from "mongoose";

class BaseController {
  private Model: any;
  private findAllConditions: object;
  private findOneConditions: object;

  constructor(model: any, findAllConditions = {}, findOneConditions = {}) {
    this.Model = model;
    this.findAllConditions = findAllConditions;
    this.findOneConditions = findOneConditions;
  }

  async view(req: any, res: any) {
    try {
        const { id } = req.params
        const data = await this.Model.findOne({
            where: { id },
        })
        if (data) {
            return res.status(200).json({ result: data })
        } else {
            return res.status(404).json({ message: "Resource not found" })
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}
}

export default BaseController;
