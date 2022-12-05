export interface Room {

    totalRooms?: number,
    availableRooms?: number;
    bookedRooms?: number;
}

export interface RoomList{
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkInTime: Date;
    checkOutTime: Date;
}

export interface RondelList{
    rondelNumber: number;
    rondelFirstName: string;
    rondelLastName: string;
    rondelAge: number;
    rondelGoToNextLevel?: boolean;
}