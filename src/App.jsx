import React, { useState, useEffect } from 'react';
import './App.css';

const dummyReservations = [
{ id: 1, guestName: 'joaquim', room: '101', checkIn: '2024-09-10', checkOut: '2024-09-15' },
{ id: 2, guestName: 'guilherme', room: '102', checkIn: '2024-09-16', checkOut: '2024-09-21' },
{ id: 3, guestName: 'enzo', room: '104', checkIn: '2024-09-20', checkOut: '2024-09-23' },
{ id: 4, guestName: 'felipe', room: '100', checkIn: '2024-09-15', checkOut: '2024-09-18' },
{ id: 5, guestName: 'eduardo', room: '107', checkIn: '2024-09-11', checkOut: '2024-09-15' },
{ id: 6, guestName: 'renan', room: '109', checkIn: '2024-09-12', checkOut: '2024-09-14' },
{ id: 7, guestName: 'pedrinho', room: '108', checkIn: '2024-09-12', checkOut: '2024-09-14' },
{ id: 8, guestName: 'kauã', room: '106', checkIn: '2024-09-12', checkOut: '2024-09-13' },
{ id: 9, guestName: 'bruna', room: '105', checkIn: '2024-09-12', checkOut: '2024-09-13' },
];

const App = () => {
  const [reservations, setReservations] = useState([]);
  const [newReservation, setNewReservation] = useState({
    guestName: '',
    room: '',
    checkIn: '',
    checkOut: ''
  });

  useEffect(() => {
    setReservations(dummyReservations);
  }, []);

  const handleCancel = (id) => {
    setReservations(reservations.filter(reservation => reservation.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReservation({
      ...newReservation,
      [name]: value
    });
  };

  const handleAddReservation = (e) => {
    e.preventDefault();
    const newId = reservations.length ? reservations[reservations.length - 1].id + 1 : 1;
    setReservations([
      ...reservations,
      { id: newId, ...newReservation }
    ]);
    setNewReservation({
      guestName: '',
      room: '',
      checkIn: '',
      checkOut: ''
    });
  };

  return (
    <div className='aling'>
      <div className="quartos">
      <h1>Tela de reserva</h1>

      
      <form onSubmit={handleAddReservation} className="reservation-form">
        <h2>Adicionar nova reserva</h2>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="guestName"
            value={newReservation.guestName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Quarto:</label>
          <input
            type="text"
            name="room"
            value={newReservation.room}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Check-In Data:</label>
          <input
            type="date"
            name="checkIn"
            value={newReservation.checkIn}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Check-Out Data:</label>
          <input
            type="date"
            name="checkOut"
            value={newReservation.checkOut}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Adicionar reserva</button>
      </form>
      </div>
      <div className="clientes">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Quarto</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Cancelar</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.guestName}</td>
              <td>{reservation.room}</td>
              <td>{reservation.checkIn}</td>
              <td>{reservation.checkOut}</td>
              <td>
                <button onClick={() => handleCancel(reservation.id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default App;
