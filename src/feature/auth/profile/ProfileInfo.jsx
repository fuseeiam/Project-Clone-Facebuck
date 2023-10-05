import Avatar from "../../../components/Avatar";
import { PenIcon } from "../../../icons";
import AuthUserAction from "./AuthUserAction";
import UnknownAction from "./UnknownAction";
import FriendAction from "./FriendAction";
import RequesterAction from "./RequesterAction";
import ReceiverAction from "./ReceiverAction";

const mappingObj = {
    AUTH_USER: <AuthUserAction />,
    UNKNOWN: <UnknownAction />,
    FRIEND: <FriendAction />,
    REQUESTER: <RequesterAction />,
    RECEIVER: <ReceiverAction />
};

export default function ProfileInfo({ profileUser, statusWithAuthUser }) {
    return (
        <div className="max-w-6xl mx-auto flex gap-4 px-4 items-end">
            <div className="-mt-9">
                <Avatar className="h-40 outline outline-[3px] outline-white"
                    src={profileUser.profileImage}
                />
            </div>

            <div className="flex-1 mb-2">
                <h2 className="text-2xl font-bold">
                    {profileUser.firstName} {profileUser.lastName}
                </h2>
                <span className="block text-gray-500 font-semibold mb-2">6 friend</span>
                <div className="flex -space-x-2">
                    <Avatar className="h-8" />
                    <Avatar className="h-8" />
                    <Avatar className="h-8" />
                </div>
            </div>

            <div>
                {/* <ReceiverAction /> */}
                {/* <RequesterAction /> */}
                {/* <FriendAction /> */}
                {/* <UnknownAction /> */}
                {/* <AuthUserAction /> */}
                {mappingObj[statusWithAuthUser]}
            </div>
        </div>
    )
}