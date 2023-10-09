import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { EllipsisIcon } from "../../icons";
import formatTimeAgo from "../../utils/time-ago";
import useDropdown from "../../hooks/use-dropdown";
import { useAuth } from "../../hooks/use-auth";

export default function PostHeader({ postObj, deletePost }) {
    const { dropDownE1, isOpen, setIsOpen } = useDropdown();
    const { authUser } = useAuth();

    const handleClickDelete = () => {
        deletePost(postObj.id);
    };

    return (
        <div className="flex gap-4">
            <Link to={`/profile/${postObj.user.id}`}>
                <Avatar src={postObj.user.profileImage} />
            </Link>

            <div className="flex flex-col flex-1 rounded-xl px-2">
                <Link to="/profile/test"
                    className="hover:underline text-sm font-semibold self-start">
                    {postObj.user.firstName} {postObj.user.lastName}</Link>
                <small className="text-gray-500 text-xs">
                    {formatTimeAgo(postObj.createdAt)}
                </small>
            </div>
            {authUser.id === postObj.user.id && (
                <div className="relative" ref={dropDownE1}>
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="h-8 w-8 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full flex items-center justify-center">
                        <EllipsisIcon className="fill - gray - 500" />
                    </div>
                    {isOpen && (
                        <ul className=" bg-white absolute right-0 translate-y-1 border rounded-lg p-2 shadow w-36">
                            <li className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer">
                                Edit
                            </li>
                            <li className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer"
                                onClick={handleClickDelete}
                            >
                                Delete
                            </li>
                        </ul>)}
                </div>
            )}
        </div>
    );
}
