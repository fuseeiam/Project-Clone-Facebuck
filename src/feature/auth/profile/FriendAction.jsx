import ActionButton from "./ActionButton";
import axios from "../../../config/axios";
import { useParams } from "react-router-dom";

export default function FriendAction({ setStatusWithAuthUser }) {
    const { profileId } = useParams();
    const handleClickUnfriend = async () => {
        try {
            await axios.delete(`/friend/${profileId}/unfriend`);
            setStatusWithAuthUser('UNKNOWN');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <ActionButton onClick={handleClickUnfriend}>Unfriend</ActionButton>
    )
}