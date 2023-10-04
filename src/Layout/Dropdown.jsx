import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import { RightFromBracketIcon } from "../icons";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../hooks/use-auth";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const dropDownE1 = useRef(null); // {current: null}
    //console.log(dropDownE1);

    /* useRef สร้าง Object มาให้เรา เป็นตัวแปรที่ให้ useState หรือตัวแปรอื่น มาอ้างอิงถึง 
    // useRef เป็นตัวแปรที่มี key = {current:20} ซึ่งเป็นตัวแปรที่จดจำค่าเดิมได้ แต่ถ้ามี state เปลี่ยนแปลงจะ rerender
    const a = useRef(20); 
    const [b, setB] = useState(5)
    const c = 40
    */

    const { logout, authUser } = useAuth(); // {id,firstName,lastName,profileImage,coverImage}

    useEffect(() => {
        const haddleClickOutside = e => {
            if (!dropDownE1.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', haddleClickOutside);
        return () => {
            document.removeEventListener('click', haddleClickOutside);
        };

        /* 
        const fn = () => console.log('clicked');
         document.addEventListener('click', fn); // เมื่อ logout แล้ว login ใหม่ ฟังก์ชันก็ยังทำงานอยู่ แต่ทวีคูณจำนวนที่คลิก ทำให้การทำงานแย่ลงเมื่อลงชื่อเข้าออกบ่อยๆ
         document.removeEventListener('click', fn); // เอามาใช้เมื่อ logout จะ restart การนับ click ใหม่
         */


    }, [])

    // const aElement = document.getElementById('a')
    // aElement.addEventListener('click',()=>{setIsOpen(!isOpen)})

    // click แล้วจะ console.log ออกมาแสดงค่า click 
    // document.addEventListener('click',()=>{
    //     console.log('Click somwhere')})

    return (
        <div className="relative" ref={dropDownE1}>
            {/* dropDownE1 {current:objext <div class="relative"} */}
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <Avatar src={authUser.profileImage} />
            </div>
            {isOpen && (
                <div className="w-96 absolute bg-white right-0 translate-y-1 border rounded-lg shadow-xl">
                    <Link to={`/profile/${authUser.id}`} onClick={() => setIsOpen(false)}>
                        <div className=" flex gap-4 p-2 items-center rounded-xl hover:bg-gray-100">
                            <Avatar className="h-14" src={authUser.profileImage} />
                            <div>
                                <div className="font-semibold">
                                    {authUser.firstName} {authUser.lastName}
                                </div>
                                <div className="text-sm text-gray-500">See your profile</div>
                            </div>
                        </div>
                    </Link>
                    <hr className="m-2 border" />
                    <div className="flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl"
                        onClick={logout}
                    >
                        <div className="bg-gray-300 h-9 aspect-square rounded-full flex justify-center items-center">
                            <RightFromBracketIcon />
                        </div>
                        <div className="font-semibold text-sm">Log out</div>
                    </div>
                </div>
            )}
        </div>
    )
}
