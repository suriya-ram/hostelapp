export interface Room 
{    

    totalRooms:number;
    availableRooms: number;
    BookedRooms:number;
}

export interface RoomList{
    roomNumber:number,
    roomtype:string;
    amenities:string;
    price:number;
    photos:string;
    checkintime:Date;
    checkoutime:Date;
    rating:number;
}