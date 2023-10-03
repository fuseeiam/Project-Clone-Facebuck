import defaultImage from '../../../assets/Summer.jpeg';

export default function CoverImage({ src = defaultImage }) {
    return <img src={src} alt="cover" />;
}