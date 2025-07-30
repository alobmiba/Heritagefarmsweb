import { Link } from "react-router-dom";

interface Blog {
    id?: number;
    thumb?: string;
    title: string;
    full_date?: string;
}

interface SingleRecentPostProps {
    blog: Blog;
}

const SingleRecentPost: React.FC<SingleRecentPostProps> = ({ blog }) => {
    const { id, thumb, title, full_date } = blog;

    const truncateString = (str: string): string => {
        if (str.length <= 47) {
            return str;
        }
        return `${str.slice(0, 47)} ...`;
    };

    const truncatedTitle = truncateString(title);

    return (
        <li>
            <div className="thumb">
                <Link to={`/blog-single-with-sidebar/${id}`}>
                    <img src={`/assets/img/blog/${thumb}`} alt="Thumb" />
                </Link>
            </div>
            <div className="info">
                <div className="meta-title">
                    <span className="post-date">{full_date}</span>
                </div>
                <Link to={`/blog-single-with-sidebar/${id}`}>{truncatedTitle}</Link>
            </div>
        </li>
    );
};

export default SingleRecentPost;