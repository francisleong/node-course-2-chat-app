const socket = io();

socket.on('connect', function () {
  socket.emit('getRooms', function (activeRooms) {
    if (activeRooms == undefined) {
      return alert('Error getting active rooms!');
    }

    activeRooms.forEach((room) => {
      console.log(room);
      let option = jQuery('<option />');
      option.attr('value', room);
      option.text(room);
      jQuery('#room').append(option);
    });

  });
});
