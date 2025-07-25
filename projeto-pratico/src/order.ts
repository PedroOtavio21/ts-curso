import { MenuItem } from "./menu-item"
import { OrderStatus } from "./enum"

export class Order {
    public id: number
    public items: MenuItem[]
    public status: OrderStatus

    constructor(id: number, items: MenuItem[]) {
        this.id = id
        this.items = items
        this.status = OrderStatus.PENDING
    }

    updateStatus(newStatus: OrderStatus): void {
        this.status = newStatus
    }

    calculateTotal(): number {
        let total = 0
        this.items.forEach((item) => {
            total += item.price
        })

        return total
    }
}