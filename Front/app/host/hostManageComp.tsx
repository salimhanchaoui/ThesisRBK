import Link from "next/link"
const HostManage = () => {
    return ( 
    <div className="w-[1100px]">
        <div className="flex flex-row justify-between items-center">
            <h1 className="text-4xl font-bold">welcome user!</h1> <Link className="flex justify-center items-center w-[120px] h-[30px] bg-orange-950 text-white rounded" href='' >add a home</Link> 
        </div>
        <div className="flex flex-col mt-[50px]">
            <h1 className="text-xl">Your reservations</h1>
            <div className="flex flex-row justify-between mt-[20px]">
                <button className="w-[150px] border border-orange-950 rounded-[10px] hover:bg-orange-950 hover:text-white">New Bookings</button>
                <button className="w-[150px] border border-orange-950 rounded-[10px] hover:bg-orange-950 hover:text-white">Current Stays</button>
                <button className="w-[150px] border border-orange-950 rounded-[10px] hover:bg-orange-950 hover:text-white">Next Arriving</button>
                <button className="w-[150px] border border-orange-950 rounded-[10px] hover:bg-orange-950 hover:text-white">Bids</button>
            </div>
        </div>
    </div>
     );
}
 
export default HostManage;