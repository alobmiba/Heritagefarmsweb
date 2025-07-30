import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    thumb?: string;
    title: string;
    date: {
        day: string;
        month: string;
        year: string;
    };
    author?: string;
    full_date?: string;
}

const SingleBlogV1 = ({ blog }: { blog: DataType }) => {
    const { id, thumb, date, author, full_date, title } = blog;

    return (
        <div className="blog-style-one">
            <div className="thumb">
                <Link to={`/blog-single-with-sidebar/${id}`}>
                    <img src={`/assets/img/blog/${thumb}`} alt={title} className="h-auto" />
                </Link>
                <div className="date">
                    <strong>{date.day}</strong> <span>{date.month}, {date.year}</span>
                </div>
            </div>
            <div className="info">
                <div className="meta">
                    <ul>
                        <li>
                            <Link to="#" >{author}</Link>
                        </li>
                        <li>{full_date}</li>
                    </ul>
                </div>
                <h3 className="post-title">
                    <Link to={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                </h3>
                <Link to={`/blog-single-with-sidebar/${id}`} className="button-regular">
                    Continue Reading <i className="fas fa-arrow-right" />
                </Link>
            </div>
        </div>
    );
};

export default SingleBlogV1;