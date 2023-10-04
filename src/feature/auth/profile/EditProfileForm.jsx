import Avatar from "../../../components/Avatar";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";

export default function EditProfileForm() {
    return (
        <div className="flex-col gap-4">
            <PictureForm title="Profile picture" >
                {(src, onClick) => (
                    <div onClick={onClick}>
                        <Avatar className="h-40" src={src} />
                    </div>
                )}
            </PictureForm>

            <PictureForm title="Cover photo" >
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
