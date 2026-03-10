export function orderInvoiceTemplate(order, user) {
  const items = order.items
    .map(
      (item) => `
      <tr>
        <td>${item.productTitle}</td>
        <td>${item.quantity}</td>
        <td>৳${item.price}</td>
      </tr>
    `
    )
    .join("");

  return `
  <div style="font-family:Arial;padding:20px">
    <h2>Order Invoice</h2>

    <p>Hello ${user.name},</p>
    <p>Thank you for your order.</p>

    <p><strong>Order Date:</strong> ${order.createdAt}</p>

    <table border="1" cellpadding="10" cellspacing="0">
      <thead>
        <tr>
          <th>Item</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        ${items}
      </tbody>
    </table>

    <p style="margin-top:20px">Thank you for shopping with us.</p>
  </div>
  `;
}