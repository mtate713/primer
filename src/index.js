export function calculateTotal (items, tax) {
  var total = 0;
  var x;

  for (var i = 0; i < items.length; i++) {
    x = items[i];
    total += x["price"];
    if (x["taxable"] == true) {
      total += (x["price"] * Math.abs(tax));
    }
  }
  
  return total;
}
