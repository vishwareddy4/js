function calculateTicketPrice(age) {
    let ticketPrice = 0;
  
    if (age < 0) {
      return 'Invalid age';
    } else if (age < 6) {
      ticketPrice = 0;
    } else if (age < 18) {
      ticketPrice = 10;
    } else if (age < 65) {
      ticketPrice = 20;
    } else {
      ticketPrice = 15;
    }
  
    return ticketPrice;
  }