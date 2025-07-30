import LayoutV1 from '../../components/layouts/LayoutV1';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import NotFoundContent from '../../components/notFound/NotFoundContent';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title>Agrica - Not Found Page</title>
            </Helmet>

            <LayoutV1>
                <BreadCrumb />
                <NotFoundContent />
            </LayoutV1>
        </>
    );
};

export default NotFoundPage;