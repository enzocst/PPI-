import { Produto, Pedido, ItemPedido } from "./q3";

let produto1 = new Produto(150, 60, "Camiseta");
let produto2 = new Produto(500, 150, "Calça Jeans");
let produto3 = new Produto(900, 150, "Tênis");

let item1 = new ItemPedido(produto1, 2);
let item2 = new ItemPedido(produto2, 1);
let item3 = new ItemPedido(produto3, 3);

let pedido = new Pedido();
pedido.adicionar_item(item1);
pedido.adicionar_item(item2);
pedido.adicionar_item(item3);

let total_pedido = pedido.obter_total();
console.log(`Total do pedido: R$${total_pedido.toFixed(2)}`)