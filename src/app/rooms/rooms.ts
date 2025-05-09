export interface Room {
  totalRooms: number;
  roomsAvailable: number;
  bookedRooms: number;

}


export interface RoomList {
  roomNumber: string;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
  rating: number;

}