import { OrderStatus } from "./enum";
import { MenuItem } from "./menu-item";
import { Order } from "./order";

class CoffeeShop {
    private menu: MenuItem[] = []
    private orders: Order[] = []
    private nextMenuId: number = 1
    private nextOrderId: number = 1

    public addMenuItem(name: string, price: number): void {
        const menuItem = new MenuItem(this.nextMenuId, name, price)
        this.menu.push(menuItem)
        this.nextMenuId++
    }

    public listMenu(): void {
        console.log('Menu:')

        this.menu.forEach((item) => {
            console.log(`${item.id} - ${item.name}: R$ ${item.price.toFixed(2)}`)
        })
    }

    public placeOrder(itensId: number[]): Order {
        const items = this.menu.filter((item) => itensId.includes(item.id))
        const order = new Order(this.nextOrderId, items)
        
        this.nextOrderId++
        this.orders.push(order)
        return order
    }

    public listOrders(): void {
        console.log("Orders:")
        this.orders.forEach((order) => {
            console.log('Order', order.id)
            console.log('Status:', order.status)

            console.log('Items: ')
            order.items.forEach((item) => {
                console.log(`${item.id} - ${item.name}: R$ ${item.price}`)
            })
            console.log('Total: R$', order.calculateTotal())
        })

    }

    public updateOrderStatus(orderId: number, status: OrderStatus): void {
        const order = this.orders.find((order) => order.id === orderId)

        if (order) {
            order.updateStatus(status)
            console.log(`Order with id ${orderId} was updated!`)
        } else {
            console.log(`Order with id ${orderId} was not found!`)
        }
    }
}

const coffeeShop = new CoffeeShop()

coffeeShop.addMenuItem('Expresso', 4.50)
coffeeShop.addMenuItem('Cappuccino', 5.00)
coffeeShop.addMenuItem('Pastel', 4.00)

coffeeShop.listMenu()

const order1 = coffeeShop.placeOrder([1, 3])
const order2 = coffeeShop.placeOrder([1])
const order3 = coffeeShop.placeOrder([2])

coffeeShop.listOrders()

coffeeShop.updateOrderStatus(order1.id, OrderStatus.COMPLETED)
coffeeShop.updateOrderStatus(order2.id, OrderStatus.PREPARING)
