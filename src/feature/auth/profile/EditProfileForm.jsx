import { useState } from "react";
import Avatar from "../../../components/Avatar";
import { useAuth } from "../../../hooks/use-auth";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";
import Loading from '../../../components/Loading';
// import axios from "../../../config/axios";

export default function EditProfileForm({ onSuccess }) {
    const [loading, setLoading] = useState(false);
    const { authUser, updateProfile } = useAuth();

    const uploadProfileImage = async input => {
        try {
            const formData = new FormData();
            formData.append('profileImage', input);
            setLoading(true);
            await updateProfile(formData);
            onSuccess();
            // FormData เก็บค่า Key Value
            // ต้องส่งข้อมูลแบบ binary => multipart/from-data คือ ("profileImage",input)
            // แต่ไม่สามารถส่งแบบ application/json คือ {profileImage : input}
        } catch (error) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    };


    const uploadCoverImage = async input => {
        try {
            const formData = new FormData();
            formData.append('coverImage', input);
            setLoading(true);
            await updateProfile(formData);
            onSuccess();
        } catch (error) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    };


    // console.log(authUser.profileImage);
    return (
        <div className="flex-col gap-4">
            {loading && <Loading />}
            <PictureForm
                title="Profile picture"
                initialSrc={authUser.profileImage}
                onSave={uploadProfileImage}
            >
                {(src, onClick) => (
                    <div onClick={onClick}>
                        <Avatar className="h-40" src={src} />
                    </div>
                )}
            </PictureForm>

            <PictureForm
                title="Cover photo"
                initialSrc={authUser.coverImage}
                onSave={uploadCoverImage}
            >
                {(src, onClick) =>
                    <div
                        className="aspect-[3/1] overflow-hidden rounded-md flex items-center justify-center"
                        onClick={onClick}
                    >
                        <CoverImage src={src} />
                    </div>
                }
            </PictureForm>
        </div>
    );
}
