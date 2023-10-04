import defaultImage from '../../../assets/Summer.jpeg';

export default function CoverImage({ src }) {
    return <img src={src ?? defaultImage} alt="cover" />;
}