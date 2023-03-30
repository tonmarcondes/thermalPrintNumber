const escpos = require('escpos');
const device = new escpos.Bluetooth('5A:4A:76:94:5F:77'); // Substitua pelo endereço MAC da sua impressora
const printer = new escpos.Printer(device);

device.open(function(error){
  if (error) {
    printer
      .font('a')
      .align('ct')
      .style('bu')
      .size(1, 1)
      .text('Hello World!')
      .text('This is a test.')
      .text('Thank you!')
      .cut()
      .close();
    console.log(error);
  } else {
    printer
      .font('a')
      .align('ct')
      .style('bu')
      .size(1, 1)
      .text('Hello World!')
      .text('This is a test.')
      .text('Thank you!')
      .cut()
      .close();
  }
});
