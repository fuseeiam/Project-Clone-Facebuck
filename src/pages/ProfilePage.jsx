import ProfileCover from "../feature/auth/profile/CoverImage";
import ProfileInfo from "../feature/auth/profile/ProfileInfo";

export default function ProfilePage() {
    return (
        <div className="bg-gradient-to-b from-gray-400 to-white shadow pb-4">
            <ProfileCover />
            <ProfileInfo />
        </div>
    )
}